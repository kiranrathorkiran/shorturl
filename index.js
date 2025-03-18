const express = require('express')
const urlRoute=require('./routes/Url')
const URL=require('./models/url')
const {connectMongoose}=require('./Connect')
 const app=express();
 require('dotenv').config()
 

const PORT=process.env.PORT;
app.use(express.json())
app.use('/url',urlRoute)

app.get('/:shortid',async (req,res)=>{
  let shortId= req.params.shortid;

  const entry= await  URL.findOneAndUpdate({
    shortId
   },
{
    $push:{
    visitHistory: {timestamp:Date.now()}
    }
   }
)

    if (entry) {
        res.redirect(entry.redirectUrl);
    } else {
        res.status(404).send('URL not found');
    }

})

connectMongoose(process.env.DATABASE_URL)
.then(()=>{
    console.log("connected to database")
})






app.get('/',(req,res)=>
{
    res.send("_________________SHORT URL_____________");
})
app.listen(PORT, () => console.log("server _____________started!!! at port :" + PORT))
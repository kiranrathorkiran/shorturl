const shortid= require('shortid');
const URL=require('../models/url')

async function handleGenetrateNewShortUrl(req,res) {
     const body=req.body;
     if(!body.url) return res.status(400).json({error:'url is reqiure'})
     if(!body) return res.status(400).json({error:'url is require'})
 const shortID=shortid();


await URL.create({
    shortId : shortID,
    redirectUrl:body.url,
    visitHistory:[],

});
return res.json({id:shortID});
}

module.exports={
    handleGenetrateNewShortUrl
}
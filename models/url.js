const express =require('express')
const app = express();
const mongoose = require('mongoose');
const urlshort=new mongoose.Schema({
    shortId:{
        type:String,
        require:true,
        unique:true
    },

    redirectUrl:{
        type:String,
        require:true,
        
    },
    visitHistory :[{timestamp: {
        type: Date, // Change this to Date
        default: Date.now // Set default value to current timestamp
    }}],
    },{timestamps:true})
 
const URL=mongoose.model('urlshort',urlshort)

module.exports =URL




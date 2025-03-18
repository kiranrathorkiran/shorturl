const express = require('express');
const {handleGenetrateNewShortUrl}=require('../controllers/Url');
 const router = express.Router();

 router.post('/',handleGenetrateNewShortUrl)
 module.exports=router;
const express = require('express');
const router = express.Router();

//http://localhost:4000/api/auth
router.get('/auth',(req,res)=>{
    console.log("get auth")
    res.send("Hello auth !")
})

module.exports = router
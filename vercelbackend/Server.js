const express = require('express');
const app = express();
const cors = require("cors");
require('dotenv').config();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors('*'));
app.use('/api/test',(req,res)=>{
    res.send("hurra api is working");
});
app.listen(PORT,(req,res)=>{console.log('Server is listening at port 3000')});

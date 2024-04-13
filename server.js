const express = require("express");
// const postsRoutes  = require('./Routes/posts')
const app = express();
const morgan = require("morgan");
const cors = require('cors');
const { readdirSync} = require('fs')
const bodyParse = require('body-parser');
const connectDB = require('./Config/db');

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParse.json({limit:'10mb'}));

// app.use('/api',postsRoutes)
    connectDB();
readdirSync('./Routes')
.map((r)=>
app.use('/api',require('./Routes/'+r)));

app.listen(4000,()=> console.log("server running port 4000"))
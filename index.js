import express from 'express'
import dotenv from 'dotenv'
import db from './config/mongoose.js'
import router from './routes/index.js'

// Load the dotenv config also pass the path if require like path:'./' 
dotenv.config()
const app =express();
const PORT=process.env.PORT || 8080;




app.use('/',router);

// Listen
app.listen(PORT,(err)=>{
    if(err){console.log(`Error while loading the server`);}

    console.log(`Server is running in ${process.env.dev_mode} mode at ${PORT}`)
})
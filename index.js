import express from 'express'
import dotenv from 'dotenv'
import db from './config/mongoose.js'
import router from './routes/index.js'
import cors from 'cors'
import morgan from 'morgan';
import { accessLogStream } from './config/logStream.js'
import bodyParser from 'body-parser';



// Load the dotenv config also pass the path if require like path:'./' 
dotenv.config()
const app =express();
const PORT=process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(morgan(process.env.morganFormat,{stream:accessLogStream}))
app.use(cors()); //it is used for cross origin resource sahring. We can give the option. Also this enhance the sequirty
app.use('/',router);



// Listen
app.listen(PORT,(err)=>{
    if(err){console.log(`Error while loading the server`);}

    console.log(`Server is running in ${process.env.dev_mode} mode at ${PORT}`)
})
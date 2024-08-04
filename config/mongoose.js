import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config('../') //intialize .env file


const connectDB =async ()=>{
    try {
        await mongoose.connect(`${process.env.mongoDb_url}`);
    } catch (err){
        console.log(`Error while connection with db ${err}`)
    }
}

connectDB(); //connect with MongoDB URL

// acquire the db connection
const db=mongoose.connection;
db.on('error',console.error.bind(console,'Error while connection with db'))
db.once('open',()=>{
    console.log('Connection is eastablished with db!');
})

export default db;


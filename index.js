import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';


const app = express();
dotenv.config();


const connect = async () => {
    try {
      await mongoose.connect(process.env.DB_CONNECT);
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };

  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });



app.listen (8000, ()=> {
    console.log('listening on port 8000');
})
// added "type":"module", in package.json to use the react type syntax of importing files
import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js'; 

const app=express();
dotenv.config();
//Using express middleware to connect my app to the post routes

//set up express and added body paret to limit the image size
app.use(bodyparser.json({limit:"30mb",extended:true}));
app.use(bodyparser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use('/posts',postRoutes);
app.get('/',(req,res)=>{
    res.send('Hello to memories');
});

const PORT=process.env.PORT||5000;

//connecting with mongoDB =>> useNewUrlParser:true,useUnifiedTopology:true are not required but we set them true to avoid errors in console
//=>> .then run the app =>> .catch print the error
mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> app.listen(PORT,()=>console.log(`Server running on ${PORT}`)))
.catch((error)=>console.log(error.message))

// just there to avoid warnings in console
mongoose.set('useFindAndModify',false)

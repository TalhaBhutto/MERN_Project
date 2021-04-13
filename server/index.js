// added "type":"module", in package.json to use the react type syntax of importing files
import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

//set up express and added body paret to limit the image size
const app=express()
app.use(bodyparser.json({limit:"30mb",extended:true}));
app.use(bodyparser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

//mongoDB connection link
const CONNECTION_URL = 'mongodb+srv://Talha:lYDxLcpsmAs2gC0Y@cluster0.gmnqm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// port address =>> for local host:5000 =>> for heroku process.env.PORT
const PORT=process.env.PORT||5000;

//connecting with mongoDB =>> useNewUrlParser:true,useUnifiedTopology:true are not required but we set them true to avoid errors in console
//=>> .then run the app =>> .catch print the error
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> app.listen(PORT,()=>console.log(`Server running on ${PORT}`)))
.catch((error)=>console.log(error.message))

// just there to avoid warnings in console
mongoose.set('useFindAndModify',false)
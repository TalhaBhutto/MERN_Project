// added "type":"module", in package.json to use the react type syntax of importing files
import express from 'express';
import bodyparser from 'body-parser';
import mongooses from 'mongoose';
import cors from 'cors';

//set up express and added body paret to limit the image size
const app=express()
app.use(bodyparser.json({limit:"30mb",extended:true}));
app.use(bodyparser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

//mongoDB connection link
const CONNECTION_URL = 'mongodb+srv://Talha:lYDxLcpsmAs2gC0Y@cluster0.gmnqm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// added "type":"module", in package.json to use the react type syntax of importing files
import express from 'express';
import bodyparser from 'body-parser';
import mongooses from 'mongoose';
import cors from 'cors';

const app=express()
app.use(bodyparser.json({limit:"30mb",extended:true}));
app.use(bodyparser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.
import { Mongoose } from 'mongoose';
import PostMessage from '../models/postMessage.js';
import postMessage from '../models/postMessage.js'

export const getPosts=async (req,res)=>{
    try{
        const postMessages=await postMessage.find();
        
        console.log(postMessages);

        res.status(200).json(postMessages);
    }
    catch(error){
        res.status(404).json({message:error.message})
    }
}
export const createPost=async (req,res)=>{
    const post =req.body;
    const newPost=new PostMessage(post);
    try{
        await newPost.save();
        res.status(201).json(newPost);
    }
    catch(error){
        res.status(409).json({message:error.message});

    }
}
export const updatePost=async (req,res)=>{
    const {id:_id}=req.params;
    if(!Mongoose.prototype.ObjectId.isValid(_id)) return res.status(404).send("No post with that id.");
    try{
        await newPost.save();
        res.status(201).json(newPost);
    }
    catch(error){
        res.status(409).json({message:error.message});

    }
}
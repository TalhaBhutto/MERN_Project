import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js'

export const signin=async (req,res)=>{
    const {email,password}=req.body;
    try{
        const existingUser=await User.findOne({email});
        if(!existingUser) return res.status(404).json({message:"User doesn't exist"});
        const isPasswordCorrect= await bcrypt.compare(password,existingUser.password);
        if(!isPasswordCorrect) return res.status(400).json({message:"Invalid Credentials."});
        const token=jwt.sign({email:existingUser.email,id:existingUser._id})
    }
    catch(e){
        console.log(e);
    }
}
export const signup=async (req,res)=>{
    
}
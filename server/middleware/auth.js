import jwt from 'jsonwebtoken';

const auth= async (req,res,next)=>{
    try{
        const token=req.headers.Authorization.split(" ")[1];
        const isCustomAuth =token.lenght<500;
        let decodedData;
        if(token && isCustomAuth){
            decodedData=jwt.verify(token,'test');
            req.userID=decodedData?.id;
        }
        else{
            decodedData=jwt.decode(token);
            req.userID=decodedData?.sub;
        }
        next()
    }
    catch(error){
        console.log(error);
    }
}

export default auth;
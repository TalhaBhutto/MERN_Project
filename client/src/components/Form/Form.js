import React from 'react'
import useStyles from './styles';
import {useState, useEffect} from 'react';
import {TextField,Button,Typography,Paper} from '@material-ui/core';
//import FileBase from 'react-file-base64';
import {useDispatch,useSelector} from 'react-redux';
import { createPost,updatePost } from '../../actions/posts';

function Form({currentId,setCurrentId}) {
    const [postData, setPostData] = useState({
        title:'',message:'',tags:'',selectedFile:''
    });
    const user=JSON.parse(localStorage.getItem('profile'));
    const post = useSelector(state => currentId?state.posts.find((p)=>p._id===currentId):null)
    const classes=useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        if(post) setPostData(post);
    }, [post])
    
    const handleSubmit =async (e)=>{
        e.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId,{...postData,name:user?.result?.name}));
        }
        else{
            dispatch(createPost({...postData,name:user?.result?.name}));
        }
        clear();
    }
    const clear=()=>{
        setCurrentId(null);
        setPostData({
            title:'',message:'',tags:'',selectedFile:''
        });

    }
    const uploadImage=async (e)=>{
        const file=e.target.files[0];
        const base64=await convertBase64(file);
        setPostData({...postData,selectedFile:base64});
    }
    const convertBase64=(file)=>{
        return new Promise((resolve,reject)=>{
            const fileReader=new FileReader();
            fileReader?.readAsDataURL(file);
            fileReader.onload=()=>{
                resolve(fileReader.result);
            }
            fileReader.onerror=(error)=>{
                reject(error);
            }
        })
    }
    if(!user?.result?.name){
        return(
            <Paper className={classes.paper}>
                <Typography varient="h6" align="center">
                    Please login to create your own memories and like other's as well.
                </Typography>
            </Paper>
        )
    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography varient="h6">{currentId?`Edit`:'Creat'} a Memory</Typography>
                <TextField name="title" variant="outlined" label="title" fullWidth value={postData.title} onChange={(e)=>setPostData({...postData,title:e.target.value})}/>
                <TextField name="message" variant="outlined" label="message" fullWidth value={postData.message} onChange={(e)=>setPostData({...postData,message:e.target.value})}/>
                <TextField name="tags" variant="outlined" label="tags" fullWidth value={postData.tags} onChange={(e)=>setPostData({...postData,tags:e.target.value})}/>
                <div className={classes.fileInput}>
                    {/* <FileBase type="file" multiple={false} onDone={(base64)=>setPostData({...postData,selectedFile:base64})}/> */}
                    <input id="file" type="file" multiple={false} onChange={(e)=>{uploadImage(e)}}/>
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form

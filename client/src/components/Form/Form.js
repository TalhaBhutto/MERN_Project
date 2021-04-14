import React from 'react'
import useStyles from './styles';
import {useState} from 'react';
import {TextField,Button,Typography,Paper} from '@material-ui/core';
import FileBase from 'react-file-base64'
import { Clear } from '@material-ui/icons';

function Form() {
    const [postData, setPostData] = useState({
        creator:'',title:'',message:'',tags:'',selectedFile:''
    });
    const classes=useStyles();
    const handleSubmit =()=>{
        
    }
    const clear=()=>{
        
    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography varient="h6">Creating a Memory</Typography>
                <TextField name="creator" varient="outlined" label="creator" fullWidth value={postData.creator} onChange={(e)=>setPostData({...postData,creator:e.target.value})}/>
                <TextField name="title" varient="outlined" label="title" fullWidth value={postData.title} onChange={(e)=>setPostData({...postData,title:e.target.value})}/>
                <TextField name="message" varient="outlined" label="message" fullWidth value={postData.message} onChange={(e)=>setPostData({...postData,message:e.target.value})}/>
                <TextField name="tags" varient="outlined" label="tags" fullWidth value={postData.tags} onChange={(e)=>setPostData({...postData,tags:e.target.value})}/>
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={(base64)=>setPostData({...postData,selectedFile:base64})}/>
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form

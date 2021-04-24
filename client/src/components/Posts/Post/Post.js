import React from 'react'
import useStyles from './styles';
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {deletePost,likePost} from '../../../actions/posts'
import { ThumbUpAltOutlined } from '@material-ui/icons';

const Post=({post,setCurrentId})=> {
    const dispatch = useDispatch();
    const classes=useStyles();
    const user=JSON.parse(localStorage.getItem('profile'));
    const Likes=()=>{
        if(post.like.length>0){
            return post.like.find((like)=>like===(user?.result?.googleID||user?.result?._id))?
            (
                <>
                <ThumbUpAltIcon fontSize="small"/>&nbsp;{post.like.length>2?`You and ${post.like.length -1} others`:`${post.like.length} like${post.like.length>1?"s":''}`}</>
            ):
            (
                <><ThumbUpAltOutlined fontSize="small"/> &nbsp;{post.like.length}{post.like.length===1?'Like':'Likes'}</>
            );
        }
        return <><ThumbUpAltOutlined fontSize="small"/> &nbsp;Like</>
    }
    const displayTags=(p=post.tags)=>{
        const t=p[0].split(" ");
        return t.map((tag)=>tag[0]!=="#"?`#${tag} `:`${tag} `)
    }
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{post.name}</Typography>
                <Typography variant="h6">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color:'white'}} size="small" onClick={()=>setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{displayTags()}</Typography>
            </div>
            <Typography className={classes.title} variant="h5">{post.title}</Typography>
            <CardContent>
            <Typography variant="body2" color="textSecondary">{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" disabled={!user?.result} color="primary" onClick={()=>dispatch(likePost(post._id))}>
                    <Likes/>
                </Button>
                <Button size="small" color="primary" onClick={()=>dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small"/>
                    &nbsp;
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post

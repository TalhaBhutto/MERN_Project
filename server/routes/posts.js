// All the routes related to POST will be here
import express from 'express';
import {getPosts,createPost,updatePost,deletePost,likePost} from '../controllers/posts.js'

const router=express.Router();

router.get('/',getPosts);
router.post('/',createPost);
router.patch('/:id',updatePost);
router.delete('/:id',deletePost);
router.patch('/:id/likePost',likePost);

export default router;
import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

// GET http://localhost:5000/posts
// returns all posts
router.get('/', getPosts);

// POST http://localhost:5000/post
// add a post
// title: string, req
// message: string, req
// creator: string, req
// tags: [string]
// selectedFile: string
// likeCount: Number, default 0
// createdAt: Date, default Date.now
router.post('/', createPost);

export default router;
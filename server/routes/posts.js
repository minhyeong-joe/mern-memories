import express from "express";
import {
	getPosts,
	createPost,
	updatePost,
	deletePost,
	likePost,
} from "../controllers/posts.js";

const router = express.Router();

// GET http://localhost:5000/posts
// returns all posts
router.get("/", getPosts);

// POST http://localhost:5000/posts
// add a post
// title: string, req
// message: string, req
// creator: string, req
// tags: [string]
// selectedFile: string
// likeCount: Number, default 0
// createdAt: Date, default Date.now
router.post("/", createPost);

// PATCH http://localhost:5000/posts/:id
// edit a post
router.patch("/:id", updatePost);

// DELETE http://localhost:5000/posts/:id
// delete a post
router.delete("/:id", deletePost);

// PATCH http://localhost:5000/posts/:id/likePost
// like a post
router.patch("/:id/likePost", likePost);

export default router;

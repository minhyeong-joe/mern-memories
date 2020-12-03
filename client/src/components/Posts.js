import React from 'react';
import { useSelector } from 'react-redux';

import SinglePost from './SinglePost';
import useStyles from '../styles/Posts';

const Posts = () => {
    const classes = useStyles();
    const posts = useSelector(state => state.posts);

    console.log(posts);

    return (
        <>
            <h1>POSTS</h1>
            <SinglePost />
            <SinglePost />
        </>
    );
};

export default Posts;
import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import SinglePost from "./SinglePost";
import useStyles from "../styles/Posts";

const Posts = ({ setCurrentId }) => {
	const classes = useStyles();
	const posts = useSelector((state) => state.posts);

	return !posts ? (
		<CircularProgress />
	) : posts.length ? (
		<Grid
			className={classes.container}
			container
			alignItems="stretch"
			spacing={3}
		>
			{posts.map((post) => (
				<Grid key={post._id} item xs={12} sm={6}>
					<SinglePost post={post} setCurrentId={setCurrentId} />
				</Grid>
			))}
		</Grid>
	) : (
		<Alert severity="warning">There is no post.</Alert>
	);
};

export default Posts;

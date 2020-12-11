import * as types from "../actions/types";

const postsReducer = (posts = [], action) => {
	switch (action.type) {
		case types.FETCH_POSTS:
			return action.payload;
		case types.CREATE_POST:
			return [...posts, action.payload];
		case types.UPDATE_POST:
		case types.LIKE_POST:
			return posts.map((post) =>
				post._id === action.payload._id ? action.payload : post
			);
		case types.DELETE_POST:
			return posts.filter((post) => post._id !== action.payload);
		default:
			return posts;
	}
};

export default postsReducer;

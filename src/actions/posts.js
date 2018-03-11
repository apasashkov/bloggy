// FETCH_POSTS
export const fetchPosts = posts => ({
  type: 'FETCH_POSTS',
  posts,
});

// ADD_POST
export const addPost = (post = {}) => ({
  type: 'ADD_POST',
  post,
});

// INCREMENT_POST_VIEWS
export const incrementPostViews = postId => ({
  type: 'INCREMENT_POST_VIEWS',
  postId,
});

// REMOVE_POST
export const removePost = ({ id } = {}) => ({
  type: 'REMOVE_POST',
  id,
});

const postsReducerDefaultState = [];
export default (state = postsReducerDefaultState, action) => {
  switch (action.type) {
  case 'FETCH_POSTS':
    return action.posts;
  case 'ADD_POST':
    return [action.post, ...state];
  case 'INCREMENT_POST_VIEWS':
    return state.map((post) => {
      if (post.id === action.postId) {
        return { ...post, views: post.views + 1 };
      }
      return post;
    });
  case 'REMOVE_POST':
    return state.filter(({ id }) => id !== action.id);
  default:
    return state;
  }
};

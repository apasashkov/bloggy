import { combineReducers } from 'redux';

import postsReducer from './posts';
import filtersReducer from './filters';

export default combineReducers({
  posts: postsReducer,
  filters: filtersReducer,
});

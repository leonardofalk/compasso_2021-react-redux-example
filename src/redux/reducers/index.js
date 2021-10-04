import { combineReducers } from 'redux';
import { reducer as postReducer } from './showPostReducer'
import { reducer as categoryReducer } from './showCategoryReducer'

export default combineReducers({
  postReducer,
  categoryReducer,
});

import { CATEGORY_REQUEST, CATEGORY_ERROR, CATEGORY_SUCCESS } from '../types/categoryTypes'

const INITIAL_STATE = {
  posts: [],
  error: null,
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CATEGORY_REQUEST:
      return { ...state, loading: true }
    case CATEGORY_SUCCESS:
      return { ...state, loading: false, posts: action.posts }
    case CATEGORY_ERROR:
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}

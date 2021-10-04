import { POST_SUCCESS } from '../types/postTypes'

const INITIAL_STATE = {
  post: {},
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case POST_SUCCESS:
      return { ...state, loading: false, post: action.post }
    default:
      return state
  }
}

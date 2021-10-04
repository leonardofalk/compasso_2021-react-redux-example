import { POST_SUCCESS } from '../types/postTypes'

export const postSuccess = (post) => ({
  type: POST_SUCCESS,
  post,
})

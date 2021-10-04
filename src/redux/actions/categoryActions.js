import { CATEGORY_REQUEST, CATEGORY_ERROR, CATEGORY_SUCCESS } from '../types/categoryTypes'

export const categoryRequest = (category) => ({
  type: CATEGORY_REQUEST,
  category,
})

export const categorySuccess = (posts) => ({
  type: CATEGORY_SUCCESS,
  posts,
})

export const categoryError = error => ({
  type: CATEGORY_ERROR,
  error,
})

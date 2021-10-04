import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Post } from '../../components'
import { categoryRequest } from '../../redux/actions/categoryActions'

export const CategoryPostPage = () => {
  const dispatch = useDispatch()
  const { category } = useParams()
  const posts = useSelector(state => state.categoryReducer.posts)

  React.useEffect(() => {
    dispatch(categoryRequest(category))
  }, [dispatch, category])

  return (
    <>
      {posts.map((post, index) => (
        <Post {...post} key={index} />
      ))}
    </>
  )
}

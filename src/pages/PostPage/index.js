import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Post } from '../../components'
import { ApiService } from '../../services'
import { postSuccess } from '../../redux/actions/postActions'

const api = new ApiService()

export const PostPage = () => {
  const { id } = useParams()
  const post = useSelector(state => state.postReducer.post)
  const dispatch = useDispatch()

  React.useEffect(() => {
    api.getPostById(id)
      .then(data => dispatch(postSuccess(data)))
  }, [id, dispatch])

  return <>
    <Post {...post}  />
  </>
}

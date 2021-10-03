import React from 'react'
import { useParams } from 'react-router-dom'
import { Post } from '../../components'
import { ApiService } from '../../services'

const api = new ApiService()

export const PostPage = () => {
  const { id } = useParams()
  const [post, setPost] = React.useState({})

  React.useEffect(() => {
    api.getPostById(id).then(setPost)
  }, [id])

  return <Post {...post}  />
}

import React from 'react'
import { useParams } from 'react-router-dom'
import { Post } from '../../components'
import { ApiService } from '../../services'

const api = new ApiService()

export const CategoryPostPage = () => {
  const { category } = useParams()
  const [posts, setPosts] = React.useState([])

  React.useEffect(() => {
    api.getPostsByCategory(category).then(setPosts)
  }, [category])

  return (
    <>
      {posts.map((post, index) => (
        <Post {...post} key={index} />
      ))}
    </>
  )
}

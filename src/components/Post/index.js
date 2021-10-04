import React from 'react'

export const Post = ({ title, ...props }) => {

  return (
    <div>
      <h3>{title}</h3>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  )
}

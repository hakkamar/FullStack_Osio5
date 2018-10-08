import React from 'react'

const Blog = ({blog}) => (
  <div className="nimiDiv">
    {blog.title} {blog.author}
  </div>  
)

export default Blog
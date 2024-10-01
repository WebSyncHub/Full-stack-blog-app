import React, { useState } from 'react'
import "./blogDetails.css"
import { useBlogContext } from '../blog_logic/BlogContext'
const BlogDetails = ({title, description, image, _id, dltBtn}) => {
  const { dltBlog } = useBlogContext()

  const handleDlt = async () => {
    const response = await fetch(`http://localhost:3000/api/blog-post/${_id}`, {
      method : "DELETE",
    })
    const data = await response.json()
    if (response.ok) {
      dltBlog(data._id)
    }
  }
  return (
    <div className='blogs-detail'>
     <img src={image} alt="blog-image" className='blog-image' />
              <div className="post__info">
              <h2>{title}</h2>
              <p>{description}</p>
              </div>
              <div className="dlt-button">
              <img src={dltBtn} onClick={handleDlt} alt="delete button" className='dlt' width={20}/>
              </div>
    </div>
  )
}

export default BlogDetails
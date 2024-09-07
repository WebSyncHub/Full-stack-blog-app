import React, {useState, useEffect} from 'react'
import './dashboard.css'
import { images } from '../constant'
import { handleGetBlogs, BlogForm } from '../components'

const Dashboard = () => {
  const [blogs, setBlogs] = useState([])

  let turncateDesc = (description, maxchars = 120) => {

    if (description.length > maxchars) {
      return description.slice(0, maxchars) + "..."
    }
    return description
  }
  useEffect(() => {
    handleGetBlogs()
    .then(data => setBlogs(data))
    .catch(error => console.log("Can't able to fetch any blog!"))
  }, [])
  
  return (
    <div className='dashboard'>
      <div className="post-area">
        <div className="posts">
          {blogs && blogs.map(blog => (
            <div className="my-post" key={blog._id}>
              <img src={blog.image} alt="blog Image" />
              <div className="post__info">
              <h2>{blog.title}</h2>
              <p>{turncateDesc(blog.desc)} <button>Read more</button></p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="post-form">
        <BlogForm />
      </div>
    </div>
  )
}

export default Dashboard
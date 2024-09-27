import React, {useState, useEffect} from 'react'
import './dashboard.css'
import { images } from '../constant'
import { handleGetBlogs, BlogForm, BlogDetails } from '../components'

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
             <BlogDetails title={blog.title} description={blog.desc} image={blog.image} _id={blog._id} dltBtn={images.dltBtn}/>
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
import React, { useState, useEffect } from 'react';
import { images } from '../constant';
import "./blogSection.css";

const BlogSection = () => {

  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const hangleGetBlogs = async () => {
      try {
          const fetchBlog = await fetch("http://localhost:3000/api/blog-post", {
            // credentials: 'include' // Ensure credentials are included in the request
          });
          if (!fetchBlog.ok) {
              throw new Error(`HTTP error! status: ${fetchBlog.status}`);
          }
          const response = await fetchBlog.json();
          console.log(response)
          setBlogs(response);
      } catch (error) {
          setError(error.message);
          console.error("Error fetching the blog post:", error);
      }
    };
    
    hangleGetBlogs();
  }, []); // Added empty dependency array to run effect only once

  return (
    <div className='blog__section'>
        <h1>All Blogs</h1>
        <div className="blog__section-search">
            <button>Web Dev</button>
            <button>SEO</button>
            <button>Content Writing</button>
            <button>Design</button>
            <button>All</button>
        </div>
        {blogs && blogs.map(blog => (
        <div className="blog__section-cards" key={blog._id}>
            <div className="blog__section-card">
              <div className="card-img">
                <img src={blog.image} alt="dev card image" />
              </div>
              <div className="card-info">
                <h2 className="card-heading">{blog.title}</h2>
                <p className="card-description">{blog.desc}</p>
                <div className="read__info">
                    <span className="publisher">by <b>Umer Khokhar</b></span>
                    <span className="post-time">13min Ago</span>
                </div>
              </div>
            </div>
        </div>
        ))}
    </div>
  );
};

export default BlogSection;

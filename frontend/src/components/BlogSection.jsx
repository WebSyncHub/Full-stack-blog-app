import React, { useState, useEffect } from 'react';
import { images } from '../constant';
import { FetchFromAPI, handleGetBlogs } from '.';
import "./blogSection.css";

const BlogSection = () => {

  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

   const hangleBlogs = async () => {
        handleGetBlogs()
        .then(data => setBlogs(data))
        .catch(error => setError("Unable to fetch blogs!"))
  };
  useEffect(() => {
    
    hangleBlogs();
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
        <div className="blog__section-cards">
        {blogs && blogs.map(blog => (
            <div className="blog__section-card" key={blog._id}>
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
        ))}
        </div>
    </div>
  );
};

export default BlogSection;

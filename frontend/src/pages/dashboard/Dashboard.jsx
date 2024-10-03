import React, { useState, useEffect } from 'react';
import './dashboard.css';
import { images } from '../../constant';
import { handleGetBlogs, BlogForm, BlogDetails, useBlogContext } from '../../components';

const Dashboard = () => {
  const { blogs, setBlogs } = useBlogContext();

  let turncateDesc = (description, maxchars = 120) => {
    if (!description || typeof description !== 'string') {
      return ''; // Return an empty string if description is undefined or not a string
    }
  
    if (description.length > maxchars) {
      return description.slice(0, maxchars) + "...";
    }
    return description;
  }

  useEffect(() => {
    handleGetBlogs()
      .then(data => setBlogs(data))
      .catch(error => console.log("Can't fetch any blogs!"));
  }, []);  // Add empty dependency array to run only once

  
  

  return (
    <div className='dashboard'>
      <div className="post-area">
        <div className="posts">
          {console.log(blogs)}
          {blogs && blogs.map(blog => ( // Defensive check
            <div className="my-post" key={blog._id}>
              <BlogDetails
                title={blog.title}
                description={turncateDesc(blog.desc)}
                image={blog.image}
                _id={blog._id}
                dltBtn={images.dltBtn}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="post-form">
        <BlogForm />
      </div>
    </div>
  );
};

export default Dashboard;

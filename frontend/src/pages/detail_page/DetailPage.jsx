import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBlogContext, Loader } from '../../components';
import { handleGetBlogs } from '../../components';
import { images } from '../../constant';

import './blogdetail.css'

const BlogDetails = () => {
  const { id } = useParams(); // Get the blog id from the URL
  const { blogs, setBlogs } = useBlogContext(); // Get all blogs from context
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  useEffect(() => {
    // Fetch blogs if not already loaded
    if (!blogs.length) {
      handleGetBlogs()
        .then(data => {
          setBlogs(data);
          setLoading(false); // Set loading to false once data is fetched
        })
        .catch(err => {
          setError('Failed to load blogs');
          setLoading(false); // Stop loading if error occurs
        });
    } else {
      setLoading(false); // If blogs are already loaded, no need to fetch
    }
  }, [blogs, setBlogs]);

  // Find the blog once blogs have been fetched
  const blog = blogs.find(b => b._id === id);

  // Loading state
  if (loading) {
    return <Loader />
  }

  // Error state
  if (error) {
    return <p>{error}</p>;
  }

  // Blog not found case
  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <div className="blog__details">
      <h2>{blog.title}</h2>
      <div className="name-time-info">
        <div className="user">
        <img src={images.profileImage} alt="profile image"/>
        <div className="user-info">
        <span className="publisher">by <b>Umer Khokhar</b></span>
        <span>Developer</span>
        </div>
        <span className="post-time">13min Ago</span>
        </div>
      </div>
      <img src={blog.image} alt={blog.title} />
      <p>{blog.desc}</p>
      <div className="read__info">
      </div>
    </div>
  );
};

export default BlogDetails;

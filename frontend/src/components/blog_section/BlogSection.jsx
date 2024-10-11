import React, { useState, useEffect } from 'react';
import { images } from '../../constant';
import { FetchFromAPI, handleGetBlogs } from '..';
import { useNavigate } from 'react-router-dom';
import "./blogSection.css";

const BlogSection = () => {

  const [blogs, setBlogs] = useState([]);
  const [filterBlog, setFilterBlog] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [error, setError] = useState(null);

  let turncateDesc = (description, maxchars = 160) => {
    if (!description || typeof description !== 'string') {
      return ''; // Return an empty string if description is undefined or not a string
    }
  
    if (description.length > maxchars) {
      return description.slice(0, maxchars) + "...";
    }
    return description;
  }
  const filterHandler = (item) => {
      setFilterBlog(item);
      if (item === "All") {
          setFilterBlog(blogs);
      } else {
          setFilterBlog(blogs.filter((blog) => blog.tags.includes(item)));
      }
  }

   const hangleBlogs = async () => {
      handleGetBlogs()
        .then(data => {
            setBlogs(data)
            setFilterBlog(data)
        })
        .catch(error => setError("Unable to fetch blogs!"))
  };
  useEffect(() => {
    
    hangleBlogs();
  }, []);

  const navigate = useNavigate(); // Hook to navigate to another route

  const handleCardClick = (id) => {
    navigate(`/blog/${id}`); // Navigate to the blog details page with the blog id
  };

  const filters = ["All", "Web Dev", "SEO", "Content Writing", 'Design']

  return (
    <div className='blog__section'>
        <h1>All Blogs</h1>
        <div className="blog__section-search">
            {filters.map((filter, index) => (
                // eslint-disable-next-line react/jsx-key
                <button key={filter + index} onClick={() => filterHandler(filter)}>{filter}</button>
            ))}
        </div>
        <div className="blog__section-cards">
        {filterBlog.map(blog => (
            <div className="blog__section-card" key={blog._id} onClick={() => handleCardClick(blog._id)}>
              <div className="card-img">
                <img src={blog.image} alt="dev card image" />
              </div>
              <div className="card-info">
                <h2 className="card-heading">{blog.title}</h2>
                <p className="card-description">{turncateDesc(blog.desc)}</p>
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

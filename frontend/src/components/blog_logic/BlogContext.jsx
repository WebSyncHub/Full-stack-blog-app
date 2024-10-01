import React, { createContext, useContext, useState } from 'react';

export const BlogContextPro = createContext();

export const BlogContext = ({ children }) => {
  const [blogs, setBlogs] = useState([]); // Initial state is an array

  function createBlog(newBlog) {
    setBlogs(prevBlogs => [...prevBlogs, newBlog]); // Spread the previous blogs and add the new blog
  }
  
  function setBlogsList(updateBlog) {
    setBlogs(prevBlogs => [...prevBlogs, updateBlog]); // Same as above, add the updated blog
  }
  

  function dltBlog(id) {
    setBlogs(blogs.filter((b) => b._id !== id));
  }

  return (
    <BlogContextPro.Provider value={{ blogs, createBlog, setBlogs, setBlogsList, dltBlog }}>
      {children}
    </BlogContextPro.Provider>
  );
};

export const useBlogContext = () => useContext(BlogContextPro);

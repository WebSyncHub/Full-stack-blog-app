export { default as Navbar } from "./Navbar"
export { default as Hero } from "./hero/Hero"
export { default as BlogSection } from './blog_section/BlogSection'
export { default as Blogi } from './blogi/Blogi'
export { default as Footer } from './footer/Footer'
export { default as FetchFromAPI } from './utils/FetchFromApi'
export { default as BlogForm } from './blogForm/BlogForm'
export { default as BlogDetails } from './blog_details/BlogDetails'
export { default as Loader } from './loader/Loader'
// Blog Service



import {BlogContext, BlogContextPro, useBlogContext } from './blog_logic/BlogContext'
export {
    BlogContext, BlogContextPro, useBlogContext 
}

import { handleGetBlogs, handlePostBlogs } from "./blog_logic/BlogService"
export { handleGetBlogs, handlePostBlogs}
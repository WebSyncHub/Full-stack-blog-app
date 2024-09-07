export { default as Navbar } from "./Navbar"
export { default as Hero } from "./Hero"
export { default as BlogSection } from './BlogSection'
export { default as Blogi } from './Blogi'
export { default as Footer } from './footer/Footer'
export { default as FetchFromAPI } from './utils/FetchFromApi'
export { default as BlogForm } from './blogForm/BlogForm'

// Blog Service

import { handleGetBlogs, handlePostBlogs } from "./BlogService"
export { handleGetBlogs, handlePostBlogs}
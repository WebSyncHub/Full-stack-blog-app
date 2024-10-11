import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BlogContext} from "./components";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BlogContext>
    <App />
  </BlogContext>
  </React.StrictMode>
)
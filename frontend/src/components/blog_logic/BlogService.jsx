import React, { useState } from 'react'
import { FetchFromAPI } from '..';

export const handleGetBlogs = async () => {
  try {
    const getData = await FetchFromAPI("http://localhost:3000/api/blog-post")
    return getData
  } catch (err){
    throw new err("Can't able to fetch any blog 💀!")
  }
}


export const handlePostBlogs = async (blog) => {
  try {
    const postData = await fetch("http://localhost:3000/api/blog-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body : JSON.stringify(blog)
    })
    if (!postData.ok) {
      console.log("Unable to post blog")
    }
    
    const json = await postData.json()
      return json
  } catch (error) {
    console.error("Error posting blog:", error.message);
    throw new Error("Error adding data to the DB");
  }
}

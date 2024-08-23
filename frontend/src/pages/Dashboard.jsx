import React, { useState } from 'react'
import './dashboard.css'
import { images } from '../constant'

const Dashboard = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blog = { title, desc, image };
    const response = await fetch("http://localhost:3000/api/blog-post", {
      method: 'POST',
      body: JSON.stringify(blog),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      console.log("Unable to add blog to database");
    } else {
      setTitle('');
      setDesc('');
      setImage('');
      console.log("New blog post added", json);
    }
  }

  return (
    <div className='dashboard'>
      <div className="post-area">
        {/* Post content display here */}
      </div>
      <div className="post-form">
        <form onSubmit={handleSubmit}>
          <div className="title input">
            <label htmlFor="title">Title <img src={images.title} alt="title" width={20}/>:</label>
            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="image input">
            <label htmlFor="image">ImageURI <img src={images.imageLogo} alt="image" width={20}/>:</label>
            <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} required />
          </div>
          <div className="desc input">
            <label htmlFor="desc">Description <img src={images.description} alt="desc" width={20}/>:</label>
            <textarea name="desc" id="desc" rows={10} value={desc} onChange={(e) => setDesc(e.target.value)} required></textarea>
          </div>
          <div className="publish-btn">
            <button type="submit"> 
              <img src={images.publish} alt="publish" width={22}/> Publish
            </button>
          </div>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
}

export default Dashboard;

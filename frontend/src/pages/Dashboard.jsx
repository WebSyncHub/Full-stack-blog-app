import React from 'react'
import './dashboard.css'
import { images } from '../constant'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="post-area">

      </div>
      <div className="post-form">
        <form>
          <div className="title input">
          <label htmlFor="">Title <img src={images.title} alt="title"  width={20}/>:</label>
          <input type="text" />
          </div>
          <div className="image input">
          <label htmlFor="">ImageURI <img src={images.imageLogo} alt="image"  width={20}/>:</label>
          <input type="text" />
          </div>
          <div className="desc input">
          <label htmlFor="">Description <img src={images.description} alt="desc"  width={20}/>:</label>
          <textarea name="desc" id="desc" rows={10}></textarea>
          </div>
        </form>
        <div className="publish-btn">
          <button> <img src={images.publish} alt="publish" width={22}/>Publish</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
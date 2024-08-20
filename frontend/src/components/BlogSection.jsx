import React from 'react'
import { images } from '../constant'
import "./blogSection.css"

const blogSection = () => {
  return (
    <div className='blog__section'>
        <h1>All Blogs</h1>
        <div className="blog__section-search">
            <button>Web Dev</button>
            <button>SEO</button>
            <button>Content Writing</button>
            <button>Design</button>
            <button>All</button>
        </div>
        <div className="blog__section-cards">
            <div className="blog__section-card">
              <div className="card-img">
                <img src={images.devCard} alt="dev card image" />
              </div>
              <div className="card-info">
                <h2 className="card-heading">How to handle Errors in react</h2>
                <p className="card-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, similique doloremque voluptatibus ratione consequuntur adipisci...</p>
                <div className="read__info">
                    <span className="publisher">by <b>Umer Khokhar</b></span>
                    <span className="post-time">13min Ago</span>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default blogSection
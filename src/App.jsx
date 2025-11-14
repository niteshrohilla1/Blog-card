import { useState } from 'react'
import './App.css'
import img from './assets/illustration-article.svg'
import userpic from './assets/image-avatar.webp'

function App() {

  return (
    <div class='card'>
      <img class='card-image' src={img}></img>
      <div className="content">
        <span className='Learning'>Learning</span>
        <div className='Publish Date'>Published 21 Dec 2023</div>
        <div className='Title'>HTML & CSS foundations</div>
        <div className="Description">
          These languages are the backbone of every website, defining structure, content, and presentation.
        </div>
      </div>
      <div className="Author">
        <img className='userpic' src={userpic} alt="" />
        Greg Hooper
      </div>
    </div>
  )

}

export default App

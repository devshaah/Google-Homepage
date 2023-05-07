import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import  axios  from 'axios'
import './style.scss'
import logo from './google.png'
import search from './search.png'
import mic from './mic.png'
import lens from './lens.png'
import Todo from './todo'
import Recent from './Recent'
import News from './News'

const Home = () => {

  return (
    <div className='home'>
      <Navbar/>
      <div className='content'>
        <img src={logo} className='google'/>

      <div className='form'> 
        <img src={search} className='logo'/>
        <input type='text' />     
        <div className='homelogo'>
            <img src={mic} className='logo'/>
            <img src={lens} className='logo'/>
        </div>
        </div>
        <div className='homebtns'>
          <button className='homebtn'>Google Search  </button>
          <button className='homebtn'> I'm feeling Lucky </button>

        </div>
        <p>Google offered in: <a href='#'>हिन्दी </a> <a href='#'> বাংলা </a><a href='#'> తెలుగు </a><a href='#'> मराठी </a><a href='#'> தமிழ் </a> <a href='#'> ગુજરાતી </a>  <a href='#'> ಕನ್ನಡ </a> <a href='#'> മലയാളം </a> <a href='#'> ਪੰਜਾਬੀ </a></p>
        <div className='feature'>
        <Recent/>
        <News/>
        <Todo/>
        </div>
      </div>
    </div>
  )
}

export default Home

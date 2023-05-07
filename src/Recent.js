import React from 'react'
import youtube from './youtube.svg'
import github from './github.svg'
import whatsapp from './whatsapp.svg'

const Recent = () => {
  return (
    <div className='recent'>
      <h2>Recent Tabs</h2>
      <div className='tabs'>
          <div className='card'>
          <img src={youtube} className='tab'/>
          <h4>Youtbe</h4>
          </div>
          <div className='card'>
          <img src={github} className='tab'/>
          <h4>Github</h4>
          </div>
          <div className='card'>
          <img src={whatsapp} className='tab'/>
          <h4>Whatsapp</h4>
          </div>
      </div>

    </div>
  )
}

export default Recent

import React from 'react'
import './css/background.css'
import image from '../images/transparent3-removebg-preview.png'

export function Background() {
  return (
    <div className='background'>
        <div className='image-wrapper'>
            <div className='image'>
              <img src={image} alt='Background-image'></img>
            </div>
            <div className='layer'></div>
        </div>
    </div>
  )
}

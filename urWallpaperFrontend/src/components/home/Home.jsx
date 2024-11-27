import React from 'react'
import homeWallpaper from '../pictures/homeWallpaper.jpg'
import './Home.css'
function Home() {
  return (
    <div className='main'>
      <p>
        Here we got the best platform to get wallpapers for your devices
        <br />
        When it comes to personalizing your devices with eye-catching wallpapers, navigating the vast online landscape can feel overwhelming. But fret no more! Here's a comprehensive dive into some of the best platform - "Ur WaLlPaPeR", helping you discover your ideal source of digital art.
      </p>
      <img src={homeWallpaper} alt="Wallpaper" />
    </div>
  )
}

export default Home
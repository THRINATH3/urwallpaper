import React from 'react';
import homeWallpaper from '../pictures/homeWallpaper.jpg';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="main container py-5">
      <div className="row align-items-center mb-5">
        <div className="col-12 col-md-6 text-center text-md-start">
          <h1 className="display-4 fw-bold mb-3">Welcome to Ur WaLLpApEr!</h1>
          <p className="lead">
            Discover a world of stunning wallpapers to personalize your devices like never before. From breathtaking landscapes to vibrant digital art, find the perfect wallpaper to match your style.
          </p> 
          <Link to="wallpapers"><button className="btn btn-primary btn-lg mt-3 mb-5">Explore Now</button></Link>
        </div>
        <div className="col-12 col-md-6 text-center">
          <img src={homeWallpaper} alt="A vibrant digital wallpaper" className="img-fluid rounded shadow" />
        </div>
      </div>

      <div className="row text-center py-5 rounded">
        <h2 className="mb-4 text-success">Why Choose Us?</h2>
        <div className="col-12 col-md-4 mb-4">
          
          <h4 className="mt-3 text-warning">Diverse Categories</h4>
          <p>
            Explore a wide range of categories including nature, abstract, minimal, and more.
          </p>
        </div>
        <div className="col-12 col-md-4 mb-4">
          <h4 className="mt-3 text-warning">Device Optimization</h4>
          <p>
            Wallpapers tailored for all devices—mobile, desktop, and tablet.
          </p>
        </div>
        <div className="col-12 col-md-4 mb-4">
          <h4 className="mt-3 text-warning">Instant Downloads</h4>
          <p>
            High-quality downloads at the click of a button, hassle-free.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <h2 className="text-center mb-4 text-primary">What Our Users Say</h2>
        <div className="col-12 col-md-6 mb-4">
          <div className="rounded p-3 shadow-sm">
            <p>
              <i>"Ur WaLlPaPeR offers an amazing collection of wallpapers. My phone has never looked this good!"</i>
            </p>
            <p className="text-end text-warning">- Emily, New York</p>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-4">
          <div className="rounded p-3 shadow-sm">
            <p>
              <i>"I found the perfect wallpapers for my desktop setup. Highly recommend this platform!"</i>
            </p>
            <p className="text-end text-warning">- Alex, California</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

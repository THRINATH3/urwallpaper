import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
function Footer() {
  return (
    <div>
       <footer>
      <div className="container">
        <hr />
        
        <div className="row">
          <div className="col-md-3 mb-5">
            <p className='text-warning fs-5'>Ur WaLLpApEr</p>
          </div>
          <div className="col-md-3 mb-5">
            <h5 className="mb-2">Contact Us</h5>
            <p>Email: urwallpaper@gmail.com</p>
            <p>Phone: +919347001342,+919505765690</p>
            <p>Madhuranagar, Vijayawada-11, Krishna dist., Andhra Pradesh, India</p>
          </div>
          <div className="col-md-3 mb-5">
            <h5 className="mb-2">Follow Us</h5>
            <ul className="list-unstyled d-flex column-gap-3">
              <li><a href="#"><BsInstagram className='fs-3'/></a></li>
              <li><a href="#"><FaFacebook className='fs-3' /></a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-5">
            <h5 className="mb-2">Site Links</h5>
            <ul className="list-unstyled">
              <li><Link to="">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/wallpapers">Wallpapers</Link></li>
            </ul>
          </div>
        </div>
        <div className="row">
        <div className="col-md-3 mb-5 mx-auto">
          <h5 className="mb-2 text-center text-white fs-1">Feedback</h5>
          <form>
              <textarea type="text" placeholder="Write Ur ThOuGhTs" className="form-control mb-2" />
              <button type="submit" className="btn btn-warning">Subscribe</button>
          </form>
        </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 d-flex column-gap-5">
            <p>&copy; 2024 Ur WaLLPaPeR. All rights reserved.</p>
            <div className="d-flex column-gap-2">
            <a href="">Terms</a>
            <a href="">Privacy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
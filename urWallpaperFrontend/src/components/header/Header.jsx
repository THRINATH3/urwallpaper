import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../pictures/Logo.png';
import { FaHome, FaCloudUploadAlt, FaUserCircle } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { MdFileUploadOff, MdWallpaper } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import { IoSettings } from "react-icons/io5";
import { usercontext } from '../../context/userLoginContext';
import Axios from 'axios';
import { RiCloseLargeFill } from "react-icons/ri";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { loginStatus, curruser, logout } = useContext(usercontext);
  const [userInfo, setUserInfo] = useState({});


  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function upload() {
    alert('You need to login to upload your wallpaper.');
  }

  function onInputChange(files) {
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', 'em3a0pap');
    formData.append('folder', 'wallpapers');
  
    // Directly construct the userInfo object
    const userInfo = { username: curruser.username };
    formData.append('context', `user_info=${JSON.stringify(userInfo)}`);
  
    Axios.post('https://api.cloudinary.com/v1_1/dtgqfjyrr/image/upload', formData)
      .then((response) => {
        console.log('Upload Successful:', response.data);
        alert('Your wallpaper was uploaded successfully.');
      })
      .catch((error) => {
        console.error('Upload Failed:', error);
        alert('Failed to upload your wallpaper. Please try again.');
      });
  }
  

  return (
    <div>
      <header className="pt-3">
        <img src={Logo} alt="Logo" style={{ width: '300px', height: '60px', borderRadius: '10px' }} />
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? (
            <span className="fs-5 text-warning"><RiCloseLargeFill className='fs-1' /></span>
          ) : (
            <>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </>
          )}
        </div>
        <nav className={`nav-bar mb-5 ${menuOpen ? 'active' : ''}`}>
          <ul className="list-unstyled text-white unli">
            <li><Link to="/" className="a"><FaHome className='text-white mb-1 mx-1' />Home</Link></li>
            <li><Link to="/about" className="a"><FcAbout className='mx-1' />About</Link></li>
            {!loginStatus ? (
              <li>
                <label 
                  htmlFor="fileupload" 
                  className="a" 
                  style={{ cursor: 'pointer' }} 
                  onClick={upload}
                >
                  <MdFileUploadOff className='text-white mb-1 mx-1' /> Upload
                </label>
              </li>
            ) : (
              <li>
                <label 
                  htmlFor="fileupload" 
                  className="a" 
                  style={{ cursor: 'pointer' }}
                >
                  <FaCloudUploadAlt className='text-white mb-1 mx-1' /> Upload
                </label>
                <input 
                  id="fileupload"
                  accept="image/*"
                  type="file"
                  onChange={(event) => onInputChange(event.target.files)}
                  style={{ display: 'none' }} 
                />
              </li>
            )}
            <li><Link to="/wallpapers" className="a"><MdWallpaper className='mb-1 mx-1' />Wallpapers</Link></li>
            {loginStatus ? (
              <div className="dropdown logoutbutton">
                <button 
                  className="btn btn-dark dropdown-toggle logout" 
                  type="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  {curruser?.username}
                </button>
                <ul className="dropdown-menu bg-dark">
                  <li>
                    <Link className='logout text-white fs-5 mx-3 dropdown'>
                      <FaUserCircle /> Profile
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link className='logout text-white mx-3 fs-5 dropdown'>
                      <IoSettings /> Settings
                    </Link>
                  </li>
                  <li>
                    <button 
                      className="btn logout text-white fs-5 mx-1 dropdown" 
                      onClick={logout}
                    >
                      <CiLogout /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <li>
                <Link to="/login" className="a">
                  <FiLogIn className='mx-1' />Login/SignUp
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>

      
      <div className={`main-content ${menuOpen ? 'menu-open' : ''}`}>
       
      </div>

      <hr />
    </div>
  );
}

export default Header;

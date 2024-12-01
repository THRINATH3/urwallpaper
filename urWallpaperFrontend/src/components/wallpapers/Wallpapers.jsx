import React, { useContext, useEffect, useState } from 'react';
import './Wallpapers.css';
import image1 from '../pictures/JR.jpeg';
import image2 from '../pictures/sad.jpeg';
import image3 from '../pictures/IMG_20230901_175310.jpg';
import image4 from '../pictures/IMG_20220807_125319.jpg';
import image5 from '../pictures/IMG_20221117_174846.jpg';
import image6 from '../pictures/IMG_20221202_175009.jpg';
import image7 from '../pictures/IMG_20230203_194125.jpg';
import image8 from '../pictures/IMG_20230901_194417.jpg';
import image9 from '../pictures/IMG_20231121_175336.jpg';
import image10 from '../pictures/IMG_20230911_121632.jpg';
import image11 from '../pictures/IMG_20230901_193642.jpg';
import image12 from '../pictures/IMG_20220101_195642.jpg';
import image13 from '../pictures/IMG_20221117_174722.jpg';
import UserLoginStore from '../../context/userLoginstore';
import { usercontext } from '../../context/userLoginContext';
import { RiDeleteBin6Fill } from "react-icons/ri";


function Wallpapers() {

  const { loginStatus, curruser, logout } = useContext(usercontext);
  const [cloudinaryImages, setCloudinaryImages] = useState([]);

  // Fetch images from the backend
  async function getImage() {
    try {
      const response = await fetch('https://urwallpaper-react-x2el.vercel.app/image-api/get-images');
      const result = await response.json();
  
      if (result.data) {
        // Map the data to extract necessary details
        const formattedImages = result.data.map((image) => {
          let username = 'Anonymous'; // Default value
          if (image.context?.user_info) {
            try {
              // Parse the stringified JSON object
              const userInfo = JSON.parse(image.context.user_info);
              username = userInfo.username || 'Anonymous'; // Fallback to 'Anonymous' if username is missing
            } catch (error) {
              console.error('Failed to parse user_info:', error);
            }
          }
  
          return {
            url: image.url, // Image URL
            user: username, // Extracted username
            public_id:image.public_id
          };
        });
  
        console.log(formattedImages); // Debug: Verify the formatted data
        setCloudinaryImages(formattedImages); // Update state with formatted data
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  }
  

  async function deleteImage(publicId) {
    try {
      const response = await fetch(
        `https://urwallpaper-react-x2el.vercel.app/image-api/delete-image/${encodeURIComponent(publicId)}`,
        { method: 'DELETE' }
      );
  
      console.log("Public ID:", publicId); // Debug log
      const result = await response.json();
  
      if (response.ok) {
        alert(result.message);
        getImage(); // Refresh the image list
      } else {
        console.error("Failed to delete image:", result);
        alert("Failed to delete the image. Please try again.");
      }
    } catch (error) {
      console.error("Error during image deletion:", error);
      alert("An error occurred while trying to delete the image.");
    }
  }
  
  


  // Trigger image fetching when loginStatus changes
  useEffect(() => {
    if (loginStatus) {
      getImage();
    }
  }, [loginStatus]);
  

  const imagesData = [
    { src: image1, caption: 'Captured by K.Jaya Rohita', downloadName: 'JR.jpeg' },
    { src: image2, caption: 'Captured by N.Sadwika', downloadName: 'sad.jpeg' },
    { src: image3, caption: 'Captured by P.Thrinath', downloadName: 'IMG_20230901_175310.jpg' },
    { src: image4, caption: 'Captured by P.Thrinath', downloadName: 'IMG_20220807_125319.jpg' },
    { src: image5, caption: 'Captured by P.Thrinath', downloadName: 'IMG_20221117_174846.jpg' },
    { src: image6, caption: 'Captured by P.Thrinath', downloadName: 'IMG_20221202_175009.jpg' },
    { src: image7, caption: 'Captured by P.Thrinath', downloadName: 'IMG_20230203_194125.jpg' },
    { src: image8, caption: 'Captured by P.Thrinath', downloadName: 'IMG_20230901_194417.jpg' },
    { src: image9, caption: 'Captured by P.Thrinath', downloadName: 'IMG_20231121_175336.jpg' },
    { src: image10, caption: 'Captured by P.Thrinath', downloadName: 'IMG_20230911_121632.jpg' },
    { src: image11, caption: 'Captured by P.Thrinath', downloadName: 'IMG_20230901_193642.jpg' },
    { src: image12, caption: 'Captured by P.Thrinath', downloadName: 'IMG_20220101_195642.jpg' },
    { src: image13, caption: 'Captured by P.Thrinath', downloadName: 'IMG_20221117_174722.jpg' }
  ];

  return (
    <div className="container mt-5 Font" style={{ backgroundColor: "black" }}>
      <h1 className='text-center mt-5 mb-5'>Our Wallpapers</h1>
      <div className="row">
        {imagesData.map((image, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
            <div className="card text-center" style={{ height: '70%', borderColor: 'black' }}>
              <div className="card-body text-white" style={{ backgroundColor: "black", borderColor: "black" }}>
                <img src={image.src} alt="" width="100%" style={{ height: '68%', borderColor: 'black' }} className='wapa' />
                <br /><br />
                <p>{image.caption}</p>
                <a href={image.src} download={image.downloadName}>
                  <div>
                    <button style={{ borderRadius: "10px" }}>DOWNLOAD</button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      

      <div className="container mt-5 Font" style={{ backgroundColor: "black" }}>
      <h1 className="text-center mt-5 mb-5">Wallpapers by our users</h1>
      <div className="row">
        {cloudinaryImages.length > 0 ? (
          cloudinaryImages.map((image, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="card text-center" style={{ height: '70%', borderColor: 'black' }}>
                
                <div className="card-body text-white" style={{ backgroundColor: "black", borderColor: "black" }}>
                  <img
                    src={image.url} // Use Cloudinary's secure URL
                    alt={image.public_id} // Use a meaningful alt text
                    width="100%"
                    style={{ height: '68%', borderColor: 'black' }}
                    className="wapa"
                  />
                  <br /><br />
                  <div className="d-flex justify-content-center align-items-center">
                    <p className='fs-5'>Uploaded by: {image.user}</p>
                    {curruser.username === image.user ? (
                      <RiDeleteBin6Fill
                        onClick={() => deleteImage(image.public_id)}
                        style={{ cursor: 'pointer', borderRadius: '5px', padding: '2px' }}
                        className="text-danger mb-3 fs-2"
                      />
                    ) : null}
                    {console.log(image.public_id)}
                  </div>
                  <a href={image.url} download={image.public_id}>
                    <div>
                      <button style={{ borderRadius: "10px",marginRight:'10px'}}>DOWNLOAD</button>            
                    </div>
                  </a>
                  
                </div>
              </div>
            </div>
          ))
        ) :loginStatus? (
          <p className="text-center text-white">No images available. Please try again later.</p>
        ):
        (
          <p className="text-center text-danger">Login to watch our users wallpapers</p>
        )}
      </div>
    </div>
      
      
    </div>
  );
}

export default Wallpapers;

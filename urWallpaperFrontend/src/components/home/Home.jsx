import React from 'react';
import homeWallpaper from '../pictures/homeWallpaper.jpg';
import './Home.css';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  

  useGSAP(()=>{
    gsap.from(".imgani",{
      scale:0,
      duration:3,
      delay:0.2,
      width:"0px",
      opacity:0
    })
    gsap.from(".textani",{
      color:"yellow",
      y: "100%",
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    })
    gsap.from(".hedani", {
      scale: 0,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".hedani",
        start: "top 50%", 
        end: "bottom 60%", 
        //markers: true,
        onEnter: () => {
          gsap.fromTo(
            ".hedani",
            { scale: 0, opacity: 0 ,color:"white"},
            { scale: 1, opacity: 1, duration: 1 }
          );
        },
        onLeaveBack: () => {
          gsap.set(".hedani", { scale: 0, opacity: 0 });
        },
      },
    });

    gsap.from(".hedani2", {
      scale: 0,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".hedani2",
        start: "top 50%", 
        end: "bottom 60%", 
        //markers: true,
        onEnter: () => {
          gsap.fromTo(
            ".hedani2",
            { scale: 0, opacity: 0 ,color:"white"},
            { scale: 1, opacity: 1, duration: 1 }
          );
        },
        onLeaveBack: () => {
          gsap.set(".hedani2", { scale: 0, opacity: 0 });
        },
      },
    });

    gsap.from(".hedboxani", {
      scale: 0,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".hedboxani",
        start: "top 50%", 
        end: "bottom 60%", 
        //markers: true,
        onEnter: () => {
          gsap.fromTo(
            ".hedboxani",
            { scale: 0, opacity: 0 ,color:"white",x:1200},
            { scale: 1, opacity: 1, duration: 2 ,x:0,stagger:0.3}
          );
        },
        onLeaveBack: () => {
          gsap.to(".hedboxani", { scale: 0, opacity: 0,duration:2, x:1200 });
        },
      },
    });

    gsap.from(".hedboxani2", {
      scale: 0,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".hedboxani2",
        start: "top 40%", 
        end: "bottom 60%", 
        //markers: true,
        onEnter: () => {
          gsap.fromTo(
            ".hedboxani2",
            { scale: 0, opacity: 0 ,color:"white",x:1200},
            { scale: 1, opacity: 1, duration: 2 ,x:0,stagger:0.3}
          );
        },
        onLeaveBack: () => {
          gsap.to(".hedboxani2", { scale: 0, opacity: 0,duration:2, x:1200 });
        },
      }
    });
    
  })


  return (
    <div className="main container py-5">
      <div className="row align-items-center mb-5">
        <div className="col-12 col-md-6 text-center text-md-start">
          <h1 className="display-4 fw-bold mb-3 textani">Welcome to Ur WaLLpApEr!</h1>
          <p className="textani">
            Discover a world of stunning wallpapers to personalize your devices like never before. From breathtaking landscapes to vibrant digital art, find the perfect wallpaper to match your style.
          </p> 
          <Link to="wallpapers" className='textani'><button className="btn btn-primary btn-lg mt-3 mb-5">Explore Now</button></Link>
        </div>
        <div className="col-12 col-md-6 text-center">
          <img src={homeWallpaper} alt="A vibrant digital wallpaper" className="img-fluid shadow imgani" />
        </div>
      </div>

      <div className="row text-center py-5 rounded">
        <h2 className="mb-4 text-success hedani">Why Choose Us?</h2>
        <div className="col-12 col-md-4 mb-4 hedboxani">
          
          <h4 className="mt-3 text-warning">Diverse Categories</h4>
          <p>
            Explore a wide range of categories including nature, abstract, minimal, and more.
          </p>
        </div>
        <div className="col-12 col-md-4 mb-4 hedboxani">
          <h4 className="mt-3 text-warning">Device Optimization</h4>
          <p>
            Wallpapers tailored for all devices—mobile, desktop, and tablet.
          </p>
        </div>
        <div className="col-12 col-md-4 mb-4 hedboxani">
          <h4 className="mt-3 text-warning">Instant Downloads</h4>
          <p>
            High-quality downloads at the click of a button, hassle-free.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <h2 className="text-center mb-4 text-primary hedani2">What Our Users Say</h2>
        <div className="col-12 col-md-6 mb-4 hedboxani2">
          <div className="rounded p-3 shadow-sm ">
            <p>
              <i>"Ur WaLlPaPeR offers an amazing collection of wallpapers. My phone has never looked this good!"</i>
            </p>
            <p className="text-end text-warning">- Anwar
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-4 hedboxani2">
          <div className="rounded p-3 shadow-sm">
            <p>
              <i>"I found the perfect wallpapers for my desktop setup. Highly recommend this platform!"</i>
            </p>
            <p className="text-end text-warning">- Madhu</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

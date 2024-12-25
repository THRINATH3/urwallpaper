import React from 'react'
import './About.css';
import profile from '../pictures/profile.jpeg'
import ourStory from '../pictures/OurStory.mp4';
import vision from '../pictures/vision.png';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

function About() {


  useGSAP(()=>{
    gsap.from(".hpani",{
      scale:10,
      opacity:0,
      ease:'circ.inOut',
      duration:3,
      delay:0.2
    })
    gsap.from(".vdani", {
      x: 1200,
      duration: 2,
      scrollTrigger: {
        trigger: ".vdani",
        //markers: true,
        start: "top 50%", 
        onEnter: () => {
          gsap.fromTo(
            ".vdani",
            { x: 1200, opacity:0,scale:0}, 
            { x: 0, duration: 2,opacity:1,scale :1 } 
          );
        },
        onLeaveBack: () => {
          gsap.to(".vdani", {
            x: 1200,
            duration: 2,
          });
        },
      }
    });

    gsap.from(".vdtextani", {
      x: -1200,
      duration: 2,
      scrollTrigger: {
        trigger: ".vdtextani",
        //markers: true,
        start: "top 70%", 
        onEnter: () => {
          gsap.fromTo(
            ".vdtextani",
            { x: -1200, opacity:0,scale:0}, 
            { x: 0, duration: 2,opacity:1,scale :1 } 
          );
        },
        
        onLeaveBack: () => {
          gsap.to(".vdtextani", {
            x: -1200,
            duration: 2,
          });
        },
      }
    });
    
    gsap.from(".visitextani", {
      x: -1200,
      duration: 2,
      scrollTrigger: {
        trigger: ".visitextani",
        //markers: true,
        start: "top 70%", 
        onEnter: () => {
          gsap.fromTo(
            ".visitextani",
            { x: -2000, opacity:0,scale:0}, 
            { x: 0, duration: 2,opacity:1,scale :1 } 
          );
        },
        onLeaveBack: () => {
          gsap.to(".visitextani", {
            x: -2000,
            duration: 2,
          });
        },
      }
    });

    gsap.from(".visiani", {
      x: 1200,
      duration: 2,
      scrollTrigger: {
        trigger: ".visiani",
        //markers: true,
        start: "top 50%", 
        onEnter: () => {
          gsap.fromTo(
            ".visiani",
            { x: 2000, opacity:0,scale:0}, 
            { x: 0, duration: 2,opacity:1,scale :1 } 
          );
        },
        onLeaveBack: () => {
          gsap.to(".visiani", {
            x: 2000,
            duration: 2,
          });
        },
      }
    });

    gsap.from(".creatani",{
      scale:0,
      opacity:0,
      duration:2,
      ease:'power4.inOut',
      scrollTrigger:{
        trigger:".creatani",
        start:"top 60%",
        stop:"bottom 20%",
        //markers:true,
        onEnter:()=>{
          gsap.fromTo(".creatani",{
            opacity:0,scale:0
          },
          {
            opacity:1,scale:1,duration:2
          })},
        onLeaveBack:()=>{
          gsap.to(".creatani",{
            opacity:0,scale:0
          })
        }
      }
    })

  })

  return (
    <div className="about-wrapper p-3">
    <div className="about-hero hpani">
      <h1>We Are Ur WaLLpApEr</h1>
      <p>Your go-to destination for personalized and captivating wallpapers.</p>
    </div>

    <section className="story-section">
      <div className="story-text vdtextani">
        <h2>Our Story</h2>
        <p>
          Ur WaLLPaPeR began with a simple idea: to make personalizing your device an enjoyable and immersive experience. We wanted to offer more than just wallpapers; we wanted to provide a platform where everyone can express their style through unique and high-quality digital art.
        </p>
      </div>
      <div className="story-image vdani">
        <video src={ourStory} alt="Our Story"  autoPlay muted playsInline loop/>
      </div>
    </section>

    <section className="vision-section mb-5">
      <div className="vision-image visiani">
        <img src={vision} alt="Our Vision" />
      </div>
      <div className="vision-text visitextani">
        <h2>Our Vision</h2>
        <p>
          We envision a world where every device is a reflection of the person who owns it. We aim to empower individuals to express their creativity and personality through a collection of stunning wallpapers and digital art.
        </p>
      </div>
    </section>

    <section className="team-section mb-5 creatani">
      <h2 className='mb-3'>Meet the Creator</h2>
      <div className="team-cards">
        <div className="team-member">
          <img src={profile} className="mb-3" alt="Team Member 1" />
          <h3>Thrinath Pothineni</h3>
          <p>Founder & Lead Developer</p>
        </div>
      </div>
    </section>

    <section className="cta-section">
      <div className="cta-text">
        <h2>Join Us</h2>
        <p>We are constantly growing, and we'd love for you to be a part of our journey. Browse our collection and transform your device today!</p>
      </div>
    </section>
  </div>
);
};

export default About;
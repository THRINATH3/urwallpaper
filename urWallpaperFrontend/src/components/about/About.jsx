import React from 'react'
import './About.css';
import profile from '../pictures/profile.jpeg'
import ourStory from '../pictures/OurStory.mp4';
import vision from '../pictures/vision.png';
function About() {
  return (
    <div className="about-wrapper p-3">
    <div className="about-hero">
      <h1>We Are Ur WaLLpApEr</h1>
      <p>Your go-to destination for personalized and captivating wallpapers.</p>
    </div>

    <section className="story-section">
      <div className="story-text">
        <h2>Our Story</h2>
        <p>
          Ur WaLLPaPeR began with a simple idea: to make personalizing your device an enjoyable and immersive experience. We wanted to offer more than just wallpapers; we wanted to provide a platform where everyone can express their style through unique and high-quality digital art.
        </p>
      </div>
      <div className="story-image">
        <video src={ourStory} alt="Our Story"  autoPlay muted playsInline loop/>
      </div>
    </section>

    <section className="vision-section mb-5">
      <div className="vision-image">
        <img src={vision} alt="Our Vision" />
      </div>
      <div className="vision-text">
        <h2>Our Vision</h2>
        <p>
          We envision a world where every device is a reflection of the person who owns it. We aim to empower individuals to express their creativity and personality through a collection of stunning wallpapers and digital art.
        </p>
      </div>
    </section>

    <section className="team-section mb-5">
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
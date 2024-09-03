import React, { useState } from 'react';
import './AboutMe.css';

const AboutMe = () => {
  const [selectedTab, setSelectedTab] = useState('about');
  const [galleryImages, setGalleryImages] = useState([]);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleAddImage = (event) => {
    const files = event.target.files;
    const imagesArray = Array.from(files).map(file => URL.createObjectURL(file));
    setGalleryImages(prevImages => [...prevImages, ...imagesArray]);
  };

  return (
    <>
      <div className='form'>
        <div className='left'>
          <div className='box'>
            {/* Left side content or space */}
          </div>
        </div>
        <div className='right'>
          <div className='right-top'>
            <div className="tab-buttons">
              <button
                className={`tab-button ${selectedTab === 'about' ? 'active' : ''}`}
                onClick={() => handleTabClick('about')}
              >
                About Me
              </button>
              <button
                className={`tab-button ${selectedTab === 'experiences' ? 'active' : ''}`}
                onClick={() => handleTabClick('experiences')}
              >
                Experiences
              </button>
              <button
                className={`tab-button ${selectedTab === 'recommended' ? 'active' : ''}`}
                onClick={() => handleTabClick('recommended')}
              >
                Recommended Projects
              </button>
            </div>

            <div className="tab-content">
              {selectedTab === 'about' && (
                <div className="about-me">
                  <p className="about-me-description">
                    Hi, I'm Payal. I'm passionate about frontend and backend development, and I love participating in hackathons.
                  </p>
                </div>
              )}

              {selectedTab === 'experiences' && (
                <div className="experiences">
                  <ul className="experiences-list">
                    <li>Smart India Hackathon 2023 - Winner</li>
                    <li>Google Solution Challenge - National Level</li>
                    <li>Vice President of Coding Club</li>
                  </ul>
                </div>
              )}

              {selectedTab === 'recommended' && (
                <div className="recommended">
                  <ul className="recommended-list">
                    <li>Ghumo Bharat - Travel and Tourism Website</li>
                    <li>Review Sentiment Analysis - React App</li>
                    <li>Task Management Application</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className='right-below'>
            <div className="gallery">
              <div className="gallery-header">
                <button className="gallery-title">Gallery</button>
                <input
                  type="file"
                  id="add-image"
                  multiple
                  onChange={handleAddImage}
                  style={{ display: 'none' }}
                />
                <label htmlFor="add-image" className="add-image-button">Add Image</label>
                <button className="nav-button">{'<'}</button>
                <button className="nav-button">{'>'}</button>
              </div>
              <div className="gallery-images">
                {galleryImages.map((src, index) => (
                  <img key={index} src={src} alt={`Gallery ${index}`} className="gallery-image" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;

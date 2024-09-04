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
  Hi, I'm Payal Bhattamisra, a passionate and dedicated software developer with a strong focus on both frontend and backend technologies. My journey in coding began in my early college days, and since then, I've been constantly honing my skills by participating in various hackathons and coding challenges.

  As the Vice President of my college's coding club, I've had the opportunity to lead and mentor my peers, organizing workshops on technologies like React and GitHub. I'm always eager to learn new things, which has driven me to explore diverse fields within software development, from AI and machine learning to web development and UI/UX design.

  I was honored to win the Smart India Hackathon 2023, where I worked on a project in the travel and tourism domain. Additionally, I reached the national level in the Google Solution Challenge, where I contributed to a project focused on marine ecosystem preservation.

  In my free time, I love traveling and exploring new places, which has also inspired some of the projects I've worked on, like "Ghumo Bharat," a travel and tourism website aimed at providing personalized travel experiences.

  I'm always on the lookout for new challenges and opportunities to grow, whether it's through contributing to open-source projects, working on innovative ideas, or collaborating with like-minded individuals.
</p>

                </div>
              )}

              {selectedTab === 'experiences' && (
                <div className="experiences">
                  <ul className="experiences-list">
                    <li>Smart India Hackathon 2023 - Winner</li>
                    <li>Google Solution Challenge - National Level</li>
                    <li>Vice President of Coding Club</li>
                    {/* Add more experiences here */}
                  </ul>
                </div>
              )}

              {selectedTab === 'recommended' && (
                <div className="recommended">
                  <ul className="recommended-list">
                    <li>Ghumo Bharat - Travel and Tourism Website</li>
                    <li>Review Sentiment Analysis - React App</li>
                    <li>Task Management Application</li>
                    {/* Add more projects here */}
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

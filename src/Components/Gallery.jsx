import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className="gallery">
      <h2 className="gallery-title">Project Gallery</h2>
      <div className="gallery-images">
        <div className="gallery-image">Image 1</div>
        <div className="gallery-image">Image 2</div>
        <div className="gallery-image">Image 3</div>
      </div>
    </div>
  );
};

export default Gallery;

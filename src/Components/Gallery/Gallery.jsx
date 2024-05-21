import React from 'react';
import './Gallery.css';


const images = [
  { src: 'image 23.jpg', description: 'Four Points Westside Brew House Bar and Restaurant' },
  { src: 'image 25.jpg', description: 'Four Points Hotel Lobby' },
  { src: 'image 26.jpg', description: 'Four Points Hotel Exterior' },
  { src: 'image 27.jpg', description: 'Four Points Swimming Pool' },
  { src: 'image 28.jpg', description: 'Four Points Front Desk Detail' },
  { src: 'image 29.jpg', description: 'Four Points Bathroom' },
  { src: 'image 30.jpg', description: 'Four Points Business Meeting' },
  { src: 'image 31.jpg', description: 'Four Points Friends Cheers' },
  { src: 'image 32.jpg', description: 'Apple Brioche Loaf, Four Points by Sheraton Signature' },
  { src: 'image 33.jpg', description: 'Grilled Panini, Four Points by Sheraton Signature' },
  { src: 'image 34.jpg', description: 'Four Points Model Room' },
  { src: 'image 35.jpg', description: 'Four Points Model Room, Desk' },
  { src: 'image 36.jpg', description: 'Four Points Model Room, Bed Side Chair' },
  { src: 'image 37.jpg', description: 'Four Points Model Room Bathroom' },
  { src: 'image 38.jpg', description: 'Four Points King CV Guest Room' },
  { src: 'image 39.jpg', description: 'Four Points Best Brew' },
];

const Gallery = () => {
  return (
    <>
    <div className="content">
      <h1>Capturing records of significance warrants their public display.</h1>
      
    </div>
    

    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={require(`../../Assets/${image.src}`)} alt={`image ${index + 1}`} />
          <p>{image.description}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default Gallery;

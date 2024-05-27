import React from 'react';
import './Service.css'; // Import CSS file

const imageData = [  // Assuming you have the image data in an array
  { id: 1, title: 'Accommodation', description: 'Experience comfort and luxury...' },
  { id: 2, title: 'Housekeeping', description: 'Enjoy impeccable cleanliness...' },
  // Add more objects for additional images
];

function ImageList() {
  return (
    <div className="image-list">
      {imageData.map((item) => (
        <div key={item.id} className="image-card">
          <img src="[Image URL example.com]" alt={item.title} />
          <div className="image-card__content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageList;

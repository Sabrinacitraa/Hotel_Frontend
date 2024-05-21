import React, { useState } from "react";
import "./Carousel.css";

const images = [
  {
    id: 1,
    title: "Guest Room",
    image: "image1",
  },
  {
    id: 2,
    title: "Local Flavor",
    image: "image2",
  },
  {
    id: 3,
    title: "Sports",
    image: "image3",
  },
  {
    id: 4,
    title: "Public Spaces",
    image: "image4",
  },
];

const Carousel = () => {
  const [activeImage, setActiveImage] = useState(images[0]);

  const handleMenuClick = (image) => {
    setActiveImage(image);
  };

  return (
    <div className="App">
      <div className="title-one">
        <h1>Keys to Kicking Back</h1>
        <p className="desk-one">
          Perfect the skill of savoring life's uncomplicated joys at Four
          Points.
        </p>
      </div>
      <div className="carousel">
        {images.map((item) => (
          <button key={item.id} onClick={() => handleMenuClick(item)}>
            {item.title}
          </button>
        ))}
      </div>

      <div className="carousel">
        <img
          src={require("../../Assets/" + activeImage.image + ".jpg")}
          alt={activeImage.title}
        />
      </div>
    </div>
  );
};

export default Carousel;

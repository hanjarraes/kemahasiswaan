/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./style.scss";

const Slider = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [startX, setStartX] = useState(0);

  const prevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - startX;

    if (deltaX > 50) {
      prevImage();
    } else if (deltaX < -50) {
      nextImage();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="slider" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <button className="slider-button slider-button-left" onClick={prevImage}>
        <i className="ri-arrow-left-s-line" />
      </button>
      <img src={images[currentImage]} alt="Slider" className="slider-image" />
      <button className="slider-button slider-button-right" onClick={nextImage}>
        <i className="ri-arrow-right-s-line" />
      </button>
      <div className="slider-navigation">
        {images.map((_, index) => (
          <button
            key={index}
            className={`slider-navigation-button ${index === currentImage ? "active" : ""}`}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>
      <div data-aos="fade-up" className="slider-center-button">
        <a href="https://pmb.uis.ac.id/jalur-seleksi" className="join-now-button">Join Now</a>
      </div>
    </div>
  );
};

export default Slider;
import React, { useState, useEffect } from "react";
import bannerOrange from "../assets/logos/banner-orange2.png";
import bannerBlue from "../assets/logos/banner-blue.png";

const Banner = () => {

  const images = [ bannerOrange, bannerBlue ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 100000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[700px] md:h-[450px] lg:h-[600px] overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Banner ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default Banner;

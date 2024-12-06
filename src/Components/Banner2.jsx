import React from "react";
import { FiArrowRight } from "react-icons/fi"; // Importing the arrow icon
import Pic1 from "../assets/banner-2-1.webp"; // Replace with your image paths
import Pic2 from "../assets/banner-2-2.webp";
import Pic3 from "../assets/banner-2-3.webp";
import Pic4 from "../assets/banner-2-4.webp";

const Banner2 = () => {
  const bannerImages = [
    { src: Pic1, alt: "Picture 1", buttonText: "Explore Toys" },
    { src: Pic2, alt: "Picture 2", buttonText: "Unlock Deals" },
    { src: Pic3, alt: "Picture 3", buttonText: "Gift Cards" },
    { src: Pic4, alt: "Picture 4", buttonText: "Latest News" },
  ];

  return (
    <div className="w-full lg:flex space-y-2 flex-col gap-6 px-4 py-8">
      {/* 2 Rows */}
      {[0, 1].map((rowIndex) => (
        <div key={rowIndex} className="lg:flex space-y-2 gap-6 justify-center">
          {bannerImages.slice(rowIndex * 2, rowIndex * 2 + 2).map((image, index) => (
            <div
              key={index}
              className="relative group lg:w-[600px] h-[300px] overflow-hidden rounded-lg shadow-lg"
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {/* Button */}
              <a
                href="#"
                className="absolute bottom-4 right-4 bg-pink-600 text-white py-2 px-4 flex items-center gap-2 rounded-md text-sm font-medium"
              >
                      <FiArrowRight className="text-lg" /> {/* React Icons Arrow */}
                {image.buttonText}
          
              </a>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Banner2;

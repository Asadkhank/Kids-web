import React, { useState } from "react";
import { PlayIcon } from "@heroicons/react/solid";  // Import Heroicons Play Icon
import mediaText from '../assets/media-with-text.webp';
import video from '../assets/Video.mp4';

const ProductSection1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlayIconVisible, setIsPlayIconVisible] = useState(true); // State for play icon visibility

  const slides = [
    {
      img: mediaText, // Replace with your image URLs
      label: 'Image', // Added label for the dot
    },
    {
      video: video, // Replace with your video URL
      label: 'Video', // Added label for the dot
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handleVideoClick = () => {
    // Toggle visibility of play icon when video is clicked
    setIsPlayIconVisible(!isPlayIconVisible);
  };

  const handleScreenClick = () => {
    // Show the play icon again if clicked outside
    if (!isPlayIconVisible) {
      setIsPlayIconVisible(true);
    }
  };

  return (
    <div
      className="bg-[#F9E8C2] lg:p-8 space-y-3 pt-2 rounded-lg lg:flex lg:items-center justify-between relative"
      onClick={handleScreenClick} // Handle click outside to show play icon
    >
 {/* Right Side: Text Content */}
 <div className="lg:w-1/2  mt-8 lg:pl-8 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold text-[#2A2A2A] mb-2">Unmatched Quality</h2>
          <h3 className="text-xl font-medium text-[#2A2A2A] mb-4">
            Our Commitment to Excellence
          </h3>
          <p className="text-gray-600 mb-6">
            Explore worry-free play with Kidu. Our toys meet high safety standards,
            and we guarantee your satisfaction. For trusted quality and joy, choose us.
          </p>
        </div>

        {/* Button */}
        <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 mt-4 self-start">
          Explore Kidu
        </button>
      </div>

      {/* Left Side: Image and Video Slider */}
      <div className="lg:w-1/2 relative">
        <div className="lg:relative">
          {/* Conditionally Render Video or Image */}
          {slides[currentSlide].video && (
            <div className="relative w-full h-[500px]" onClick={handleVideoClick}>
              {/* Play Icon Centered on Video */}
              {isPlayIconVisible && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl">
                  <button className="bg-black bg-opacity-50 rounded-full p-4">
                    <PlayIcon className="w-12 h-12" /> {/* Heroicons Play Icon */}
                  </button>
                </div>
              )}
              <video
                className="w-full h-[500px] object-cover rounded-lg"
                controls  // Enable video controls
                src={slides[currentSlide].video}
              />
            </div>
          )}

          {slides[currentSlide].img && (
            <img
              src={slides[currentSlide].img}
              alt="Product Image"
              className="w-full h-[500px] object-cover rounded-lg"
            />
          )}

          {/* Navigation: Buttons and Dots */}
          <div className="absolute bottom-[-30px] left-0 right-0 flex items-center justify-center z-10">
            {/* Left Navigation Button */}
            <button
              className="absolute left-0 text-black p-4 rounded-full text-4xl"
              onClick={handlePrev}
            >
              &#8592; {/* Left Arrow (Unicode) */}
            </button>

            {/* Dots and Tags */}
            <div className="flex space-x-4 items-center">
              <div className="flex items-center">
                <div
                  onClick={() => handleDotClick(0)} // Handle dot click
                  className={`w-3 h-2 rounded cursor-pointer ${currentSlide === 0 ? "bg-black" : "bg-gray-400"}`}
                />
                <span className="ml-2 text-sm text-gray-700">{slides[0].label}</span> {/* Tag next to dot */}
              </div>

              <div className="flex items-center">
                <div
                  onClick={() => handleDotClick(1)} // Handle dot click
                  className={`w-3 h-2 rounded cursor-pointer ${currentSlide === 1 ? "bg-black" : "bg-gray-400"}`}
                />
                <span className="ml-2 text-sm text-gray-700">{slides[1].label}</span> {/* Tag next to dot */}
              </div>
            </div>

            {/* Right Navigation Button */}
            <button
              className="absolute right-0 text-black p-4 rounded-full text-4xl"
              onClick={handleNext}
            >
              &#8594; {/* Right Arrow (Unicode) */}
            </button>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default ProductSection1;

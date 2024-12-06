import React, { useState, useEffect, useRef } from "react";
import slide1 from "../assets/slide-1.webp";
import slide21 from "../assets/slide-2-1.webp";
import slide22 from "../assets/slide-2-2.webp";

const slides = [
  {
    imgLeft: slide1,
    imgRight: slide1,
    title: "Kidu - Explore the World of Play",
    subtitle: "Discover endless joy with our latest toys.",
    tag: "New Arrivals",
    bgColor: "bg-purple-200", // Background color for center div
  },
  {
    imgLeft: slide21,
    imgRight: slide22,
    title: "Limited Edition Toys",
    subtitle: "Get exclusive toys for the season!",
    tag: "Limited Edition",
    bgColor: "bg-blue-200", // Background color for center div
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const sliderRef = useRef(null);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setCurrentX(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (startX > currentX) {
      handleNext();
    } else if (startX < currentX) {
      handlePrev();
    }
  };

  // Adding event listeners for mouse drag on mount
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("mousedown", handleMouseDown);
      slider.addEventListener("mousemove", handleMouseMove);
      slider.addEventListener("mouseup", handleMouseUp);
      slider.addEventListener("mouseleave", handleMouseUp); // To handle mouse leaving area
    }
    return () => {
      if (slider) {
        slider.removeEventListener("mousedown", handleMouseDown);
        slider.removeEventListener("mousemove", handleMouseMove);
        slider.removeEventListener("mouseup", handleMouseUp);
        slider.removeEventListener("mouseleave", handleMouseUp);
      }
    };
  }, [isDragging, startX, currentX]);

  // Handle click on navigation dots (for small screens)
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative flex justify-center items-center -z-10 h-auto">
      {/* Slider Container */}
      <div
        className="flex items-center lg:px-12 overflow-hidden relative w-full"
        ref={sliderRef}
      >
        {/* Slide Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
          {/* Left Image - Hidden on Small screens */}
          <div className="hidden sm:block">
            <img
              src={slides[currentSlide].imgLeft}
              alt="Toys Collection"
              className="rounded-lg w-[300px] h-auto cursor-pointer select-none" // Disable selection
            />
          </div>

          {/* Middle Text */}
          <div
            className={`${slides[currentSlide].bgColor} lg:w-[500px] lg:h-[510px] lg:text-start text-center md:text-left p-8 rounded-lg select-none`} // Disable selection
          >
            <span className="text-sm bg-green-100 text-green-600 px-2 py-1 rounded-full inline-block mb-4">
              {slides[currentSlide].tag}
            </span>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {slides[currentSlide].title}
            </h1>
            <p className="text-gray-600 mb-4">{slides[currentSlide].subtitle}</p>
            <div className="flex lg:space-x-4 justify-center md:justify-start mb-6">
              <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-700 select-none">
                Shop now
              </button>
              <button className="text-black border border-gray-300 py-2 px-4 rounded hover:bg-gray-100 select-none">
                Learn more &rarr;
              </button>
            </div>
          </div>

          {/* Right Image - Hidden on Small screens */}
          <div className="hidden sm:block">
            <img
              src={slides[currentSlide].imgRight}
              alt="Pineapple Toy"
              className="rounded-lg w-[300px] h-auto cursor-pointer select-none" // Disable selection
            />
          </div>
        </div>
      </div>

      {/* Left Arrow (Bottom-Left) */}
      <button
        className="absolute hidden sm:block -bottom-8 left-44 font-bold text-3xl text-black transition"
        onClick={handlePrev}
      >
        &#8592;
      </button>

      {/* Right Arrow (Bottom-Right) */}
      <button
        className="absolute hidden sm:block -bottom-8 right-44 text-3xl text-black transition"
        onClick={handleNext}
      >
        &#8594;
      </button>

      {/* Navigation Dots (Bottom Center) */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center items-center space-x-4">
        <div className="flex items-center space-x-4">
          {slides.map((slide, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-black" : "bg-gray-300"}`}
              onClick={() => handleDotClick(index)} // Trigger slide change on click (only on dots for small screens)
            ></button>
          ))}
          {/* Display Tag Next to Navigation Dots */}
          <span className="text-sm text-gray-700 ml-4">{slides[currentSlide].tag}</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

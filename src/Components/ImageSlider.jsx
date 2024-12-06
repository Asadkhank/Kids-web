import React from "react";
import logo1 from '../assets/logo1.svg';
import logo2 from '../assets/logo2.svg';
import logo3 from '../assets/logo3.svg';
import logo4 from '../assets/logo4.svg';
import logo5 from '../assets/logo5.svg';

const ImageSlider = () => {
  const images = [
    { src: logo1, alt: "Image 1" },
    { src: logo2, alt: "Image 2" },
    { src: logo3, alt: "Image 3" },
    { src: logo4, alt: "Image 4" },
    { src: logo5, alt: "Image 5" },
  ];

  // Duplicate the array for looping effect
  const loopedImages = [...images, ...images];

  return (
    <div className="w-full overflow-hidden relative">
      <div
        className="flex items-center gap-8 animate-scroll"
        style={{
          animation: "scrollLeft 10s linear infinite",
          width: `${loopedImages.length * 120}px`, // Dynamically adjust width based on images
        }}
      >
        {loopedImages.map((image, index) => (
          <div key={index} className="min-w-[100px] sm:min-w-[120px] md:min-w-[150px] lg:min-w-[180px] flex-shrink-0">
            <img
              src={image.src}
              alt={image.alt}
              className="object-contain w-full h-auto"
            />
          </div>
        ))}
      </div>
      
      {/* Add custom styles for animation */}
         {/* Add custom styles for animation */}
         <style>
        {`
          @keyframes scrollRightToLeft {
            from {
              transform: translate(-100%); /* Start from the far right */
            }
            to {
              transform: translate(100%); /* Move to the far left */
            }
          }
        `}
      </style>
    
    </div>
  );
};

export default ImageSlider;

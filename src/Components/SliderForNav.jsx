import React from "react";
import logo1 from '../assets/logo1.svg';
import logo2 from '../assets/logo2.svg';
import logo3 from '../assets/logo3.svg';
import logo4 from '../assets/logo4.svg';
import logo5 from '../assets/logo5.svg';

const SliderForNav = () => {
  const images = [
    { src: logo1, alt: "Image 1" },
    { src: logo2, alt: "Image 2" },
    { src: logo3, alt: "Image 3" },
    { src: logo4, alt: "Image 4" },
    { src: logo5, alt: "Image 5" },
  ];

  // Duplicate the array for the looping effect
  const loopedImages = [...images, ...images]; // To make the scroll infinite

  return (
    <div className="w-full overflow-hidden relative h-[30vh]"> {/* Container for the slider */}
      {/* Container for images with vertical scroll */}
      <div
        className="flex flex-col"
        style={{
          animation: "scrollUp 15s linear infinite", // Vertical scrolling animation
          height: `${loopedImages.length * 120}px`, // Height adjusts based on the number of images
        }}
      >
        {loopedImages.map((image, index) => (
          <div key={index} className="flex-shrink-0 mb-5">
            <img
              src={image.src}
              alt={image.alt}
              className="object-contain w-40 h-40" // Adjust width and height as per design
            />
          </div>
        ))}
      </div>

      {/* Add custom styles for infinite vertical scroll animation */}
      <style>
        {`
          @keyframes scrollUp {
            0% {
              transform: translateY(0); /* Start from the normal position */
            }
            100% {
              transform: translateY(-100%); /* Move upwards to the top */
            }
          }

          .animate-scroll {
            animation: scrollUp 15s linear infinite; /* Infinite scroll animation */
          }

          /* Stop the animation on hover */
          .w-full:hover .flex {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
};

export default SliderForNav;

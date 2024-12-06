import React from "react";
import scroll1 from '../assets/scroll-img-1.webp';
import scroll2 from '../assets/scroll-img-2.avif';
import scroll3 from '../assets/scroll-img-3.avif';

const ImageSlider2 = () => {
  const items = [
    { type: "image", src: scroll1, alt: "Image 1" },
    { type: "text", content: "NEXT DAY DELIVERY - ORDER BY 6PM" },
    { type: "image", src: scroll2, alt: "Image 2" },
    { type: "text", content: "Get an extra 5% off with code 'XMAS5'" },
    { type: "image", src: scroll3, alt: "Image 3" },
    { type: "text", content: "Premier Toys: A Decade of Excellence" },
    { type: "text", content: "LAST CHANCE TO BUY!" },
  ];

  return (
    <div className="w-full overflow-hidden relative">
      {/* Wrapper for the scrolling content */}
      <div className="flex items-center gap-8 animate-scroll hover:pause-scroll">
        {/* Dynamically render items */}
        {items.concat(items).map((item, index) => (
          <div key={`${item.type}-${index}`} className="flex-shrink-0 w-auto h-[120px] flex items-center justify-center">
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt}
                className="object-contain h-16 w-16 rounded-full"
              />
            ) : (
              <p className="text-gray-700 text-lg font-medium whitespace-nowrap">
                {item.content}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Custom animation */}
      <style>
        {`
          .animate-scroll {
            display: flex;
            animation: scroll 20s linear infinite;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          /* Pause animation on hover */
          .hover\\:pause-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
};

export default ImageSlider2;

import React from "react";

const NewsTicker = () => {
  const textItems = [
    "Low Price Guarantee",
    "No Hassle Returns",
    "Parent-Approved Toy Safety Standards",
    "Low Price Guarantee",
    "No Hassle Returns",
    "Parent-Approved Toy Safety Standards",
  ];

  // Duplicate the text array for a smooth looping effect
  const loopedText = [...textItems, ...textItems];

  return (
    <div className="w-full py-4 overflow-hidden bg-pink-700 py-2">
      <div
        className="flex gap-10 animate-ticker"
        style={{
          animation: "scrollLeft 15s linear infinite", // Scroll effect
          width: `${loopedText.length * 200}px`, // Adjust width dynamically based on text
        }}
      >
        {loopedText.map((item, index) => (
          <span
            key={index}
            className="text-white text-lg whitespace-nowrap  font-medium"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Custom animation styles */}
      <style>
        {`
          @keyframes scrollLeft {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default NewsTicker;

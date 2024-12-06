import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ethan J.",
    text: "The variety in this store is impressive. From toys to clothing, they have it all. I'm planning to return for more shopping adventures.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ava L.",
    text: "Outstanding customer support has been a lifeline for me as a parent. This store is my go-to for parenting needs. Thank you for the unwavering assistance!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily R.",
    text: "My kids are in love with the quality toys here. It's their happy place. The top-notch products keep them engaged, and I'm a happy parent too!",
    rating: 5,
  },
  {
    id: 4,
    name: "John D.",
    text: "Amazing experience! The toys are creative and durable. Highly recommended.",
    rating: 4,
  },
  {
    id: 5,
    name: "Sophia P.",
    text: "Great store with a fantastic selection for kids of all ages. I'll definitely shop here again!",
    rating: 5,
  },
  {
    id: 6,
    name: "Oliver S.",
    text: "Affordable prices and excellent quality. The staff is friendly too!",
    rating: 4,
  },
  {
    id: 7,
    name: "Mia K.",
    text: "Best place for unique and engaging toys. My children love them!",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl  pl-10 font-bold mb-6">Testimonials</h2>

      {/* Outer container to move content slightly left and right */}
      <div className="relative px-4 md:px-8">

        {/* Testimonials Container */}
        <div className="flex gap-4 overflow-hidden justify-evenly md:justify-start">
          {testimonials
            .slice(currentIndex, currentIndex + 3) // Show 3 testimonials at a time
            .map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-80 bg-white shadow-lg p-4 rounded-lg"
              >
                <p className="text-sm mb-4">{testimonial.text}</p>
                <p className="font-semibold">{testimonial.name}</p>
                <div className="flex items-center mt-2">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-yellow-500 text-lg">
                        &#9733;
                      </span>
                    ))}
                </div>
              </div>
            ))}
        </div>

        {/* Button Container */}
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrev}
            className="text-2xl p-2 hover:bg-gray-200 rounded-full"
          >
            &#8592;
          </button>

          <button
            onClick={handleNext}
            className="text-2xl p-2 hover:bg-gray-200 rounded-full"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

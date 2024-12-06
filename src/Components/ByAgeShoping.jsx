import React from 'react';
import Ricemon from '../assets/collection-age-1.avif';
import RicepipaMini from '../assets/collection-age-2.avif';
import Riceturnip from '../assets/collection-age-3.avif';
import Flashmasking from '../assets/collection-age-4.avif';
import Ricepapa from '../assets/collection-age-5.avif';

const ByAgeShoping = () => {
  const cards = [
    { name: "1 - 12 months", src: Ricemon, link: "#" },
    { name: "2 - 3 Years", src: RicepipaMini, link: "#" },
    { name: "4 - 5 Years", src: Riceturnip, link: "#" },
    { name: "6 - 7 Years ", src: Flashmasking, link: "#" },
    { name: "Older Kids", src: Ricepapa, link: "#" },
  ];

  return (
    <div className="w-full flex flex-col items-center mt-20">
      <h3 className="text-3xl font-bold pb-16">Shop by Age</h3>
      <div className="flex gap-8 justify-center items-center flex-wrap">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center"
          >
            {/* Circle container */}
            <a
              href={card.link}
              className="block relative w-[200px] h-[210px] rounded-full overflow-hidden bg-gray-200 group"
            >
              {/* Hidden Image */}
              <img
                src={card.src}
                alt={card.name}
                className="absolute bottom-[-30%] left-0 w-[180px] h-[180px] transition-all duration-500 ease-in-out group-hover:bottom-0"
              />
            </a>
            {/* Name */}
            <a
              href={card.link}
              className="text-gray-700 font-bold text-sm mt-4 hover:underline"
            >
              {card.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ByAgeShoping;

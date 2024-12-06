import React from 'react';
import Ricemon from '../assets/Ricemon-Pencil-Case.webp';
import RicepipaMini from '../assets/RicepipaMiniPlushToy1.webp';
import Riceturnip from '../assets/Riceturnip-2FaceMask.webp';
import Flashmasking from '../assets/Flash-Masking-Tape.webp';
import Ricepapa from '../assets/RicepipaMiniPlushToy1.webp';

const Collections = () => {
  const cards = [
    { name: "Ricemon", src: Ricemon, link: "#" },
    { name: "Ricepipa Mini", src: RicepipaMini, link: "#" },
    { name: "Riceturnip", src: Riceturnip, link: "#" },
    { name: "Flash Masking", src: Flashmasking, link: "#" },
    { name: "Ricepapa", src: Ricepapa, link: "#" },
  ];

  return (
    <div className="w-full flex flex-col items-center mt-8">
        <h3 className='lg:text-3xl text-2xl mb-2 ml-2 font-bold'>Shopping out top collections</h3>
      <div className="flex gap-6 justify-center items-center flex-wrap">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center"
          >
            {/* Image */}
            <a href={card.link} className="block">
              <img
                src={card.src}
                alt={card.name}
                className="lg:w-[210px] lg:h-[210px] object-contain hover:scale-105 transition-transform duration-200"
              />
            </a>
            {/* Name */}
            <a
              href={card.link}
              className="text-gray-700 text-sm mt-2 hover:underline"
            >
              {card.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;

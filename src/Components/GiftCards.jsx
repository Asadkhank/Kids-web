import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Updated import for Navigation
import 'swiper/css';
import 'swiper/css/navigation';
import pic1 from '../assets/product-white-friday.webp';
import pic2 from '../assets/product-white-friday.webp';
import pic3 from '../assets/product-white-friday.webp';
import pic4 from '../assets/product-white-friday.webp';

const giftCards = [
  { image: pic1, title: 'Gift Card' },
  { image: pic2, title: 'Gift Card' },
  { image: pic3, title: 'Gift Card' },
  { image: pic4, title: 'Gift Card' },
];

const GiftCards = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-2">Gift Cards</h2>
      <p className="text-gray-500 mb-6">Send gift cards to your loved ones anywhere in the world.</p>

      <div className="relative">
        <Swiper
          modules={[Navigation]} // Enable Navigation module
          spaceBetween={20}
          slidesPerView={1.2}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
          }}
        >
          {giftCards.map((card, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center bg-white rounded-lg shadow-3xl border border-[2px] border-black overflow-hidden max-w-[260px]"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <button className="mt-4 w-full px-4 py-2 bg-gray-100 rounded-lg overflow-hidden relative group">
                  <span className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  <span className="relative z-10 text-gray-800 group-hover:text-white transition-colors duration-300">
                    Buy gift card
                  </span>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-between items-center space-x-6 mt-6">
          <button className="custom-prev text-2xl text-black bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center">
            &#8592;
          </button>
          <button className="custom-next text-2xl text-black bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center">
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftCards;

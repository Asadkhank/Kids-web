import React, { useState } from 'react';
import featuredTab from '../assets/featured-tab-collection-img.webp';
import RicepuddingLittleLight1 from '../assets/RicepuddingLittleLight1.webp';
import RicemintyLittleLight1 from '../assets/ricemintyLittleLight1.webp';
// import RicelogiLittleLight from '../assets/RicelogiLittleLight1.jpg';
import RicemoguLittleLight1 from '../assets/ricemoguLittleLight1.webp';

// Mask Images
import RiceturnipFaceMask from '../assets/Riceturnip-2FaceMask.webp';

// Stickers Images
import FlashMaskingTape from '../assets/Flash-Masking-Tape.webp';
 
const categories = [
  { name: 'Little Lights' },
  { name: 'Face Masks' },
  { name: 'Stickers' },
];

const products = {
  Stickers: [
    { name: 'Sticker 1', image: FlashMaskingTape },
    { name: 'Sticker 2', image: FlashMaskingTape },
    { name: 'Sticker 3', image: RicepuddingLittleLight1 },
    { name: 'Sticker 4', image: FlashMaskingTape},
    { name: 'Sticker 5', image: RicemoguLittleLight1 },
    { name: 'Sticker 6', image: FlashMaskingTape },
  ],
  'Little Lights': [
    { name: 'Light 1', image: RicepuddingLittleLight1 },
    { name: 'Light 2', image: RicemintyLittleLight1 },
    { name: 'Light 3', image: RicepuddingLittleLight1 },
    { name: 'Light 4', image: RicemoguLittleLight1 },
    { name: 'Light 5', image: RicemintyLittleLight1 },
    { name: 'Light 6', image: RicemoguLittleLight1 },
  ],
  'Face Masks': [
    { name: 'Mask 1', image: RiceturnipFaceMask},
    { name: 'Mask 2', image: RiceturnipFaceMask },
    { name: 'Mask 3', image: RiceturnipFaceMask },
    { name: 'Mask 4', image: RiceturnipFaceMask },
    { name: 'Mask 5', image: RiceturnipFaceMask },
    { name: 'Mask 6', image: RiceturnipFaceMask },
  ],
};

const ShopByCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState('Little Lights');

  return (
    <div className="container lg:mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Shop by Category</h2>
      <div className="lg:flex gap-6">
        {/* Sidebar */}
        <div className="lg:w-96 bg-gray-100 rounded-lg lg:p-4 flex flex-col">
          <div>
            <img src={featuredTab} alt="" className="lg:w-96 h-auto mb-4" />
          </div>
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => setSelectedCategory(category.name)}
              className={`cursor-pointer flex my-auto justify-between text-lg p-3 rounded-lg mb-2 hover:bg-pink-100 ${
                selectedCategory === category.name ? 'text-pink-500 text-xl font-bold' : ''
              }`}
            >
              {category.name} <span className="ml-2 text-3xl">→</span>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="lg:w-3/4">
          <h3 className="text-2xl font-semibold mb-4">{selectedCategory}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {products[selectedCategory].map((product, index) => (
              <div
                key={index}
                className="block rounded-lg shadow hover:shadow-lg overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover hover:scale-105 transition-transform duration-300"
                />
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;

import React, { useState } from "react";

import { HiOutlineMail, HiOutlineArrowRight } from "react-icons/hi";
import pic1 from '../assets/TheMushroomCollection1.webp';
import pic2 from '../assets/TheMushroomCollection2.webp';
import pic3 from '../assets/TheMushroomCollection3.webp';
import pic4 from '../assets/TheMushroomCollection4.webp';
import imagetext from '../assets/image-w-text.webp';
import ProductSection1 from '../Components/ProductSection1.jsx';

const SnapDeal = () => {
  const [mainImage, setMainImage] = useState(pic1); // State for main image
  const [price, setPrice] = useState(23.00); // State for price
  const [stock, setStock] = useState("700 item(s) left in stock!"); // State for stock status
  const [showPopup, setShowPopup] = useState(false); // State for showing the pop-up
  const [quantity, setQuantity] = useState(1); // State for quantity

  // Data for images, prices, stock, and colors
  const productData = {
    [pic1]: { price: 23.00, stock: "700 item(s) left in stock!" },
    [pic2]: { price: 25.00, stock: "500 item(s) left in stock!" },
    [pic3]: { price: 27.00, stock: "300 item(s) left in stock!" },
    [pic4]: { price: 29.00, stock: "100 item(s) left in stock!" },
  };
  const colorData = {
    red: { image: pic2, price: 25.00, stock: "500 item(s) left in stock!" },
    gray: { image: pic3, price: 27.00, stock: "300 item(s) left in stock!" },
    black: { image: pic4, price: 29.00, stock: "100 item(s) left in stock!" },
  };
    // Function to update the main image, price, and stock when a color is clicked
    const handleColorClick = (color) => {
      const selectedColor = colorData[color];
      setMainImage(selectedColor.image);
      setPrice(selectedColor.price);
      setStock(selectedColor.stock);
    };

  const handleImageClick = (image) => {
    setMainImage(image);
    setPrice(productData[image].price);
    setStock(productData[image].stock);
    setQuantity(1); // Reset quantity when image changes
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <section>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-4 pt-16">Deal of the Day</h1>
          <p className="text-center text-xl text-gray-600 mb-8">
            Discover unbeatable offers with our exclusive Deal of the Day - your daily destination for amazing savings!
          </p>

          <div className="grid lg:grid-cols-2 mt-16 gap-8">
            <div>
              <img
                src={mainImage}
                alt="Main Mushroom Collection"
                className="w-full rounded-lg"
              />
              <div className="flex justify-start space-x-12 gap-4 mt-4">
                {[pic1, pic2, pic3, pic4].map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-24 h-24 rounded-lg border hover:border-gray-700 cursor-pointer ${
                      mainImage === image ? "border-gray-700" : ""
                    }`}
                    onClick={() => handleImageClick(image)}
                  />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-semibold">The Mushroom Collection</h2>
              <div className="text-md space-x-4 mt-6">
                <span className="bg-slate-200 px-2 py-1 rounded-2xl text-neutral-600 font-semibold">Save ${price - 23.00}</span>
                <span className="bg-slate-200 px-2 py-1 rounded-2xl text-neutral-600 font-semibold">In stock</span>
              </div>
              <div className="flex items-center border-y-[3px] p-4 justify-between mt-6 gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 font-medium">Excellent</span>
                  <span>{stock}</span>
                </div>
                <div className="flex-grow">
                  <div className="h-2 bg-green-500 rounded-lg" style={{ width: "60%" }}></div>
                </div>
              </div>

              <div className="flex items-center space-x-20 mt-8">
                <p className="text-xl text-neutral-600 font-bold">Price:</p>
                <div className="flex space-x-3">
                  <p className="text-2xl font-semibold">${price}</p>
                  <p className="text-gray-400 text-lg line-through">$30.00</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="font-medium">Color:</p>
                <div className="flex gap-2 mt-2">
                  <div
                    className="w-8 h-8 bg-red-500 rounded-full border cursor-pointer"
                    onClick={() => handleColorClick("red")}
                  ></div>
                  <div
                    className="w-8 h-8 bg-gray-500 rounded-full border cursor-pointer"
                    onClick={() => handleColorClick("gray")}
                  ></div>
                  <div
                    className="w-8 h-8 bg-black rounded-full border cursor-pointer"
                    onClick={() => handleColorClick("black")}
                  ></div>
                </div>
              </div>

              <div className="mt-4 flex space-x-20">
                <p className="font-medium">Size Chart:</p>
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-200">
                  Guide
                </button>
              </div>

              {/* Ask Me a Question Section */}
              <div className="mt-4 flex items-center space-x-2">
                <button
                  className="text-black flex items-center gap-2 rounded-lg"
                  onClick={() => setShowPopup(true)}
                >
                  <div className="w-8 h-8 flex items-center justify-center border rounded-full border-gray-600">
                    <span className="text-lg font-semibold text-gray-600">?</span>
                  </div>
                  Ask Question
                </button>
              </div>

              {/* Quantity Counter */}
              <div className="mt-4">
                
                <div className="flex items-center mt-2 space-x-4">
                  <button
                    className="px-4 py-2 bg-gray-200 rounded-lg text-lg font-semibold"
                    onClick={decrementQuantity}
                  >
                    -
                  </button>
                  <span className="text-xl font-bold">{quantity}</span>
                  <button
                    className="px-4 py-2 bg-gray-200 rounded-lg text-lg font-semibold"
                    onClick={incrementQuantity}
                  >
                    +
                  </button>
                </div>
                <p className="text-xl mt-4 font-semibold">Total Price: ${(price * quantity).toFixed(2)}</p>
              </div>
                 {/* Add to Cart and Payment Options */}
                 <div className="mt-4 space-x-10 flex">
                <button className="w-1/2 bg-gray-200 text-black py-2 rounded-lg font-semibold overflow-hidden relative group">
                  <span className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
                    Add to Cart
                  </span>
                </button>

                <div className="w-1/2">
                  <button className="w-full bg-yellow-600 text-white py-2 rounded-lg font-semibold hover:bg-yellow-700">
                    Pay with GPay
                  </button>
                  <a
                    href="#"
                    className="block text-blue-600 text-center font-semibold hover:underline"
                  >
                    More Payment Options
                  </a>
                </div>
              </div>
              <div className="mt-6 text-gray-700">
      <p className="text-md leading-2">
        <span className="font-semibold">Pickup available at Ballas Road</span>
        <br />
        Usually ready in 24 hours
        <br />
        <a href="#" className="text-blue-600 font-semibold hover:underline">
          Check availability at other stores
        </a>
      </p>
    </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pop-up Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4">Ask Me a Question</h3>
            <div className="mb-4">
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Phone</label>
              <input
                type="tel"
                className="w-full p-2 border rounded-lg"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Message</label>
              <textarea
                className="w-full p-2 border rounded-lg"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="flex justify-between">
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-800"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-800">
                Send
              </button>
            </div>
          </div>
        </div>
      )}

<div className="mt-10 lg:mx-20">
  <ProductSection1/>
</div>


      <section className="mt-10">
   <div className="container mx-auto px-4 py-8">
      {/* Wrapper Div */}
      <div className="bg-pink-100 rounded-lg flex flex-col lg:flex-row items-center lg:items-stretch">
        {/* Left Side - Image */}
        <div className="lg:w-1/2">
          <img
            src={imagetext}// Replace with the actual image path
            alt="Pineapple Plush"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>

        {/* Right Side - Subscription Form */}
        <div className="lg:w-1/2 p-8 text-center flex flex-col justify-center">
          <HiOutlineMail className="text-5xl mx-auto text-black" />
          <h2 className="text-2xl font-semibold mt-4">Subscribe to Newsletter</h2>
          <p className="text-gray-600 mt-2">
            Subscribe and receive exclusive information and offers!
          </p>

          <div className="mt-6">
            <div className="flex items-center justify-center gap-2">
              <input
                type="email"
                placeholder="Email"
                className="w-3/4 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
              <button className="p-3 bg-pink-300 rounded-lg hover:bg-pink-400">
                <HiOutlineArrowRight className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

   </section>
   
    </>
  );
};

export default SnapDeal;

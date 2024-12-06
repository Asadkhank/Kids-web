import React, { useState, useEffect, useRef } from "react";
import pic1 from "../assets/RicepipaMiniPlushToy1.webp";
import pic2 from "../assets/RicebambooWaterBottle1.webp";
import pic3 from "../assets/Riceturnip-2FaceMask.webp";
import pic4 from "../assets/Ricemon-Pencil-Case.webp";
import pic5 from "../assets/RicepuddingLittleLight1.webp";
import pic6 from "../assets/Flash-Masking-Tape.webp";
import banner from "../assets/banner-2-1.webp";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CatalogDropdown = () => {
  const [isCatalogDropdownOpen, setIsCatalogDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(1); // Default selected item to Mini Plush
  const dropdownRef = useRef(null);

  const listData = {
    1: [
      "Riceboo Mini Plush Toy 1",
      "Riceboo Mini Plush Toy 2",
      "Riceboo Mini Plush Toy 3",
      "Riceboo Mini Plush Toy 4",
      "Riceboo Mini Plush Toy 5",
      "Riceboo Mini Plush Toy 6",
      "Riceboo Mini Plush Toy 7",
      "Riceboo Mini Plush Toy 8",
      "Riceboo Mini Plush Toy 9",
      "Riceboo Mini Plush Toy 10",
    ],
    2: [
      "Notebook Item 1",
      "Notebook Item 2",
      "Notebook Item 3",
      "Notebook Item 4",
      "Notebook Item 5",
      "Notebook Item 6",
      "Notebook Item 7",
      "Notebook Item 8",
      "Notebook Item 9",
      "Notebook Item 10",
    ],
    3: [
      "Face Mask Item 1",
      "Face Mask Item 2",
      "Face Mask Item 3",
      "Face Mask Item 4",
      "Face Mask Item 5",
      "Face Mask Item 6",
      "Face Mask Item 7",
      "Face Mask Item 8",
      "Face Mask Item 9",
      "Face Mask Item 10",
    ],
    4: [
      "Accessory Item 1",
      "Accessory Item 2",
      "Accessory Item 3",
      "Accessory Item 4",
      "Accessory Item 5",
      "Accessory Item 6",
      "Accessory Item 7",
      "Accessory Item 8",
      "Accessory Item 9",
      "Accessory Item 10",
    ],
    5: [
      "Little Light Item 1",
      "Little Light Item 2",
      "Little Light Item 3",
      "Little Light Item 4",
      "Little Light Item 5",
      "Little Light Item 6",
      "Little Light Item 7",
      "Little Light Item 8",
      "Little Light Item 9",
      "Little Light Item 10",
    ],
    6: [
      "Sticker Item 1",
      "Sticker Item 2",
      "Sticker Item 3",
      "Sticker Item 4",
      "Sticker Item 5",
      "Sticker Item 6",
      "Sticker Item 7",
      "Sticker Item 8",
      "Sticker Item 9",
      "Sticker Item 10",
    ],
  };

  const itemNames = [
    "Mini Plush",
    "Notebook",
    "Face Masks",
    "Accessories",
    "Little Lights",
    "Stickers",
  ];

  const toggleDropdown = () => {
    setIsCatalogDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCatalogDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative cursor-pointer"
      onClick={toggleDropdown}
      ref={dropdownRef}
    >
      <span className="hover:underline underline-offset-1 flex gap-4 items-center">
        Catalog {isCatalogDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
      </span>

      {isCatalogDropdownOpen && (
        <ul className="absolute z-50 w-full mt-5 bg-white text-black text-sm rounded shadow-lg">
          <div className="px-8 py-6">
            {/* Images - Two Rows, 3 images per row */}
            <div className="grid grid-cols-3 gap-8 md:grid-cols-1 sm:grid-cols-1 justify-center">
              {/* Row 1 */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedItem(1);
                }}
                className={`cursor-pointer hover:shadow-lg text-center ${
                  selectedItem === 1 ? "border border-pink-500" : ""
                }`}
              >
                <img
                  src={pic1}
                  alt="Mini Plush Toy"
                  className="h-20 w-20 mx-auto"
                />
                <span className="block mt-2 font-semibold">Mini Plush</span>
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedItem(2);
                }}
                className={`cursor-pointer hover:shadow-lg text-center ${
                  selectedItem === 2 ? "border border-pink-500" : ""
                }`}
              >
                <img
                  src={pic2}
                  alt="Bamboo Water Bottle"
                  className="h-20 w-20 mx-auto"
                />
                <span className="block mt-2 font-semibold">Notebook</span>
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedItem(3);
                }}
                className={`cursor-pointer hover:shadow-lg text-center ${
                  selectedItem === 3 ? "border border-pink-500" : ""
                }`}
              >
                <img
                  src={pic3}
                  alt="Face Mask"
                  className="h-20 w-20 mx-auto"
                />
                <span className="block mt-2 font-semibold">Face Masks</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 md:grid-cols-1 sm:grid-cols-1 justify-center">
              {/* Row 2 */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedItem(4);
                }}
                className={`cursor-pointer hover:shadow-lg text-center ${
                  selectedItem === 4 ? "border border-pink-500" : ""
                }`}
              >
                <img
                  src={pic4}
                  alt="Pencil Case"
                  className="h-20 w-20 mx-auto"
                />
                <span className="block mt-2 font-semibold">Accessories</span>
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedItem(5);
                }}
                className={`cursor-pointer hover:shadow-lg text-center ${
                  selectedItem === 5 ? "border border-pink-500" : ""
                }`}
              >
                <img
                  src={pic5}
                  alt="Little Light"
                  className="h-20 w-20 mx-auto"
                />
                <span className="block mt-2 font-semibold">Little Lights</span>
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedItem(6);
                }}
                className={`cursor-pointer hover:shadow-lg text-center ${
                  selectedItem === 6 ? "border border-pink-500" : ""
                }`}
              >
                <img
                  src={pic6}
                  alt="Masking Tape"
                  className="h-20 w-20 mx-auto"
                />
                <span className="block mt-2 font-semibold">Stickers</span>
              </div>
            </div>

            {/* Item Details */}
            <div className="w-full flex flex-wrap mt-6">
              <div className="w-full sm:w-1/2 md:w-1/3 space-y-2">
                <span className="font-semibold text-lg">
                  {itemNames[selectedItem - 1]}
                </span>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    {listData[selectedItem].slice(0, 5).map((item, index) => (
                      <li key={index} className="hover:text-pink-500">
                        {item}
                      </li>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {listData[selectedItem].slice(5).map((item, index) => (
                      <li key={index} className="hover:text-pink-500">
                        {item}
                      </li>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden sm:block w-full sm:w-1/2 md:w-1/3 ml-4">
                <img src={banner} alt="Banner" className="w-full" />
              </div>
            </div>
          </div>
        </ul>
      )}
    </div>
  );
};

export default CatalogDropdown;

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Added hamburger icon
import logo from "../assets/logo-kidu.svg";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import CatalogDropdown from "../Components/CatalogDropdown.jsx";
import pic1 from "../assets/RicepipaMiniPlushToy1.webp";
import pic2 from "../assets/RicebambooWaterBottle1.webp";
import pic3 from "../assets/Riceturnip-2FaceMask.webp";
import pic4 from "../assets/Ricemon-Pencil-Case.webp";
import pic5 from "../assets/RicepuddingLittleLight1.webp";
import pic6 from "../assets/Flash-Masking-Tape.webp";
import banner from "../assets/banner-2-1.webp";
import SliderForNav from "./SliderForNav";

const Navbar = ({ toggleCart }) => {
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const categoryDropdownRef = useRef(null);
  const resourcesDropdownRef = useRef(null);


 

  // Toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false); // Close the mobile menu
    setIsResourcesDropdownOpen(false); // Close the resources dropdown if open
  };


  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoryDropdownRef.current &&
        !categoryDropdownRef.current.contains(event.target) &&
        resourcesDropdownRef.current &&
        !resourcesDropdownRef.current.contains(event.target)
      ) {
        setIsCategoryDropdownOpen(false);
        setIsResourcesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
  };

  const toggleResourcesDropdown = () => {
    setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
  };

  const closeDropdownOnClick = () => {
    setIsResourcesDropdownOpen(false); // Close the dropdown when a link is clicked
    setIsMenuOpen(false); // Close the hamburger menu when a link is clicked
  };

  const [isSticky, setIsSticky] = useState(false);
  const [hideSearchSection, setHideSearchSection] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for toggling dropdown

  // Scroll handler to toggle sticky class and hide search section
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
      setHideSearchSection(true); // Hide Search Section
    } else {
      setIsSticky(false);
      setHideSearchSection(false); // Show Search Section
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCatalogDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const [isCatalogDropdownOpen, setIsCatalogDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(1); // Default selected item to Mini Plush
  const dropdownRef = useRef(null);
  const salesDropdownRef = useRef(null);

  // Data for the lists based on the selected item
  const listData = {
    1: [
      { name: "Ricespud Mini Plush Toy", link: "/riceboo" },
      { name: "Ricepasty Mini Plush Toy", link: "/riceboo" },
      { name: "The Mushroom Collection", link: "/riceboo" },
      { name: "Ricewebby Mini Plush Toy", link: "/riceboo" },
      { name: "Ricemoyashi Mini Plush Toy", link: "/riceboo" },
      { name: "Ricedumpling Mini Plush Toy", link: "/riceboo" },
      { name: "Ricehashbrown Mini Plush Toy", link: "/riceboo" },
      { name: "Ricedumpling Mini Plush Toy", link: "/riceboo" },
      { name: "Ricehashbrown Mini Plush Toy", link: "/riceboo" },
      { name: "Strawberry Ricespud Mini Plush Toy", link: "/riceboo" },
    ],
    2: [
      { name: "Notebook Item 1", link: "/riceboo" },
      { name: "Notebook Item 2", link: "/riceboo" },
      { name: "Notebook Item 3", link: "/riceboo" },
      { name: "Notebook Item 4", link: "/riceboo" },
      { name: "Notebook Item 5", link: "/riceboo" },
      { name: "Notebook Item 6", link: "/riceboo" },
      { name: "Notebook Item 7", link: "/riceboo" },
      { name: "Notebook Item 8", link: "/riceboo" },
      { name: "Notebook Item 9", link: "/riceboo" },
      { name: "Notebook Item 10", link: "/riceboo" },
    ],
    3: [
      { name: "Face Mask Item 1", link: "/riceboo" },
      { name: "Face Mask Item 2", link: "/riceboo" },
      { name: "Face Mask Item 3", link: "/riceboo" },
      { name: "Face Mask Item 4", link: "/riceboo" },
      { name: "Face Mask Item 5", link: "/riceboo" },
      { name: "Face Mask Item 6", link: "/riceboo" },
      { name: "Face Mask Item 7", link: "/riceboo" },
      { name: "Face Mask Item 8", link: "/riceboo" },
      { name: "Face Mask Item 9", link: "/riceboo" },
      { name: "Face Mask Item 10", link: "/riceboo" },
    ],
    4: [
      { name: "Accessory Item 1", link: "/riceboo" },
      { name: "Accessory Item 2", link: "/riceboo" },
      { name: "Accessory Item 3", link: "/riceboo" },
      { name: "Accessory Item 4", link: "/riceboo" },
      { name: "Accessory Item 5", link: "/riceboo" },
      { name: "Accessory Item 6", link: "/riceboo" },
      { name: "Accessory Item 7", link: "/riceboo" },
      { name: "Accessory Item 8", link: "/riceboo" },
      { name: "Accessory Item 9", link: "/riceboo" },
      { name: "Accessory Item 10", link: "/riceboo" },
    ],
    5: [
      { name: "Little Light Item 1", link: "/riceboo" },
      { name: "Little Light Item 2", link: "/riceboo" },
      { name: "Little Light Item 3", link: "/riceboo" },
      { name: "Little Light Item 4", link: "/riceboo" },
      { name: "Little Light Item 5", link: "/riceboo" },
      { name: "Little Light Item 6", link: "/riceboo" },
      { name: "Little Light Item 7", link: "/riceboo" },
      { name: "Little Light Item 8", link: "/riceboo" },
      { name: "Little Light Item 9", link: "/riceboo" },
      { name: "Little Light Item 10", link: "/riceboo" },
    ],
    6: [
      { name: "Sticker Item 1", link: "/riceboo" },
      { name: "Sticker Item 2", link: "/riceboo" },
      { name: "Sticker Item 3", link: "/riceboo" },
      { name: "Sticker Item 4", link: "/riceboo" },
      { name: "Sticker Item 5", link: "/riceboo" },
      { name: "Sticker Item 6", link: "/riceboo" },
      { name: "Sticker Item 7", link: "/riceboo" },
      { name: "Sticker Item 8", link: "/riceboo" },
      { name: "Sticker Item 9", link: "/riceboo" },
      { name: "Sticker Item 10", link: "/riceboo" },
    ],
  };

  // Names of the items for displaying in the header
  const itemNames = [
    "Mini Plush",
    "Notebook",
    "Face Masks",
    "Accessories",
    "Little Lights",
    "Stickers",
  ];

  // Close the dropdown if clicked outside or on another navigation link
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest(".nav-link") // Navigation link class
      ) {
        setIsCatalogDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Toggle the dropdown on click
  const toggleDropdown = () => {
    setIsCatalogDropdownOpen((prevState) => !prevState);
  };

  // flash Sales
  const [isSalesDropdownOpen, setIsSalesDropdownOpen] = useState(false);

  // Sample sales data
  const salesData = [
    {
      title: "Mini Plush",
      items: [
        {
          name: "Strawberry Ricespud",
          oldPrice: "24.00",
          newPrice: "22.00",
          image: "https://via.placeholder.com/64",
          link: "/riceboo",
        },
        {
          name: "Riceboo Mini Plush Toy",
          oldPrice: "25.00",
          newPrice: "20.00",
          image: "https://via.placeholder.com/64",
          link: "/riceboo",
        },
      ],
    },
    {
      title: "Little Lights",
      items: [
        {
          name: "Ricelog Little Light",
          oldPrice: "42.00",
          newPrice: "38.00",
          image: "https://via.placeholder.com/64",
          link: "/riceboo",
        },
        {
          name: "Ricepudding Little Light",
          oldPrice: "47.00",
          newPrice: "43.00",
          image: "https://via.placeholder.com/64",
          link: "/riceboo",
        },
      ],
    },
    {
      title: "Notebooks",
      items: [
        {
          name: "NYC Pocket Notebook",
          oldPrice: "6.00",
          newPrice: "3.50",
          image: "https://via.placeholder.com/64",
          link: "/riceboo",
        },
        {
          name: "Mexico Pocket Notebook",
          oldPrice: "6.00",
          newPrice: "3.50",
          image: "https://via.placeholder.com/64",
          link: "/riceboo",
        },
      ],
    },
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        salesDropdownRef.current &&
        !salesDropdownRef.current.contains(event.target)
      ) {
        setIsCatalogDropdownOpen(false);
        setIsSalesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Toggle Catalog Dropdown
  const toggleCatalogDropdown = () => {
    setIsCatalogDropdownOpen(!isCatalogDropdownOpen);
    setIsSalesDropdownOpen(false); // Close sales dropdown
  };

  // Toggle Sales Dropdown
  const toggleSalesDropdown = () => {
    setIsSalesDropdownOpen(!isSalesDropdownOpen);
    setIsCatalogDropdownOpen(false); // Close catalog dropdown
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu toggle

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      {/* Top Banner */}
      <div className="bg-pink-500 flex lg:pl-28 text-white text-sm py-2 px-4">
        <div className="lg:font-bold lg:flex hidden font-semibold lg:items-center whitespace-nowrap">
          <span>Limited-time offer!</span>
        </div>
        <div className="lg:ml-12 ml-2 overflow-hidden h-full w-full">
          <div className="animate-ticker whitespace-nowrap flex items-center">
            <span className="mr-8">
              #WELCOME : <strong>Explore Deals & Offers SHOP NOW!</strong>
            </span>
            <span className="mr-8">
              #KiduSafeStyle :{" "}
              <strong>Elevate Your Safety in Style 😷 SHOP NOW!</strong>
            </span>
            <span className="mr-8">
              #KiduFunTime :{" "}
              <strong>Explore exclusive deals at Kidu! SHOP NOW!</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar Links */}
      <nav
        className={`w-full bg-white ${
          isSticky ? "fixed top-0 z-50 pt-10 shadow-lg" : "relative"
        } transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <div className="flex items-center space-x-10">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </div>

          {/* Mobile Navbar for sm screens */}
          <div className="sm:hidden flex items-center space-x-4">
            {/* Mobile Icon for Menu */}
            <button
              className="p-2 bg-gray-100 rounded hover:bg-gray-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <AiOutlineClose className="text-gray-600" size={24} />
              ) : (
                <AiOutlineMenu className="text-gray-600" size={24} />
              )}
            </button>
            <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">
              <FiShoppingCart className="text-gray-600" size={24} />
            </button>
            <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">
              <FiUser className="text-gray-600" size={24} />
            </button>
          </div>

          {/* Desktop Navbar for lg screens */}
          <div className="hidden lg:flex space-x-8 items-center">
            <Link to="/" className="hover:text-pink-500">
              Home
            </Link>
            <div
              className="relative cursor-pointer"
              onClick={toggleDropdown}
              ref={dropdownRef}
            >
              <span className="hover:underline underline-offset-1 flex gap-4 items-center">
                Catalog{" "}
                {isCatalogDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}{" "}
              </span>

              {isCatalogDropdownOpen && (
                <ul className="absolute z-50 w-[1550px] mt-5 -ml-[385px] pl-64 bg-white text-black text-sm rounded shadow-lg">
                  <div className="px-8  py-6">
                    {/* First Row: Images */}
                    <div className="flex space-x-8 justify-start">
                      {[pic1, pic2, pic3, pic4, pic5, pic6].map(
                        (pic, index) => (
                          <div
                            key={index}
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent closing dropdown when clicking on an image
                              setSelectedItem(index + 1);
                            }}
                            className={`cursor-pointer hover:shadow-lg text-center ${
                              selectedItem === index + 1
                                ? "border border-pink-500"
                                : ""
                            }`}
                          >
                            <img
                              src={pic}
                              alt={"Item ${index + 1}"}
                              className="h-20 w-20 mx-auto"
                            />
                            <span className="block mt-2 font-semibold">
                              {
                                [
                                  "Mini Plush",
                                  "Notebook",
                                  "Face Masks",
                                  "Accessories",
                                  "Little Lights",
                                  "Stickers",
                                ][index]
                              }
                            </span>
                          </div>
                        )
                      )}
                    </div>

                    <div className="w-full flex space-x-4 mt-6 ">
                      {/* Second Row: Dynamic List and Banner Images */}
                      <div className=" items-center space-x-4">
                        {selectedItem && (
                          <div>
                            {/* Display the selected item name dynamically */}
                            <h1 className="text-xl font-semibold mb-4">
                              {itemNames[selectedItem - 1]}
                            </h1>

                            {/* List of items */}
                            <div className="flex w-[450px] mr-2 gap-4">
                              <div className="w-1/2 items-center space-y-4">
                                {listData[selectedItem]
                                  .slice(0, 5)
                                  .map((item, idx) => (
                                    <li
                                      key={idx}
                                      className="list-none hover:text-pink-500 cursor-pointer"
                                    >
                                      <Link
                                        to={item.link}
                                        className="hover:text-pink-500"
                                      >
                                        {item.name}
                                      </Link>
                                    </li>
                                  ))}
                              </div>
                              <div className="w-1/2 space-y-4">
                                {listData[selectedItem]
                                  .slice(5, 10)
                                  .map((item, idx) => (
                                    <li
                                      key={idx}
                                      className="list-none hover:text-pink-500 cursor-pointer"
                                    >
                                      <Link
                                        to={item.link}
                                        className="hover:text-pink-500"
                                      >
                                        {item.name}
                                      </Link>
                                    </li>
                                  ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      {/* Banner Images */}
                      <div className="mt-8 w-1/4">
                        <img src={banner} alt="Banner" />
                      </div>
                      <div className="mt-8  w-1/4">
                        <img
                          src={banner}
                          alt="Banner"
                          className="rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </ul>
              )}
            </div>

            <div className="">
              <div
                className="relative cursor-pointer"
                onClick={() => setIsSalesDropdownOpen((prev) => !prev)}
              >
                <span className="hover:underline flex gap-4 items-center text-lg">
                  Flash Sales{" "}
                  {isSalesDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}{" "}
                </span>
                {isSalesDropdownOpen && (
                  <ul
                    ref={dropdownRef}
                    className="absolute z-50 left-0 lg:-left-[450px] mt-5 lg:w-screen bg-white text-black text-sm rounded shadow-lg"
                    style={{ height: "50vh", overflowY: "auto" }}
                  >
                    <div className="flex gap-8 p-8 flex-wrap">
                      {/* Display categories */}
                      {salesData.slice(0, 2).map((category, idx) => (
                        <div key={idx} className="w-1/4 flex flex-col">
                          <h3 className="font-semibold mb-4">
                            {category.title}
                          </h3>
                          <ul className="space-y-4 flex-1">
                            {category.items.map((item, index) => (
                              <li
                                key={index}
                                className="flex items-center space-x-4"
                              >
                                <Link to={item.link}>
                                  {" "}
                                  {/* Wrap each item in Link for navigation */}
                                  <div className="flex items-center space-x-4">
                                    <img
                                      src={item.image}
                                      alt={item.name}
                                      className="h-16 w-16 object-cover rounded"
                                    />
                                    <div>
                                      <p className="font-medium">{item.name}</p>
                                      <p className="text-gray-500">
                                        <span className="line-through">
                                          ${item.oldPrice}
                                        </span>{" "}
                                        <span className="text-pink-500 font-bold">
                                          ${item.newPrice}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {/* Combine Notebooks and Slider in the same column */}
                      <div className="w-1/4 flex flex-col">
                        {/* Notebooks category */}
                        <div className="flex-1">
                          <h3 className="font-semibold mb-4">
                            {salesData[2].title}
                          </h3>
                          <ul className="space-y-4">
                            {salesData[2].items.map((item, index) => (
                              <li
                                key={index}
                                className="flex items-center space-x-4"
                              >
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="h-16 w-16 object-cover rounded"
                                />
                                <div>
                                  <p className="font-medium">{item.name}</p>
                                  <p className="text-gray-500">
                                    <span className="line-through">
                                      ${item.oldPrice}
                                    </span>{" "}
                                    <span className="text-pink-500 font-bold">
                                      ${item.newPrice}
                                    </span>
                                  </p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* SliderForNav in the same column */}
                      </div>
                      <div className="mt-8">
                        <SliderForNav />
                      </div>
                    </div>
                  </ul>
                )}
              </div>
            </div>

            <Link to="/snapdeal" className="hover:text-pink-500">
              Snap Deal
            </Link>
            <div>
              {/* "Shop by Category" Link */}
              <div className="relative">
                <Link
                  to="#"
                  className="hover:text-pink-500 flex items-center"
                  onClick={toggleCategoryDropdown}
                >
                  Shop by Category
                  {/* Display Chevron icon based on dropdown state */}
                  {isCategoryDropdownOpen ? (
                    <FaChevronUp className="ml-2 transition-transform duration-200" />
                  ) : (
                    <FaChevronDown className="ml-2 transition-transform duration-200" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {isCategoryDropdownOpen && (
                  <div
                    ref={categoryDropdownRef}
                    className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10"
                  >
                    <ul className="flex w-screen pt-5 bg-white lg:-ml-[850px]">
                      <div className="flex px-28 justify-between w-screen">
                        {/* Category 1 */}
                        <div className="space-y-1">
                          <h3 className="text-md border-b-[3px] pb-2 mb-2">
                            {" "}
                            Shop mini plush
                          </h3>

                          <Link
                            to="/riceboo"
                            onClick={() => setIsCategoryDropdownOpen(false)}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                          <Link
                            to="/riceboo"
                            onClick={() => setIsCategoryDropdownOpen(false)}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                          <Link
                            to="/riceboo"
                            onClick={() => setIsCategoryDropdownOpen(false)}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                          <Link
                            to="/riceboo"
                            onClick={() => setIsCategoryDropdownOpen(false)}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                        </div>

                        {/* Category 2 */}
                        <div>
                          <h3 className="text-md border-b-[3px] pb-2 mb-2">
                            {" "}
                            Shop face masks
                          </h3>
                          <Link
                            to="/riceboo"
                            onClick={() => setIsCategoryDropdownOpen(false)}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                          <Link
                            to="/riceboo"
                            onClick={() => setIsCategoryDropdownOpen(false)}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                          <Link
                            to="/riceboo"
                            onClick={() => setIsCategoryDropdownOpen(false)}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                          <Link
                            to="/riceboo"
                            onClick={() => setIsCategoryDropdownOpen(false)}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                        </div>

                        {/* Category 3 */}
                        <div>
                          <h3 className="text-md border-b-[3px] pb-2 mb-2">
                            {" "}
                            Shop water bottles{" "}
                          </h3>
                          <Link
                            to="/riceboo"
                            onClick={() => setIsCategoryDropdownOpen(false)}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                          <Link
                            to="/riceboo"
                            onClick={() => setIsCategoryDropdownOpen(false)}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                          <Link
                            to="/riceboo"
                            onClick={() => setIsCategoryDropdownOpen(false)}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                          <Link
                            to="/riceboo"
                            onClick={() => setIsCategoryDropdownOpen(false)}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                        </div>

                        {/* Category 4 */}
                        <div>
                          <h3 className="text-md border-b-[3px] pb-2 mb-2">
                            {" "}
                            Shop stickers{" "}
                          </h3>
                          <Link
                            to="/riceboo"
                            onClick={() => setIsCategoryDropdownOpen(false)}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                          <Link
                            to="/riceboo"
                            onClick={() => setIsCategoryDropdownOpen(false)}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                          <Link
                            to="/riceboo"
                            onClick={() => setIsCategoryDropdownOpen(false)}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                          <Link
                            to="/riceboo"
                            onClick={() => setIsCategoryDropdownOpen(false)}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                        </div>
                      </div>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            {/* "Resources" Dropdown */}
            <div className="relative ">
              <Link
                to="#"
                className="hover:text-pink-500 flex items-center"
                onClick={toggleResourcesDropdown}
              >
                Resources
                {isResourcesDropdownOpen ? (
                  <FaChevronUp className="ml-2 transition-transform duration-200" />
                ) : (
                  <FaChevronDown className="ml-2 transition-transform duration-200" />
                )}
              </Link>

              {isResourcesDropdownOpen && (
                <div
                  ref={resourcesDropdownRef}
                  className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10"
                >
                  <ul>
                    <li onClick={closeDropdownOnClick}>
                      <Link
                        to="/blogs"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Blogs
                      </Link>
                    </li>
                    <li onClick={closeDropdownOnClick}>
                      <Link
                        to="/aboutus"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        About Us
                      </Link>
                    </li>
                    <li onClick={closeDropdownOnClick}>
                      <Link
                        to="/contact"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Icons for lg screens */}
          <div className="hidden lg:flex items-center  space-x-4">
            <button className="relative bg-gray-100 rounded hover:bg-gray-200">
              <FiShoppingCart
                className="text-gray-600"
                size={24}
                onClick={toggleCart}
              />
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] rounded-full p-1">
                15
              </span>
            </button>

            <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">
              <FiUser className="text-gray-600" size={24} />
            </button>
          </div>
        </div>
      </nav>

      <div>
      {/* Mobile Menu for sm screens */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white shadow-lg px-6 py-4">
          <Link to="/#" className="block py-2 hover:text-pink-500" onClick={closeMobileMenu}>
            Home
          </Link>
          <div
              className="relative cursor-pointer"
              onClick={toggleDropdown}
              ref={dropdownRef}
            >
              <span className="hover:underline underline-offset-1 flex gap-4 items-center">
                Catalog{" "}
                {isCatalogDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}{" "}
              </span>

              {isCatalogDropdownOpen && (
                <ul className=" z-50 lg:w-[1550px] mt-5   bg-white text-black text-sm rounded shadow-lg">
                  <div className="  ">
                    {/* First Row: Images */}
                    <div className="grid grid-cols-3 space-x-1 justify-start">
                      {[pic1, pic2, pic3, pic4, pic5, pic6].map(
                        (pic, index) => (
                          <div
                            key={index}
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent closing dropdown when clicking on an image
                              setSelectedItem(index + 1);
                            }}
                            className={`cursor-pointer hover:shadow-lg text-center ${
                              selectedItem === index + 1
                                ? "border border-pink-500"
                                : ""
                            }`}
                          >
                            <img
                              src={pic}
                              alt={"Item ${index + 1}"}
                              className="h-20 w-20 mx-auto"
                            />
                            <span className="block mt-2 font-semibold">
                              {
                                [
                                  "Mini Plush",
                                  "Notebook",
                                  "Face Masks",
                                  "Accessories",
                                  "Little Lights",
                                  "Stickers",
                                ][index]
                              }
                            </span>
                          </div>
                        )
                      )}
                    </div>

                    <div className="w-full  space-x-4 mt-6 ">
                      {/* Second Row: Dynamic List and Banner Images */}
                      <div className=" items-center space-x-4">
                        {selectedItem && (
                          <div>
                            {/* Display the selected item name dynamically */}
                            <h1 className="text-md font-semibold mb-4">
                              {itemNames[selectedItem - 1]}
                            </h1>

                            {/* List of items */}
                            <div className=" flex space-x-3 ">
                              <div className=" space-y-2">
                                {listData[selectedItem]
                                  .slice(0, 5)
                                  .map((item, idx) => (
                                    <li
                                    key={idx}
                                    className="list-none hover:text-pink-500 cursor-pointer"
                                    onClick={() => {
                                      closeMobileMenu(); // Close mobile menu on item click
                                    }}
                                  >
                                      <Link
                                        to={item.link}
                                        className="hover:text-pink-500"
                                      >
                                        {item.name}
                                      </Link>
                                    </li>
                                  ))}
                              </div>
                              <div className=" space-y-2">
                                {listData[selectedItem]
                                  .slice(5, 10)
                                  .map((item, idx) => (
                                    <li
                                    key={idx}
                                    className="list-none hover:text-pink-500 cursor-pointer"
                                    onClick={() => {
                                      closeMobileMenu(); // Close mobile menu on item click
                                    }}
                                  >
                                      <Link
                                        to={item.link}
                                        className="hover:text-pink-500"
                                      >
                                        {item.name}
                                      </Link>
                                    </li>
                                  ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      {/* Banner Images */}
                    
                  
                    </div>
                  </div>
                </ul>
              )}
            </div>
            <div className="mt-3">
  <div
    className="relative cursor-pointer"
    onClick={() => setIsSalesDropdownOpen((prev) => !prev)}
  >
    <span className="hover:underline flex gap-4 items-center">
      Flash Sales{" "}
      {isSalesDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}{" "}
    </span>
    {isSalesDropdownOpen && (
      <ul
        ref={dropdownRef}
        className="z-50 left-0 lg:-left-[450px] mt-5 lg:w-screen bg-white text-black text-sm rounded shadow-lg"
        style={{ height: "50vh", overflowY: "auto" }}
      >
        <div className="space-y-2 flex-wrap">
          {/* Display categories */}
          {salesData.slice(0, 2).map((category, idx) => (
            <div key={idx} className="flex flex-col">
              <h3 className="font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-4 flex-1">
                {category.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-4"
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on item click
                  >
                    <Link to={item.link}>
                      {/* Wrap each item in Link for navigation */}
                      <div className="flex items-center space-x-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-16 w-16 object-cover rounded"
                        />
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-gray-500">
                            <span className="line-through">${item.oldPrice}</span>{" "}
                            <span className="text-pink-500 font-bold">
                              ${item.newPrice}
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Combine Notebooks and Slider in the same column */}
          <div className="flex flex-col">
            {/* Notebooks category */}
            <div className="flex-1">
              <h3 className="font-semibold mb-4">{salesData[2].title}</h3>
              <ul className="space-y-4">
                {salesData[2].items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-4"
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on item click
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-gray-500">
                        <span className="line-through">${item.oldPrice}</span>{" "}
                        <span className="text-pink-500 font-bold">
                          ${item.newPrice}
                        </span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ul>
    )}
  </div>
</div>

          <Link to="/snapdeal" className="block py-2 hover:text-pink-500" onClick={closeMobileMenu}>
            Snap Deal
          </Link>
          <div>
              {/* "Shop by Category" Link */}
              <div className="relative">
                <Link
                  to="#"
                  className="hover:text-pink-500 flex items-center"
                  onClick={toggleCategoryDropdown}
                >
                  Shop by Category
                  {/* Display Chevron icon based on dropdown state */}
                  {isCategoryDropdownOpen ? (
                    <FaChevronUp className="ml-2 transition-transform duration-200" />
                  ) : (
                    <FaChevronDown className="ml-2 transition-transform duration-200" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {isCategoryDropdownOpen && (
                  <div
                    ref={categoryDropdownRef}
                    className=" left-0 mt-2  bg-white shadow-lg rounded-lg z-10"
                  >
                    <ul className="w-screen pt-5 bg-white lg:-ml-[850px]">
                      <div className=" justify-between w-screen">
                        {/* Category 1 */}
                        <div className="space-y-1">
                        <h3 className="text-md border-y-[3px] py-2 my-2">
                            {" "}
                            Shop mini plush
                          </h3>

                          <Link
                            to="/riceboo"
                            onClick={() => {
                              closeMobileMenu();
                              setIsCategoryDropdownOpen(false);
                            }}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                          <Link
                            to="/riceboo"
                            onClick={() => {
                              closeMobileMenu();
                              setIsCategoryDropdownOpen(false);
                            }}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                          <Link
                            to="/riceboo"
                            onClick={() => {
                              closeMobileMenu();
                              setIsCategoryDropdownOpen(false);
                            }}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                          <Link
                            to="/riceboo"
                            onClick={() => {
                              closeMobileMenu();
                              setIsCategoryDropdownOpen(false);
                            }}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                        </div>

                        {/* Category 2 */}
                        <div>
                        <h3 className="text-md border-y-[3px] py-2 my-2">
                            {" "}
                            Shop face masks
                          </h3>
                          <Link
                            to="/riceboo"
                            onClick={() => {
                              closeMobileMenu();
                              setIsCategoryDropdownOpen(false);
                            }}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                          <Link
                            to="/riceboo"
                            onClick={() => {
                              closeMobileMenu();
                              setIsCategoryDropdownOpen(false);
                            }}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                          <Link
                            to="/riceboo"
                            onClick={() => {
                              closeMobileMenu();
                              setIsCategoryDropdownOpen(false);
                            }}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                          <Link
                            to="/riceboo"
                            onClick={() => {
                              closeMobileMenu();
                              setIsCategoryDropdownOpen(false);
                            }}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                        </div>

                        {/* Category 3 */}
                        <div>
                          <h3 className="text-md border-y-[3px] py-2 my-2">
                            {" "}
                            Shop water bottles{" "}
                          </h3>
                          <Link
                            to="/riceboo"
                            onClick={() => {
                              closeMobileMenu();
                              setIsCategoryDropdownOpen(false);
                            }}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                          <Link
                            to="/riceboo"
                            onClick={() => {
                              closeMobileMenu();
                              setIsCategoryDropdownOpen(false);
                            }}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                          <Link
                            to="/riceboo"
                            onClick={() => {
                              closeMobileMenu();
                              setIsCategoryDropdownOpen(false);
                            }}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                          <Link
                            to="/riceboo"
                            onClick={() => {
                              closeMobileMenu();
                              setIsCategoryDropdownOpen(false);
                            }}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                        </div>

                        {/* Category 4 */}
                        <div>
                        <h3 className="text-md border-y-[3px] py-2 my-2">
                            {" "}
                            Shop stickers{" "}
                          </h3>
                          <Link
                            to="/riceboo"
                            onClick={() => {
                              closeMobileMenu();
                              setIsCategoryDropdownOpen(false);
                            }}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                          <Link
                            to="/riceboo"
                            onClick={() => {
                              closeMobileMenu();
                              setIsCategoryDropdownOpen(false);
                            }}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                          <Link
                            to="/riceboo"
                            onClick={() => {
                              closeMobileMenu();
                              setIsCategoryDropdownOpen(false);
                            }}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                          <Link
                            to="/riceboo"
                            onClick={() => {
                              closeMobileMenu();
                              setIsCategoryDropdownOpen(false);
                            }}
                          >
                            <li> Riceboo Mini Plush Toy</li>
                          </Link>
                        </div>
                      </div>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          <div className="relative mt-4">
            {/* "Resources" Dropdown */}
            <Link
              to="#"
              className="hover:text-pink-500 flex items-center"
              onClick={(e) => {
                e.preventDefault(); // Prevent default link behavior
                toggleResourcesDropdown();
              }}
            >
              Resources
              {isResourcesDropdownOpen ? (
                <FaChevronUp className="ml-2 transition-transform duration-200" />
              ) : (
                <FaChevronDown className="ml-2 transition-transform duration-200" />
              )}
            </Link>

            {isResourcesDropdownOpen && (
              <div
                ref={resourcesDropdownRef}
                className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10"
              >
                <ul>
                  <li onClick={closeMobileMenu}>
                    <Link
                      to="/blogs"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li onClick={closeMobileMenu}>
                    <Link
                      to="/aboutus"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      About Us
                    </Link>
                  </li>
                  <li onClick={closeMobileMenu}>
                    <Link
                      to="/contact"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>

      {/* Search Section */}
      {!hideSearchSection && (
        <div className="bg-gray-100 py-3 px-6">
          <div className="max-w-7xl mx-auto flex items-center">
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 hidden sm:flex items-center">
              <HiOutlineDotsCircleHorizontal size={20} />
              <span className="ml-2">New Arrival</span>
            </button>
            <div className="relative flex-1 mx-4">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full py-2 pl-10 pr-4 rounded border focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <FiSearch
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

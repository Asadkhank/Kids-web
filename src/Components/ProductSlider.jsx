import React, { useState } from "react";
import RicepuddingLittleLight1 from "../assets/RicepuddingLittleLight1.webp";
import Strawberry from "../assets/RicewebbyMiniPlushToy1 (1).webp";

const products = [
  {
    id: 1,
    name: "Rabbitly Little Light",
    note: "noodoll",
    price: "$38.00",
    salePrice: "$30.00",
    saveAmount: "$8.00",
    inStock: true,
    images: {
      pink: RicepuddingLittleLight1,
      blue: Strawberry,
    },
    colors: ["pink", "blue"],
    sizes: ["Small",  "Large"],
  },
  {
    id: 2,
    name: "Rabbitly Little Light",
    note: "noodoll",
    price: "$38.00",
    salePrice: "$30.00",
    saveAmount: "$8.00",
    inStock: true,
    images: {
      pink: RicepuddingLittleLight1,
      blue: Strawberry,
    },
    colors: ["pink", "blue"],
    sizes: ["Small",  "Large"],
  },
  {
    id: 3,
    name: "Rabbitly Little Light",
    note: "noodoll",
    price: "$38.00",
    salePrice: "$30.00",
    saveAmount: "$8.00",
    inStock: true,
    images: {
      pink: RicepuddingLittleLight1,
      blue: Strawberry,
    },
    colors: ["pink", "blue"],
    sizes: ["Small",  "Large"],
  },
  {
    id: 4,
    name: "Rabbitly Little Light",
    note: "noodoll",
    price: "$38.00",
    salePrice: "$30.00",
    saveAmount: "$8.00",
    inStock: true,
    images: {
      pink: RicepuddingLittleLight1,
      blue: Strawberry,
    },
    colors: ["pink", "blue"],
    sizes: ["Small",  "Large"],
  },
 
];

const ProductSlider = () => {
  return (
    <div className="p-8 ">
      <h2 className="text-2xl font-bold text-center mb-4">Related Products</h2>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(Object.keys(product.images)[0]);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="border rounded-lg p-4 shadow-sm flex flex-col justify-between">
      {/* Product Image */}
      <img
        src={product.images[selectedColor]}
        alt={product.name}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />

      {/* Conditional Content */}
      {!isAddedToCart ? (
        <>
          {/* Product Colors */}
          <div className="flex space-x-2 mb-4">
            {product.colors.map((color) => (
              <button
                key={color}
                className={`w-4 h-4 rounded ${selectedColor === color ? "ring-2 ring-black" : ""}`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              ></button>
            ))}
          </div>

          {/* Save Amount and Stock */}
          <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
            <span>{product.saveAmount}</span>
            <span>{product.inStock ? "In stock" : "Out of stock"}</span>
          </div>

          {/* Product Info */}
          <div className="flex space-x-2 items-center mb-4">
            <span className="text-gray-500 line-through">{product.price}</span>
            <span className="text-red-500 font-bold">{product.salePrice}</span>
          </div>
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-400 italic mb-2">{product.note}</p>
        </>
      ) : (
        <>
          {/* Save and Stock */}
          <div className="flex justify-between text-gray-500 text-sm mb-4">
            <p className="font-bold">{product.saveAmount}</p>
            <p className="font-bold">{product.inStock ? "In stock" : "Out of stock"}</p>
          </div>

          {/* Price and Sale Price */}
          <div className="flex justify-between items-center mb-4 text-sm">
            <span className="line-through text-gray-400">{product.price}</span>
            <span className="text-red-500 font-bold">{product.salePrice}</span>
          </div>

          {/* Product Colors */}
          <div className="flex justify-between mb-4">
            <h4 className="text-gray-600 mb-2">Colors:</h4>
            <div className="flex  space-x-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className={`w-4 h-4 rounded ${selectedColor === color ? "ring-2 ring-black" : ""}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                ></button>
              ))}
            </div>
          </div>

          {/* Product Sizes */}
          <div className="flex justify-between">
            <h4 className="text-gray-600 mb-2">Sizes:</h4>
            <div className="flex space-x-2">
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className="px-2 py-1 border border-gray-300 rounded text-sm"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Quick Add / Add to Cart */}
      <div className="mt-4 flex items-center justify-between">
  
  {/* Counter */}
  {isAddedToCart && (
    
    <div className="flex items-center space-x-2">
      <button
        onClick={decrement}
        className="px-2 py-1 border border-gray-300 rounded-md text-sm"
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        onClick={increment}
        className="px-2 py-1 border border-gray-300 rounded-md text-sm"
      >
        +
      </button>
    </div>
  )}

  {/* Add to Cart Button (Fixed to the right) */}
  <button
    onClick={() => {
      setIsAddedToCart(!isAddedToCart);
      if (!isAddedToCart) setQuantity(1); // Reset quantity on adding to cart
    }}
    className="ml-auto text-sm bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg"
  >
    {isAddedToCart ? "Remove" : "Quick Add"}
  </button>
</div>

    </div>
  );
};

export default ProductSlider;

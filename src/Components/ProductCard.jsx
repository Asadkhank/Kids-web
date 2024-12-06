const ProductCard = ({ product }) => {
  const dispatch = useDispatch(); // Initialize Redux dispatch
  const [selectedColor, setSelectedColor] = useState(Object.keys(product.images)[0]);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    if (!isAddedToCart) {
      dispatch(
        addToCart({
          id: product.id,
          name: product.name,
          color: selectedColor,
          quantity,
          price: product.salePrice,
        })
      );
    }
    setIsAddedToCart(!isAddedToCart); // Toggle the button state
  };

  return (
    <div className="border rounded-lg p-4 shadow-sm flex flex-col justify-between">
      {/* Product Image */}
      <img
        src={product.images[selectedColor]}
        alt={product.name}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />

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

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="ml-auto text-sm bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg"
        >
          {isAddedToCart ? "Remove" : "Quick Add"}
        </button>
      </div>
    </div>
  );
};

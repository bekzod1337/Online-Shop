import { useEffect, useState } from "react";

const ProductCard = ({ product, onOrder }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const checkTheme = () => {
      setDarkMode(localStorage.getItem("theme") === "dark");
    };

    // LocalStorage o‘zgarganda dark mode ni o'zgartirish
    window.addEventListener("storage", checkTheme);

    return () => {
      window.removeEventListener("storage", checkTheme);
    };
  }, []);

  return (
    <div
      className={`max-w-64 bg-gray-100 border-gray-200 border rounded-lg shadow-lg transition-transform duration-300 ease-out hover:translate-y-[-10px] hover:shadow-xl dark:text-white dark:bg-gray-900 dark:border-gray-700 ${
        darkMode ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-100 border-gray-200 text-gray-900"
      }`}
    >
      {/* Rasm konteyneri */}
      <div className="w-full h-44 overflow-hidden rounded-t-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 rounded-t-lg"
        />
      </div>

      {/* Matn qismi */}
      <div className="flex flex-col items-center text-center p-4">
        <h1 className="text-lg font-semibold">{product.name}</h1>
        <p className={`text-sm my-2 dark:text-gray-300 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
          {product.description}
        </p>
        <strong className={`text-md self-end mr-4 dark:text-gray-300 ${darkMode ? "text-gray-300" : "text-gray-800"}`}>
          {product.price}$
        </strong>
        <button
          onClick={() => onOrder(product)}
          className={`mt-4 w-full py-2 rounded-lg transition-all duration-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 ${
            darkMode ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-900 text-white hover:bg-gray-700"
          }`}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

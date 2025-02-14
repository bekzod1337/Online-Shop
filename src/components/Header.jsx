import Logo from "../images/logo.png";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Mobil menyu uchun ikonlar
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex fixed top-0 left-0 right-0 z-[999999999] justify-between items-center px-6 md:px-16 py-4 bg-gray-300 dark:bg-gray-900 text-gray-900 dark:text-white shadow-md transition-all">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <img src={Logo} alt="BekMarket Logo" className="w-12 md:w-16 h-12 md:h-16" />
      </div>

      {/* Navbar - Mobil versiyada ham ko'rinadigan qilib tuzatildi */}
      <nav className="hidden md:flex">
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-blue-600 dark:hover:text-gray-400 transition">Asosiy</a></li>
          <li><a href="#" className="hover:text-blue-600 dark:hover:text-gray-400 transition">Mahsulotlar</a></li>
          <li><a href="#" className="hover:text-blue-600 dark:hover:text-gray-400 transition">Ma'lumot</a></li>
          <li><a href="#" className="hover:text-blue-600 dark:hover:text-gray-400 transition">Bog'lanish</a></li>
        </ul>
      </nav>

      {/* Mobil menyu tugmasi */}
      <button 
        className="md:hidden text-2xl" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobil menyu */}
      {isMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-gray-300 dark:bg-gray-900 shadow-md md:hidden">
          <ul className="flex flex-col space-y-4 py-4 text-center">
            <li><a href="#" className="block py-2 hover:text-blue-600 dark:hover:text-gray-400 transition">Asosiy</a></li>
            <li><a href="#" className="block py-2 hover:text-blue-600 dark:hover:text-gray-400 transition">Mahsulotlar</a></li>
            <li><a href="#" className="block py-2 hover:text-blue-600 dark:hover:text-gray-400 transition">Ma'lumot</a></li>
            <li><a href="#" className="block py-2 hover:text-blue-600 dark:hover:text-gray-400 transition">Bog'lanish</a></li>
          </ul>
        </nav>
      )}

      {/* Search Input - Faqat mobil versiyada yashirin */}
      
      <div className="hidden md:block">
      
        <input 
          type="text" 
          placeholder="Search..." 
          className="px-3 py-2 w-52 text-gray-900 dark:text-white border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-gray-500 transition"
        />
      </div>
      <DarkModeToggle />
    </header>
  );
};

export default Header;

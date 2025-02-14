import { useState } from "react";
import { FaHome, FaUser, FaShoppingCart, FaCog, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop & Tablet Sidebar */}
      <aside className="hidden md:flex min-w-20 pt-24 z-[99] h-screen bg-gray-300 dark:bg-gray-900 text-gray-900 dark:text-white fixed left-0 top-0 flex-col items-center py-6 shadow-lg transition-all">
        {/* Yuqori menyular */}
        <div className="flex flex-col space-y-6 mt-6">
          <button aria-label="Home" className="hover:text-blue-500 dark:hover:text-gray-400 transition">
            <FaHome size={24} />
          </button>
          <button aria-label="Profile" className="hover:text-blue-500 dark:hover:text-gray-400 transition">
            <FaUser size={24} />
          </button>
          <button aria-label="Cart" className="hover:text-blue-500 dark:hover:text-gray-400 transition">
            <FaShoppingCart size={24} />
          </button>
          <button aria-label="Settings" className="hover:text-blue-500 dark:hover:text-gray-400 transition">
            <FaCog size={24} />
          </button>
        </div>

        {/* Dark Mode va Logout tugmalari */}
        <div className="mt-auto mb-6 flex flex-col items-center space-y-4">
          <DarkModeToggle className="hidden md:block" /> {/* Desktop uchun */}
          <button aria-label="Logout" className="hover:text-red-500 dark:hover:text-red-400 transition">
            <FaSignOutAlt size={24} />
          </button>
        </div>
      </aside>

      {/* Mobil menyu tugmasi */}
      <div className="md:hidden fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white p-4 rounded-full shadow-lg cursor-pointer z-50" onClick={() => setIsOpen(true)}>
        <FaBars size={24} />
      </div>

      {/* Mobil menyu modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-4/5 max-w-sm text-center relative">
            <button className="absolute top-3 right-3 text-gray-600 dark:text-gray-400 hover:text-red-500" onClick={() => setIsOpen(false)}>
              <FaTimes size={24} />
            </button>
            <div className="flex flex-col space-y-6 mt-6">
              <button className="text-lg flex items-center justify-center gap-2 hover:text-blue-500 dark:hover:text-gray-400 transition">
                <FaHome size={20} /> Home
              </button>
              <button className="text-lg flex items-center justify-center gap-2 hover:text-blue-500 dark:hover:text-gray-400 transition">
                <FaUser size={20} /> Profile
              </button>
              <button className="text-lg flex items-center justify-center gap-2 hover:text-blue-500 dark:hover:text-gray-400 transition">
                <FaShoppingCart size={20} /> Cart
              </button>
              <button className="text-lg flex items-center justify-center gap-2 hover:text-blue-500 dark:hover:text-gray-400 transition">
                <FaCog size={20} /> Settings
              </button>
              {/* Mobil menyuda Dark Mode tugmasi */}
              <button>
              <DarkModeToggle className="flex-grow  md:hidden sm:hidden" /> Dark Mode
              </button>
              <button className="text-lg flex items-center justify-center gap-2 text-red-500 hover:text-red-400 transition">
                <FaSignOutAlt size={20} /> Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;

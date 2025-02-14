import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { motion, AnimatePresence } from "framer-motion";
import "leaflet/dist/leaflet.css";

const OrderModal = ({ isOpen, product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [position, setPosition] = useState([41.2995, 69.2401]); // Default: Toshkent
  const [address, setAddress] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  function LocationMarker() {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
        setAddress(`Lat: ${e.latlng.lat.toFixed(5)}, Lng: ${e.latlng.lng.toFixed(5)}`);
      },
    });
    return <Marker position={position} />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  useEffect(() => {
    if (!isOpen) setShowAlert(false);
  }, [isOpen]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm z-50 p-4">
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white w-full max-w-sm md:max-w-4xl md:flex rounded-lg shadow-lg overflow-hidden transition-transform duration-300 scale-100 max-h-[90vh] md:max-h-[70vh] ml-auto mr-auto">
        
        {/* Mahsulot rasmi */}
        <div className="md:w-1/2 w-full flex justify-center items-center bg-gray-100 dark:bg-gray-700 relative p-4 md:p-0">
          <img src={product.image} alt={product.name} className="w-full max-h-40 md:max-h-full object-contain" />
        </div>

        {/* Ma'lumot qismi */}
        <div className="md:w-1/2 w-full p-4 md:p-6 flex flex-col gap-3 relative">
          <button className="absolute top-3 right-3 text-2xl hover:text-red-500 transition" onClick={onClose}>&times;</button>
          
          <h2 className="text-lg md:text-xl font-bold text-center md:text-left">Buyurtma qilish</h2>
          <p className="text-center md:text-left">Siz tanlagan mahsulot: <strong>{product.name}</strong></p>
          
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <input type="text" placeholder="Ismingiz" className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required />
            <input type="text" placeholder="Telefon raqamingiz" className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required />
            
            {/* Xarita */}
            <p className="text-sm text-gray-500 dark:text-gray-400">Xaritadan joy tanlang:</p>
            <div className="w-full h-32 md:h-40 rounded-md overflow-hidden border dark:border-gray-600">
              <MapContainer center={position} zoom={12} className="h-full w-full">
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <LocationMarker />
              </MapContainer>
            </div>
            
            {/* Tanlangan joy */}
            <input type="text" value={address} readOnly className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
            
            {/* Mahsulot soni */}
            <div className="flex items-center justify-between border p-2 rounded-md dark:border-gray-600">
              <button type="button" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} className="px-4 py-2 bg-red-500 text-white rounded-md">-</button>
              <span className="text-lg font-bold">{quantity}</span>
              <button type="button" onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 bg-green-500 text-white rounded-md">+</button>
            </div>
            
            {/* Yuborish tugmasi */}
            <button type="submit" className="bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition">Yuborish</button>
          </form>
        </div>
      </div>
      
      {/* ✅ Alert - Animatsiya bilan */}
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 50, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-10 left-1/1 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg z-50"
          >
            ✅ Buyurtmangiz qabul qilindi! Siz bilan tez orada bog‘lanamiz.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OrderModal;
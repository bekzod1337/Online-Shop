import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProductList from "./components/ProductList";
import OrderModal from "./components/OrderModal";
import Footer from "./components/Footer";
import { DarkModeProvider } from "./context/DarkModeContext";
import DarkModeToggle from "./components/DarkModeToggle";
export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = [
    { name: "NIKE", image: "./src/images/snicers/1.jpeg", description: "Ajoyib sport krossovkalar", price: 70 },
    { name: "NIKE", image: "./src/images/snicers/2.jpeg", description: "Yuqori sifatli sport oyoq kiyim", price: 80 },
    { name: "NIKE", image: "./src/images/snicers/3.jpg", description: "Qulay va zamonaviy dizayn", price: 75 },
    { name: "NIKE", image: "./src/images/snicers/4.jpg", description: "Qulay va zamonaviy dizayn", price: 75 },
    { name: "NIKE", image: "./src/images/snicers/5.jpg", description: "Qulay va zamonaviy dizayn", price: 75 },
    { name: "NIKE", image: "./src/images/snicers/6.jpg", description: "Qulay va zamonaviy dizayn", price: 75 },
    { name: "NIKE", image: "./src/images/snicers/3.jpg", description: "Qulay va zamonaviy dizayn", price: 75 },
    { name: "NIKE", image: "./src/images/snicers/4.jpg", description: "Qulay va zamonaviy dizayn", price: 75 },
    { name: "NIKE", image: "./src/images/snicers/5.jpg", description: "Qulay va zamonaviy dizayn", price: 75 },
    { name: "NIKE", image: "./src/images/snicers/6.jpg", description: "Qulay va zamonaviy dizayn", price: 75 },
  ];

  return (
    <div className="pt-28">
      <DarkModeProvider>
      {/* <Sidebar /> */}
      <Header />
      
      <div>
        <ProductList products={products} onOrder={setSelectedProduct} />
      </div>
      <OrderModal isOpen={!!selectedProduct} product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      <Footer />
      </DarkModeProvider>
    </div>
  );
}

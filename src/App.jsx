import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProductList from "./components/ProductList";
import OrderModal from "./components/OrderModal";
import Footer from "./components/Footer";
import { DarkModeProvider } from "./context/DarkModeContext";
import DarkModeToggle from "./components/DarkModeToggle";
import { Img1, Img2, Img3, Img4, Img5, Img6 } from "./images";
export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = [
    { name: "NIKE", image: `${Img1}`, description: "Ajoyib sport krossovkalar", price: 70 },
    { name: "NIKE", image: `${Img2}`, description: "Yuqori sifatli sport oyoq kiyim", price: 80 },
    { name: "NIKE", image: `${Img3}`, description: "Qulay va zamonaviy dizayn", price: 75 },
    { name: "NIKE", image: `${Img4}`, description: "Qulay va zamonaviy dizayn", price: 75 },
    { name: "NIKE", image: `${Img5}`, description: "Qulay va zamonaviy dizayn", price: 75 },
    { name: "NIKE", image: `${Img6}`, description: "Qulay va zamonaviy dizayn", price: 75 },
    { name: "NIKE", image: `${Img3}`, description: "Qulay va zamonaviy dizayn", price: 75 },
    { name: "NIKE", image: `${Img4}`, description: "Qulay va zamonaviy dizayn", price: 75 },
    { name: "NIKE", image: `${Img5}`, description: "Qulay va zamonaviy dizayn", price: 75 },
    { name: "NIKE", image: `${Img6}`, description: "Qulay va zamonaviy dizayn", price: 75 },
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

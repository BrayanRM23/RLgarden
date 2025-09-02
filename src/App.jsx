import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar"; // Sidebar de servicios
import GardensSidebar from "./components/GardensSidebar"; // Nuevo sidebar de jardines
import HeroLeft from "./components/HeroLeft";
import Carousel from "./components/Caroulsel";
import "./assets/styles.css";

export default function App() {
  // Estados para los dos sidebars
  const [servicesOpen, setServicesOpen] = useState(false);
  const [gardensOpen, setGardensOpen] = useState(false);

  return (
    <>
      <Navbar />

      {/* Sidebars */}
      <Sidebar isOpen={servicesOpen} onClose={() => setServicesOpen(false)} />
      <GardensSidebar isOpen={gardensOpen} onClose={() => setGardensOpen(false)} />

      <div className="container">
        <HeroLeft 
          onOpenServices={() => setServicesOpen(true)} 
          onOpenGardens={() => setGardensOpen(true)} 
        />
        <Carousel />
      </div>
    </>
  );
}



import { useState } from "react";
import "../assets/GardensSidebar.css"; // ✅ nuevo CSS independiente

const gardens = [
  { 
    id: 1,
    nombre: "Jardínes Acuaticos",
    imagenes: [
      "/images/acustico1.jpg",
      "/images/acustico2.jpg",
      "/images/acustico3.jpg",
      "/images/acustico4.jpg",
      "/images/acustico5.jpg",
      "/images/acustico6.jpg",
      "/images/acustico7.jpg",
      "/images/acustico8.jpg",
      "/images/acustico9.jpg",
    ],
    descripcion: "Minimalismo y serenidad con piedras y arena rastrillada."
  },
  { 
    id: 2,
    nombre: "Jardínes colgantes",
    imagenes: [
      "/images/colgante1.jpg",
      "/images/colgante2.jpg",
      "/images/colgante3.jpg",
      "/images/colgante4.jpg",
    ],
    descripcion: "Vegetación exuberante y colorida, con ambiente natural."
  },
  { 
    id: 3,
    nombre: "Jardín Vertical",
    imagenes: [
      "/images/vertical1.jpg",
      "/images/vertical2.jpg",
      "/images/vertical3.jpg",
      "/images/vertical4.jpg",
      "/images/acustico4.jpg",
    ],
    descripcion: "Ideal para espacios reducidos y muros verdes modernos."
  },
  { 
    id: 4,
    nombre: "Jardín de piedras decorativas",
    imagenes: [
      "/images/piedra1.jpg",
      "/images/piedra2.jpg",
      "/images/piedra3.jpg",
      "/images/piedra4.jpg",
      "/images/piedra5.jpg",
      "/images/piedra6.jpg",
      "/images/piedra7.jpg",
      "/images/piedra8.jpg",
      "/images/piedra9.jpg",
      "/images/piedra10.jpg",
      "/images/piedra11.jpg",
      "/images/piedra12.jpg",
      "/images/piedra13.jpg",
      "/images/piedra14.jpg",
    ],
    descripcion: "Diseños adaptados a casas y oficinas con luz controlada."
  },
  { 
    id: 5,
    nombre: "Jardínes en troncos",
    imagenes: [
      "/images/colgante2.jpg",
      "/images/colgante1.jpg",
      "/images/tronco1.jpg",
      "/images/tronco2.jpg",
      "/images/tronco3.jpg",
      "/images/tronco4.jpg",
      "/images/tronco5.jpg",
      "/images/troncote.jpg",
      "/images/tronco7.jpg",
    ],
    descripcion: "Diseños adaptados a casas y oficinas con luz controlada."
  },
  { 
    id: 6,
    nombre: "Jardínes de exteriores",
    imagenes: [
      "/images/fuera1.jpg",
      "/images/fuera2.jpg",
      "/images/fuera3.jpg",
      "/images/fuera4.jpg",
      "/images/fuera5.jpg",
      "/images/fuera6.jpg",
      "/images/fuera7.jpg",
      "/images/fuera8.jpg",
      "/images/fuera9.jpg",
      "/images/fuera10.jpg",
      "/images/fuera11.jpg",
      "/images/fuera12.jpg",
      "/images/fuera13.jpg",
      "/images/fuera14.jpg",
      "/images/fuera15.jpg",
      "/images/fuera16.jpg",
      "/images/fuera17.jpg",
      "/images/fuera18.jpg",
      "/images/fuera19.jpg",
      "/images/fuera20.jpg",
      "/images/fuera21.jpg",
      "/images/fuera22.jpg",
      "/images/fuera23.jpg",
      "/images/fuera24.jpg",
      "/images/fuera25.jpg",
      "/images/fuera26.jpg",
      "/images/fuera27.jpg",
      "/images/fuera28.jpg",
      "/images/fuera29.jpg",
      "/images/fuera30.jpg",
      "/images/fuera31.jpg",
    ],
    descripcion: "Diseños adaptados a casas y oficinas con luz controlada."
  },
  { 
    id: 7,
    nombre: "Jardínes de Interiores",
    imagenes: [
      "/images/into1.jpg",
      "/images/into2.jpg",
      "/images/into3.jpg",
      "/images/into4.jpg",
      "/images/into5.jpg",
      "/images/into6.jpg",
      "/images/into7.jpg",
      "/images/into8.jpg",
      "/images/into9.jpg",
      "/images/into10.jpg",
      "/images/into11.jpg",
      "/images/into12.jpg",
      "/images/into13.jpg",
      "/images/into14.jpg",
      "/images/into15.jpg",
      "/images/into16.jpg",
      "/images/into17.jpg",
      "/images/into18.jpg",
      "/images/into19.jpg",
      "/images/into20.jpg",
      "/images/into21.jpg",
      "/images/into22.jpg",
      "/images/into23.jpg",
      "/images/into24.jpg",
      "/images/into25.jpg",
    ],
    descripcion: "Diseños adaptados a casas y oficinas con luz controlada."
  },
];

export default function GardensSidebar({ isOpen, onClose }) {
  const [selectedGarden, setSelectedGarden] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    if (!selectedGarden) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedGarden.imagenes.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    if (!selectedGarden) return;
    setCurrentImageIndex((prev) =>
      prev === selectedGarden.imagenes.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className={`gardens-sidebar ${isOpen ? "active" : ""}`}>
      <div className="gardens-sidebar-header">
        <h2>Tipos de Jardines</h2>
        <button className="gardens-close-btn" onClick={onClose}>✖</button>
      </div>

      <div className="gardens-grid">
        {gardens.map((garden) => (
          <div 
            key={garden.id} 
            className="gardens-card" 
            onClick={() => {
              setSelectedGarden(garden);
              setCurrentImageIndex(0); // reset al abrir
            }}
          >
            <img src={garden.imagenes[0]} alt={garden.nombre} />
            <h3>{garden.nombre}</h3>
          </div>
        ))}
      </div>

      {selectedGarden && (
        <div className="gardens-modal-overlay" onClick={() => setSelectedGarden(null)}>
          <div className="gardens-modal-content" onClick={(e) => e.stopPropagation()}>
            
            {/* Botón cerrar arriba */}
            <button 
              className="gardens-modal-close"
              onClick={() => setSelectedGarden(null)}
            >
              ✖
            </button>

            {/* Carrusel */}
            <div className="gardens-carousel-container">
              <button className="gardens-carousel-btn left" onClick={handlePrev}>❮</button>
              <img 
                src={selectedGarden.imagenes[currentImageIndex]} 
                alt={`${selectedGarden.nombre} imagen ${currentImageIndex + 1}`} 
              />
              <button className="gardens-carousel-btn right" onClick={handleNext}>❯</button>
            </div>

            <h2>{selectedGarden.nombre}</h2>
            <p>{selectedGarden.descripcion}</p>

            {/* Botón cerrar inferior */}
            <button className="gardens-modal-footer-btn" onClick={() => setSelectedGarden(null)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
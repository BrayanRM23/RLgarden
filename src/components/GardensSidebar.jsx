import { useState } from "react";
import "../assets/GardensSidebar.css"; // ✅ nuevo CSS independiente

const gardens = [
  { 
    id: 1,
    nombre: "Jardínes Acuaticos",
    imagenes: [
      "/public/images/acustico1.jpg",
      "/public/images/acustico2.jpg",
      "/public/images/acustico3.jpg",
      "/public/images/acustico4.jpg",
      "/public/images/acustico5.jpg",
      "/public/images/acustico6.jpg",
      "/public/images/acustico7.jpg",
      "/public/images/acustico8.jpg",
      "/public/images/acustico9.jpg",
    ],
    descripcion: "Minimalismo y serenidad con piedras y arena rastrillada."
  },
  { 
    id: 2,
    nombre: "Jardínes colgantes",
    imagenes: [
      "/public/images/colgante1.jpg",
      "/public/images/colgante2.jpg",
      "/public/images/colgante3.jpg",
      "/public/images/colgante4.jpg",
    ],
    descripcion: "Vegetación exuberante y colorida, con ambiente natural."
  },
  { 
    id: 3,
    nombre: "Jardín Vertical",
    imagenes: [
      "/public/images/vertical1.jpg",
      "/public/images/vertical2.jpg",
      "/public/images/vertical3.jpg",
      "/public/images/vertical4.jpg",
      "/public/images/acustico4.jpg",
    ],
    descripcion: "Ideal para espacios reducidos y muros verdes modernos."
  },
  { 
    id: 4,
    nombre: "Jardín de piedras decorativas",
    imagenes: [
      "/public/images/piedra1.jpg",
      "/public/images/piedra2.jpg",
      "/public/images/piedra3.jpg",
      "/public/images/piedra4.jpg",
      "/public/images/piedra5.jpg",
      "/public/images/piedra6.jpg",
      "/public/images/piedra7.jpg",
      "/public/images/piedra8.jpg",
      "/public/images/piedra9.jpg",
      "/public/images/piedra10.jpg",
      "/public/images/piedra11.jpg",
      "/public/images/piedra12.jpg",
      "/public/images/piedra13.jpg",
      "/public/images/piedra14.jpg",
    ],
    descripcion: "Diseños adaptados a casas y oficinas con luz controlada."
  },
  { 
    id: 5,
    nombre: "Jardínes en troncos",
    imagenes: [
      "/public/images/colgante2.jpg",
      "/public/images/colgante1.jpg",
      "/public/images/tronco1.jpg",
      "/public/images/tronco2.jpg",
      "/public/images/tronco3.jpg",
      "/public/images/tronco4.jpg",
      "/public/images/tronco5.jpg",
      "/public/images/troncote.jpg",
      "/public/images/tronco7.jpg",
    ],
    descripcion: "Diseños adaptados a casas y oficinas con luz controlada."
  },
  { 
    id: 6,
    nombre: "Jardínes de exteriores",
    imagenes: [
      "/public/images/fuera1.jpg",
      "/public/images/fuera2.jpg",
      "/public/images/fuera3.jpg",
      "/public/images/fuera4.jpg",
      "/public/images/fuera5.jpg",
      "/public/images/fuera6.jpg",
      "/public/images/fuera7.jpg",
      "/public/images/fuera8.jpg",
      "/public/images/fuera9.jpg",
      "/public/images/fuera10.jpg",
      "/public/images/fuera11.jpg",
      "/public/images/fuera12.jpg",
      "/public/images/fuera13.jpg",
      "/public/images/fuera14.jpg",
      "/public/images/fuera15.jpg",
      "/public/images/fuera16.jpg",
      "/public/images/fuera17.jpg",
      "/public/images/fuera18.jpg",
      "/public/images/fuera19.jpg",
      "/public/images/fuera20.jpg",
      "/public/images/fuera21.jpg",
      "/public/images/fuera22.jpg",
      "/public/images/fuera23.jpg",
      "/public/images/fuera24.jpg",
      "/public/images/fuera25.jpg",
      "/public/images/fuera26.jpg",
      "/public/images/fuera27.jpg",
      "/public/images/fuera28.jpg",
      "/public/images/fuera29.jpg",
      "/public/images/fuera30.jpg",
      "/public/images/fuera31.jpg",
    ],
    descripcion: "Diseños adaptados a casas y oficinas con luz controlada."
  },
  { 
    id: 7,
    nombre: "Jardínes de Interiores",
    imagenes: [
      "/public/images/into1.jpg",
      "/public/images/into2.jpg",
      "/public/images/into3.jpg",
      "/public/images/into4.jpg",
      "/public/images/into5.jpg",
      "/public/images/into6.jpg",
      "/public/images/into7.jpg",
      "/public/images/into8.jpg",
      "/public/images/into9.jpg",
      "/public/images/into10.jpg",
      "/public/images/into11.jpg",
      "/public/images/into12.jpg",
      "/public/images/into13.jpg",
      "/public/images/into14.jpg",
      "/public/images/into15.jpg",
      "/public/images/into16.jpg",
      "/public/images/into17.jpg",
      "/public/images/into18.jpg",
      "/public/images/into19.jpg",
      "/public/images/into20.jpg",
      "/public/images/into21.jpg",
      "/public/images/into22.jpg",
      "/public/images/into23.jpg",
      "/public/images/into24.jpg",
      "/public/images/into25.jpg",
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
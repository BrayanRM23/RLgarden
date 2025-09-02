import { useState } from "react";
import "../assets/Sidebar.css";

const servicios = [
  { 
    id: 1, 
    nombre: "Jardinería", 
    img: "/public/images/jardin1.jpg",
    descripcion: "Servicio completo de jardinería, desde el diseño hasta el mantenimiento."
  },
  { 
    id: 2, 
    nombre: "Poda de árboles", 
    img: "/images/servicios/poda.jpg",
    descripcion: "Poda profesional para mantener la salud y estética de tus árboles."
  },
  { 
    id: 3, 
    nombre: "Paisajismo", 
    img: "/images/servicios/paisajismo.jpg",
    descripcion: "Diseño de paisajes únicos para jardines residenciales y empresariales."
  },
  { 
    id: 5, 
    nombre: "siembra y mantenimiento de prado", 
    img: "/images/servicios/paisajismo.jpg",
    descripcion: "Diseño de paisajes únicos para jardines residenciales y empresariales."
  },
  { 
    id: 6, 
    nombre: "mantenimiento de zonas verdes", 
    img: "/images/servicios/paisajismo.jpg",
    descripcion: "Diseño de paisajes únicos para jardines residenciales y empresariales."
  },
  { 
    id: 7, 
    nombre: "compensacion de arboles", 
    img: "/images/servicios/paisajismo.jpg",
    descripcion: "Diseño de paisajes únicos para jardines residenciales y empresariales."
  },
  { 
    id: 8, 
    nombre: "mantenimiento en unidades residenciales", 
    img: "/images/servicios/paisajismo.jpg",
    descripcion: "Diseño de paisajes únicos para jardines residenciales y empresariales."
  },
  { 
    id: 9, 
    nombre: "diseño de jardines", 
    img: "/images/servicios/paisajismo.jpg",
    descripcion: "Diseño de paisajes únicos para jardines residenciales y empresariales."
  },
  { 
    id: 10, 
    nombre: "venta de tierra abonada y fertilizantes organicos", 
    img: "/images/servicios/paisajismo.jpg",
    descripcion: "Diseño de paisajes únicos para jardines residenciales y empresariales."
  },
  { 
    id: 11, 
    nombre: "venta de plantas y palmas", 
    img: "/images/servicios/paisajismo.jpg",
    descripcion: "Diseño de paisajes únicos para jardines residenciales y empresariales."
  },
  { 
    id: 12, 
    nombre: "diseño de jardinez de interiores", 
    img: "/images/servicios/paisajismo.jpg",
    descripcion: "Diseño de paisajes únicos para jardines residenciales y empresariales."
  },{ 
    id: 13, 
    nombre: "construccion de jardines verticales", 
    img: "/images/servicios/paisajismo.jpg",
    descripcion: "Diseño de paisajes únicos para jardines residenciales y empresariales."
  },{ 
    id: 14, 
    nombre: "instalaciones de riegos automaticos", 
    img: "/images/servicios/paisajismo.jpg",
    descripcion: "Diseño de paisajes únicos para jardines residenciales y empresariales."
  },{ 
    id: 15, 
    nombre: "mantenimiento de arboles frutales", 
    img: "/images/servicios/paisajismo.jpg",
    descripcion: "Diseño de paisajes únicos para jardines residenciales y empresariales."
  },
  { 
    id: 16, 
    nombre: "fumigacion y fertilizacion", 
    img: "/images/servicios/paisajismo.jpg",
    descripcion: "Diseño de paisajes únicos para jardines residenciales y empresariales."
  },
  { 
    id: 17, 
    nombre: "poda y mantenimiento empresarial", 
    img: "/images/servicios/paisajismo.jpg",
    descripcion: "Diseño de paisajes únicos para jardines residenciales y empresariales."
  },
  { 
    id: 18, 
    nombre: "reflejo de fondo", 
    img: "/images/servicios/paisajismo.jpg",
    descripcion: "Diseño de paisajes únicos para jardines residenciales y empresariales."
  },
  { 
    id: 19, 
    nombre: "asesoria ambiental", 
    img: "/images/servicios/paisajismo.jpg",
    descripcion: "Diseño de paisajes únicos para jardines residenciales y empresariales."
  },
  { 
    id: 20, 
    nombre: "instalacion de prado sintetico", 
    img: "/images/servicios/paisajismo.jpg",
    descripcion: "Diseño de paisajes únicos para jardines residenciales y empresariales."
  },
  // 🔥 Agrega aquí todos tus servicios con imágenes y descripciones
];

export default function Sidebar({ isOpen, onClose }) {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className={`sidebar ${isOpen ? "active" : ""}`}>
      <div className="sidebar-header">
        <h2>Servicios</h2>
        <button className="close-btn" onClick={onClose}>✖</button>
      </div>

      <div className="services-grid">
        {servicios.map((servicio) => (
          <div 
            key={servicio.id} 
            className="service-card" 
            onClick={() => setSelectedService(servicio)}
          >
            <img src={servicio.img} alt={servicio.nombre} />
            <h3>{servicio.nombre}</h3>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedService.img} alt={selectedService.nombre} />
            <h2>{selectedService.nombre}</h2>
            <p>{selectedService.descripcion}</p>
            <button onClick={() => setSelectedService(null)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

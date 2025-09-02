import { useState } from "react";
import "../assets/Sidebar.css";

const servicios = [
  { 
    id: 1, 
    nombre: "Jardinería", 
    img: "/public/images/fuera12.jpg",
    descripcion: "Servicio completo de jardinería, desde el diseño hasta el mantenimiento."
  },
  { 
    id: 2, 
    nombre: "Poda de árboles", 
    img: "/public/images/poda.webp",
    descripcion: "Poda profesional para mantener la salud y estética de tus árboles."
  },

  { 
    id: 5, 
    nombre: "Siembra y mantenimiento de prado", 
    img: "/public/images/prado.jpg",
    descripcion: "Instalación y mantenimiento de prados con césped siempre verde."
  },
  { 
    id: 6, 
    nombre: "Mantenimiento de zonas verdes", 
    img: "/public/images/zonas.jpg",
    descripcion: "Cuidado integral de zonas verdes para conservar su frescura y belleza."
  },
  { 
    id: 7, 
    nombre: "Compensación de árboles", 
    img: "/public/images/compe.jpg",
    descripcion: "Cumplimiento ambiental con reforestación y compensación de árboles."
  },
  { 
    id: 8, 
    nombre: "Mantenimiento en unidades residenciales", 
    img: "/public/images/fuera30.jpg",
    descripcion: "Gestión de jardines y zonas verdes en conjuntos y residenciales."
  },
  { 
    id: 9, 
    nombre: "Diseño de jardines", 
    img: "/public/images/fuera4.jpg",
    descripcion: "Diseños personalizados para jardines únicos y funcionales."
  },
  { 
    id: 10, 
    nombre: "Venta de tierra abonada y fertilizantes orgánicos", 
    img: "/public/images/abono.jpg",
    descripcion: "Productos naturales para nutrir y fortalecer tus plantas."
  },
  { 
    id: 11, 
    nombre: "Venta de plantas y palmas", 
    img: "/public/images/piedra11.jpg",
    descripcion: "Amplia variedad de plantas y palmas listas para tu jardín."
  },
  { 
    id: 12, 
    nombre: "Diseño de jardines de interiores", 
    img: "/public/images/into24.jpg",
    descripcion: "Creación de jardines interiores que embellecen y purifican tu espacio."
  },
  { 
    id: 13, 
    nombre: "Construcción de jardines verticales", 
    img: "/public/images/vertical4.jpg",
    descripcion: "Muros verdes innovadores para interiores y exteriores."
  },
  { 
    id: 14, 
    nombre: "Instalaciones de riegos automáticos", 
    img: "/public/images/ariego.webp",
    descripcion: "Sistemas de riego automatizados para mayor comodidad y ahorro."
  },
  { 
    id: 15, 
    nombre: "Mantenimiento de árboles frutales", 
    img: "/public/images/afruta.webp",
    descripcion: "Cuidado especializado para árboles frutales productivos."
  },
  { 
    id: 16, 
    nombre: "Fumigación y fertilización", 
    img: "/public/images/afumigacion.jpg",
    descripcion: "Protección y nutrición de tus plantas con tratamientos eficaces."
  },
  { 
    id: 17, 
    nombre: "Poda y mantenimiento empresarial", 
    img: "/public/images/fuera5.jpg",
    descripcion: "Mantenimiento profesional de áreas verdes en empresas e instituciones."
  },
  { 
    id: 18, 
    nombre: "Reflejo de fondo", 
    img: "/public/images/acustico2.jpg",
    descripcion: "Decoración natural que resalta la belleza de tus espacios."
  },
  { 
    id: 19, 
    nombre: "Asesoría ambiental", 
    img: "/public/images/asesoria.jpg",
    descripcion: "Orientación experta en gestión y cuidado ambiental."
  },
  { 
    id: 20, 
    nombre: "Instalación de prado sintético", 
    img: "/public/images/asintec.jpg",
    descripcion: "Prado sintético de alta calidad para un verde perfecto todo el año."
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

import React from "react";
import "../assets/HeroLeft.css";

export default function HeroLeft({ onOpenServices, onOpenGardens }) {
  return (
    <div className="hero-left">
      <img src="/public/images/logo2.png" alt="Logo" className="hero-logo" />

      <div className="hero-buttons">
        <button className="hero-btn" onClick={onOpenServices}>
          Ver Servicios
        </button>
        <button className="hero-btn" onClick={onOpenGardens}>
          Jardines
        </button>
      </div>
    </div>
  );
}


import { useState, useEffect } from "react";
import ModalCarousel from "./ModalCarousel";

const images = [
    "/images/hero1.jpg",
    "/images/acustico1.jpg",
    "/images/acustico2.jpg",
    "/images/acustico3.jpg",
    "/images/acustico4.jpg",
    "/images/acustico5.jpg",
    "/images/acustico6.jpg",
    "/images/acustico7.jpg",
    "/images/acustico8.jpg",
    "/images/acustico9.jpg",
    "/images/colgante1.jpg",
    "/images/colgante2.jpg",
    "/images/colgante3.jpg",
    "/images/colgante4.jpg",
    "/images/vertical1.jpg",
    "/images/vertical2.jpg",
    "/images/vertical3.jpg",
    "/images/vertical4.jpg",
    "/images/acustico4.jpg",
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
    "/images/colgante2.jpg",
    "/images/colgante1.jpg",
    "/images/tronco1.jpg",
    "/images/tronco2.jpg",
    "/images/tronco3.jpg",
    "/images/tronco4.jpg",
    "/images/tronco5.jpg",
    "/images/troncote.jpg",
    "/images/tronco7.jpg",


];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="carousel">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className={index === current ? "active" : ""}
          />
        ))}
      </div>

      {showModal && (
        <ModalCarousel
          image={images[current]}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

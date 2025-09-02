import { useState, useEffect } from "react";
import ModalCarousel from "./ModalCarousel";

const images = [
    "/public/images/hero1.jpg",
    "/public/images/acustico1.jpg",
    "/public/images/acustico2.jpg",
    "/public/images/acustico3.jpg",
    "/public/images/acustico4.jpg",
    "/public/images/acustico5.jpg",
    "/public/images/acustico6.jpg",
    "/public/images/acustico7.jpg",
    "/public/images/acustico8.jpg",
    "/public/images/acustico9.jpg",
    "/public/images/colgante1.jpg",
    "/public/images/colgante2.jpg",
    "/public/images/colgante3.jpg",
    "/public/images/colgante4.jpg",
    "/public/images/vertical1.jpg",
    "/public/images/vertical2.jpg",
    "/public/images/vertical3.jpg",
    "/public/images/vertical4.jpg",
    "/public/images/acustico4.jpg",
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
    "/public/images/colgante2.jpg",
    "/public/images/colgante1.jpg",
    "/public/images/tronco1.jpg",
    "/public/images/tronco2.jpg",
    "/public/images/tronco3.jpg",
    "/public/images/tronco4.jpg",
    "/public/images/tronco5.jpg",
    "/public/images/troncote.jpg",
    "/public/images/tronco7.jpg",


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

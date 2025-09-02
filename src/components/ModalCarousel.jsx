export default function ModalCarousel({ image, onClose }) {
  return (
    <div className="modal active">
      <div className="modal-content">
        <img src={image} alt="Detalle" />
        <p>
          Aquí irá la información detallada sobre este servicio o imagen.
          Puedes personalizar este texto para describir tu trabajo.
        </p>
        <button onClick={onClose} style={{ marginTop: "10px" }}>
          Cerrar
        </button>
      </div>
    </div>
  );
}


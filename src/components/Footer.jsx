// src/components/Footer.jsx
import "../assets/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>📞 Teléfono: +57 312 894 4533 o +57 315 828 5112</p>
      <p>📧 Correo: rljardineriaa@gmail.com</p>
      <p className="footer-copy">© {new Date().getFullYear()} RL Jardineria. Todos los derechos reservados.</p>
    </footer>
  );
}

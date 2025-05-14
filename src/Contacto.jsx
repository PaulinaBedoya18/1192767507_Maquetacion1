import React from 'react';
import MenuLateral from './components/MenuLateral';
import Fondo from './components/Fondo';
import './Contacto.css';

const Contacto = () => {
  return (
    <Fondo>
      <div style={{ display: 'flex', height: '100vh' }}>
        <MenuLateral />
        <div className="contacto-container">
          <div className="contacto-card">
            <h1>Contáctanos</h1>

            <form className="contacto-form">
              <input type="text" placeholder="Nombre" required />
              <input type="email" placeholder="Correo electrónico" required />
              <textarea placeholder="Mensaje" required />
              <button type="submit">Enviar</button>
            </form>

            <div className="contacto-info">
              <p>📞 Teléfono: +57 300 123 4567</p>
              <p>💬 <a href="https://wa.me/573001234567" target="_blank" rel="noreferrer">Escríbenos por WhatsApp</a></p>
              <p>📍 Calle 123, Bogotá, Colombia</p>
            </div>
          </div>
        </div>
      </div>
    </Fondo>
  );
};

export default Contacto;

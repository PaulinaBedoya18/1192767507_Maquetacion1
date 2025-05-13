import React from 'react';
import MenuLateral from './components/MenuLateral';
import Fondo from './components/Fondo';
import './Servicios.css';


const Servicios = () => {
  return (
    <Fondo>
    <div style={{ display: 'flex', height: '100vh' }}>
      <MenuLateral />
      <div className="servicios-container">
      <h1 className="servicios-titulo">Nuestros Servicios</h1>
      <div className="servicios-lista">
        <div className="servicio-card">
          <img src="/icons/vuelo.png" alt="Vuelos" className="servicio-icono" />
          <h2>Vuelos</h2>
          <p>Reserva vuelos nacionales e internacionales al mejor precio.</p>
        </div>
        <div className="servicio-card">
          <img src="/icons/hotel.png" alt="Hoteles" className="servicio-icono" />
          <h2>Hoteles</h2>
          <p>Encuentra hoteles cómodos y económicos en tu destino ideal.</p>
        </div>
        <div className="servicio-card">
          <img src="/icons/tour.png" alt="Tours" className="servicio-icono" />
          <h2>Tours</h2>
          <p>Descubre experiencias únicas con nuestros tours guiados.</p>
        </div>
      </div>
    </div>
    </div>
    </Fondo>
  );
};

export default Servicios;

import React from 'react';
import MenuLateral from './components/MenuLateral';
import Fondo from './components/Fondo';
import './Servicios.css';

const Servicios = () => {
  const enviarMensaje = (servicio) => {
    const mensaje = encodeURIComponent(`Hola, estoy interesado en el servicio de ${servicio}`);
    window.open(`https://wa.me/573136537228?text=${mensaje}`, '_blank');
  };

  return (
    <Fondo>
      <div style={{ display: 'flex', height: '100vh' }}>
        <MenuLateral />
        <div className="servicios-container">
          <h1 className="servicios-titulo">Nuestros Servicios</h1>
          <div className="servicios-lista">

            <div className="servicio-card">
              <img src="/vuelos.jpg" alt="Vuelos" className="servicio-icono" />
              <h2>Vuelos</h2>
              <p>Reserva vuelos nacionales e internacionales al mejor precio.</p>
              <p className="precio">Desde $500.000 COP</p>
              <button className="solicitar-btn" onClick={() => enviarMensaje('Vuelos')}>Solicitar</button>
            </div>

            <div className="servicio-card">
              <img src="/hoteles.jpg" alt="Hoteles" className="servicio-icono" />
              <h2>Hoteles</h2>
              <p>Encuentra hoteles cómodos y económicos en tu destino ideal.</p>
              <p className="precio">Desde $120.000 COP por noche</p>
              <button className="solicitar-btn" onClick={() => enviarMensaje('Hoteles')}>Solicitar</button>
            </div>

            <div className="servicio-card">
              <img src="/tours.jpeg" alt="Tours" className="servicio-icono" />
              <h2>Tours</h2>
              <p>Descubre experiencias únicas con nuestros tours guiados.</p>
              <p className="precio">Desde $250.000 COP</p>
              <button className="solicitar-btn" onClick={() => enviarMensaje('Tours')}>Solicitar</button>
            </div>

          </div>
        </div>
      </div>
    </Fondo>
  );
};

export default Servicios;

import React from 'react';
import MenuLateral from './components/MenuLateral';
import Fondo from './components/Fondo';
import './AcercaDe.css';

const AcercaDe = () => {
  return (
    <Fondo>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <div className="menu-wrapper">
        <MenuLateral />
        </div>
        <div className="acerca-container">
          <h1 className="acerca-titulo">Nuestra Historia</h1>
          <p className="acerca-historia">
            Nuestra agencia de viajes nació en 2015 con el sueño de conectar a las personas con los destinos de sus sueños. Comenzamos como un pequeño emprendimiento familiar ofreciendo paquetes locales, y con el tiempo, nos expandimos a destinos internacionales gracias a la confianza de nuestros clientes.
          </p>

          <div className="acerca-cards">
            <div className="acerca-card">
              <h2>Visión</h2>
              <p>Ser la agencia de viajes líder en Latinoamérica, ofreciendo experiencias inolvidables y accesibles para todos.</p>
            </div>
            <div className="acerca-card">
              <h2>Misión</h2>
              <p>Brindar un servicio personalizado, confiable y apasionado, para que cada cliente disfrute su viaje sin preocupaciones.</p>
            </div>
          </div>
        </div>
      </div>
    </Fondo>
  );
};

export default AcercaDe;

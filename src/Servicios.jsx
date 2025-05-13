import React from 'react';
import MenuLateral from './components/MenuLateral';
import Fondo from './components/Fondo';
import './Servicios.css';


const Servicios = () => {
  return (
    <Fondo>
    <div style={{ display: 'flex', height: '100vh' }}>
      <MenuLateral />
      <div style={{ flex: 1, padding: '40px' }}>
        <h1>Servicios</h1>
        <p>Esta es la sección de servicios ofrecidos.</p>
      </div>
    </div>
    </Fondo>
  );
};

export default Servicios;

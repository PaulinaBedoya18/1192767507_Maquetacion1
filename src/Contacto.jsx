import React from 'react';
import MenuLateral from './components/MenuLateral';
import Fondo from './components/Fondo';
import './Contacto.css';



const Contacto = () => {
  return (
    <Fondo>
    <div style={{ display: 'flex', height: '100vh' }}>
      <MenuLateral />
      <div style={{ flex: 1, padding: '40px' }}>
        <h1>Contacto</h1>
        <p>Información para contactarnos.</p>
      </div>
    </div>
    </Fondo>
  );
};

export default Contacto;

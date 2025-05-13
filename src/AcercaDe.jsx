import React from 'react';
import MenuLateral from './components/MenuLateral';
import Fondo from './components/Fondo';
import './AcercaDe.css';


const AcercaDe = () => {
  return (
    <Fondo>
    <div style={{ display: 'flex', height: '100vh' }}>
      <MenuLateral />
      <div style={{ flex: 1, padding: '40px' }}>
        <h1>Acerca de</h1>
        <p>Información sobre nuestra organización.</p>
      </div>
    </div>
    </Fondo>
  );
};

export default AcercaDe;

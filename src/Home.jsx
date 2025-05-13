import React from 'react';
import MenuLateral from './components/MenuLateral';
import Fondo from './components/Fondo';
import './Home.css';


const Home = () => {
  return (
    <Fondo>
    <div style={{ display: 'flex', height: '100vh' }}>
      <MenuLateral />
      <div style={{ flex: 1, padding: '40px' }}>
        <h1>Home</h1>
        <p>Bienvenido al panel de inicio.</p>
      </div>
    </div>
    </Fondo>
  );
};

export default Home;

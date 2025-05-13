import React from 'react';
import MenuLateral from './components/MenuLateral';
import Fondo from './components/Fondo';
import './Home.css';


const Home = () => {
  return (
    <Fondo>
   <div className="page-container">
        <MenuLateral />
        <div className="home-content">
          <div className="card banner">
            <h2 class="titulo">¡Bienvenido a ViajaFácil!</h2>
            <p class="titulo">Explora destinos increíbles con la mejor asesoría.</p>
          </div>

          <div className="card descripcion">
            <h3 class="titulo">¿Quiénes somos?</h3>
            <p class="titulo">Una agencia dedicada a ayudarte a planear viajes inolvidables. Te ofrecemos vuelos, hospedajes y tours adaptados a ti.</p>
          </div>

          <div className="card servicios-destacados">
            <h3 class="titulo">Servicios Destacados</h3>
            <div className="mini-cards">
              <div className="mini-card">✈️ Vuelos</div>
              <div className="mini-card">🏨 Hoteles</div>
              <div className="mini-card">🗺️ Tours</div>
            </div>
          </div>

          <div className="card promociones">
            <h3 class="titulo">Promociones</h3>
            <p class="titulo">¡Aprovecha descuentos especiales este mes en paquetes a Cancún, París y Cartagena!</p>
          </div>
        </div>
      </div>
    </Fondo>
  );
};

export default Home;

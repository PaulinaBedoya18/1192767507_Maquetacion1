import React from 'react';
import { Link } from 'react-router-dom';
import './MenuLateral.css';

const MenuLateral = () => {
  return (
    <div className="menu-lateral">
      <h2><Link to="/home" className="menu-title">Home</Link></h2>
      <nav className="menu-links">
        <Link to="/servicios">Servicios</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/acerca">Acerca de</Link>
        <Link to="/login">Cerrar Sesión</Link>
      </nav>
    </div>
  );
};

export default MenuLateral;

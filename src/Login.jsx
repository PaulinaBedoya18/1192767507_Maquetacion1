import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import Card from './components/Card';
import Fondo from './components/Fondo';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <Fondo>
      <div className="login-container">
        <Card>
          <form className="login-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Usuario" className="login-input" />
            <input type="password" placeholder="Contraseña" className="login-input" />
            <button type="submit" className="login-button">Iniciar Sesión</button>
            <Link to="/register" className="login-link">¿No tiene una cuenta?</Link>
          </form>
        </Card>
      </div>
    </Fondo>
  );
};

export default Login;

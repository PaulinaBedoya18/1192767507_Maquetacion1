import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from './components/Card';
import Fondo from './components/Fondo';
import './register.css';

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // evita recarga
    navigate('/home'); // redirige a home después de "registrarse"
  };

  return (
    <Fondo>
      <Card>
        <form className="register-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Usuario" className="register-input" />
          <input type="password" placeholder="Contraseña" className="register-input" />
          <input type="text" placeholder="Nombre" className="register-input" />
          <input type="email" placeholder="Correo" className="register-input" />
          <button type="submit" className="register-button">Registrarse</button>
          <Link to="/" className="register-link">¿Ya tiene una cuenta?</Link>
        </form>
      </Card>
    </Fondo>
  );
};

export default Register;

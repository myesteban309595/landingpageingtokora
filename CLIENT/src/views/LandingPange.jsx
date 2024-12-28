import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Asegúrate de crear el archivo CSS para los estilos

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirigir automáticamente después de 5 segundos
    const timer = setTimeout(() => {
      navigate('/main'); // Redirige a la página principal
    }, 5000);

    // Limpiar el timer cuando el componente se desmonta
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container">
      <p className="message">
        All your dreams can come true
        <br />
        if you have the courage to pursue them
      </p>

      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>

      <h1 className='message-landingpage--h1'>Bienvenido a la tienda de libros</h1>
      <p className='message-landingpage'>Te redirigiremos a la página principal en 5 segundos...</p>
    </div>
  );
};

export default LandingPage;

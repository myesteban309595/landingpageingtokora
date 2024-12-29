import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Si usas un archivo CSS específico para Navbar

const Navbar = ({ cartItemCount }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">Bienvenidos !</Link>
      <div className="navbar__user">
        <div className="navbar__cart">
          <Link to="/cart" className="navbar__cart-link">
            <span className="navbar__cart-icon">🛒</span>
            {cartItemCount > 0 && <span className="navbar__cart-count">{cartItemCount}</span>}
          </Link>
        </div>
        <img src="https://i.pravatar.cc/50" alt="Usuario" className="navbar__user-avatar" />
      </div>
    </nav>
  );
};

export default Navbar;

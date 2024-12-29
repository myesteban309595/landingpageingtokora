import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Checkout from './Checkout'; // Importamos el componente Checkout
import './CartPage.css'; // Estilos personalizados

const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false); // Estado para controlar si se muestra el Checkout

  // Función para obtener los productos del carrito del sessionStorage
  const getCartItems = () => {
    const items = JSON.parse(sessionStorage.getItem('cart')) || [];
    
    // Asegurar que cada producto tenga una cantidad por defecto de 1
    const updatedItems = items.map(item => ({
      ...item,
      quantity: item.quantity ? item.quantity : 1,  // Si no tiene cantidad, asignar 1
    }));

    setCartItems(updatedItems);
  };

  useEffect(() => {
    getCartItems();
  }, []);

  // Función para actualizar la cantidad de un producto en el carrito
  const updateQuantity = (id, quantity) => {
    const updatedItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: quantity } : item
    );
    setCartItems(updatedItems);
    sessionStorage.setItem('cart', JSON.stringify(updatedItems)); // Guardar en sessionStorage
  };

  // Función para eliminar un producto del carrito
  const removeItem = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
    sessionStorage.setItem('cart', JSON.stringify(updatedItems)); // Guardar en sessionStorage
  };

  // Calcular el subtotal de un item (precio * cantidad)
  const calculateItemSubtotal = (item) => {
    const price = parseFloat(item.price.replace('$', '').replace(',', '')); // Convertir precio a número
    return (price * item.quantity).toFixed(2);
  };

  // Calcular el total de la compra
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', '').replace(',', '')); // Convertir precio a número
      return total + (price * item.quantity);
    }, 0).toFixed(2);
  };

  // Función para manejar la apertura del Checkout
  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true); // Cambiar el estado para abrir el Checkout
  };

  // Función para manejar el cierre del Checkout
  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false); // Cambiar el estado para cerrar el Checkout
  };

  // Función para vaciar el carrito y redirigir a la página principal
  const clearCart = () => {
    sessionStorage.removeItem('cart'); // Limpiar el carrito en sessionStorage
    setCartItems([]); // Limpiar el carrito en el estado
  };

  return (
    <div className="cart-page">
      <h1 className="title-header">Carrito de Compras</h1>

      {cartItems.length === 0 ? (
        <p className="cart-page-message-noitem">El carrito está vacío.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img className="cart-item__image" src={item.image} alt={item.title} />
              <div className="cart-item__details">
                <h3>{item.title}</h3>
                <p>
                  Precio: 
                  <span className="original-price">{item.price}</span>
                  <span className="discount-price">{item.discountPrice}</span>
                </p>
                <p>
                  Subtotal: ${calculateItemSubtotal(item)}
                </p>
                <p>Cantidad:
                  <input
                    className='cart-item__details_input_number'
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  />
                </p>
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-total">
        <h3>Total: ${calculateTotal()}</h3>
        <button onClick={handleOpenCheckout}>Comprar</button> {/* Botón para abrir el Checkout */}
      </div>

      {/* Mostrar el componente Checkout solo si el estado isCheckoutOpen es true */}
      {isCheckoutOpen && (
        <Checkout
          cartItems={cartItems}  // Pasamos los productos en el carrito a Checkout
          clearCart={clearCart}   // Pasamos la función para vaciar el carrito a Checkout
          handleClose={handleCloseCheckout}  // Pasamos la función para cerrar el Checkout
        />
      )}
    </div>
  );
};

export default CartPage;

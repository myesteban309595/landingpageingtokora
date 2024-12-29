import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';  // Estilos personalizados

const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

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

  // Comprar (limpiar el carrito y mostrar mensaje)
  const handleBuy = () => {
    alert(`¡Gracias por tu compra! El total es $${calculateTotal()}`);
    sessionStorage.removeItem('cart'); // Limpiar el carrito
    setCartItems([]); // Limpiar el estado
    navigate('/'); // Volver a la página principal
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
        <button onClick={handleBuy}>Comprar</button>
      </div>
    </div>
  );
};

export default CartPage;

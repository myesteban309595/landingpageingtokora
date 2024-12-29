import React, { useState } from "react";
import "./Checkout.css";
import InputMask from 'react-input-mask'; // Importamos la librería de máscaras
import Select from 'react-select'; // Usamos react-select para mejorar la apariencia del select de país
import { countryOptions } from './countryOptions'; // Aquí importamos las opciones de países (ver abajo)
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate para la redirección

const Checkout = ({ cartItems, clearCart, handleClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    card: "",
    country: "US", // Establecemos un país por defecto
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [step, setStep] = useState(1); // Paso 1: Mostrar carrito, Paso 2: Mostrar formulario

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleQuantityChange = (index, newQuantity) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = newQuantity;
    setCartItems(updatedItems); // Actualiza el estado del carrito
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    alert("¡Gracias por tu compra!");
    clearCart();
    handleClose(); // Para cerrar el checkout después de realizar la compra
    navigate('/main'); // Redirigir al usuario a la ruta '/main'
  };

  // Calcular el total de la compra
  const calculateTotal = () => {
    const totalPrice = cartItems.reduce((total, item) => {
      return total + parseFloat(item.price.replace('$', '').replace(',', '')) * item.quantity;
    }, 0);
    const shipping = 8; // Establecemos un precio inventado para el envío
    return (totalPrice + shipping).toFixed(2); // Total con envío
  };

  const handleContinueShopping = () => {
    setStep(2); // Cambiar al paso 2: Mostrar formulario
  };

  const handleCancel = () => {
    handleClose(); // Cerrar modal sin hacer nada
  };

  return (
    <div className="checkout-container">
      <div className="checkout-modal">
        {step === 1 && (
          <>
            <h2>Resumen de tu compra</h2>
            <div className="cart-summary">
              {cartItems.length === 0 ? (
                <p>Tu carrito está vacío.</p>
              ) : (
                <div className="cart-items-scrollable">
                  <ul>
                    {cartItems.map((item, index) => (
                      <li key={index} className="cart-item">
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-details">
                          <p><strong>{item.name}</strong></p>
                          <p>Precio: {item.price}</p>
                          <div className="quantity-container">
                            <label>Cantidad: </label>
                            <input
                              type="number"
                              value={item.quantity}
                              min="1"
                              onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                            />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="checkout-summary">
              <img
                src="https://static.vecteezy.com/system/resources/previews/020/696/260/non_2x/3d-minimal-fast-delivery-concept-quick-parcel-transportation-product-contribution-quickly-parcels-shipping-delivery-car-with-an-orange-arrow-3d-illustration-png.png"
                alt="Carrito"
                className="cart-icon"
              />
              <p><strong>Envío: </strong>$8.00</p>
              <p className="total-price"><strong>TOTAL: </strong>${calculateTotal()}</p>
            </div>

            <div className="action-buttons">
              <button onClick={handleCancel} className="close-button-cancel">
                Cancelar
              </button>
              <button onClick={handleContinueShopping} className="submit-button-continue">
                Continuar compra
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h3>Detalles de envío y pago</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <label>Nombre:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-field">
                <label>Dirección:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-field">
                <label>Selecciona tu país:</label>
                <Select
                  options={countryOptions}
                  value={countryOptions.find(option => option.value === formData.country)}
                  onChange={(selectedOption) => setFormData({ ...formData, country: selectedOption.value })}
                  getOptionLabel={(e) => (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img src={e.flag} alt={e.label} style={{ width: 20, marginRight: 8 }} />
                      <span>{e.label}</span>
                    </div>
                  )}
                />
              </div>
              <div className="form-field">
                <label>Teléfono:</label>
                <InputMask
                  mask={formData.country === "US" ? "(999) 999-9999" : "999-999-9999"}
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-field">
                <label>Número de tarjeta:</label>
                <InputMask
                  mask="9999 9999 9999 9999"
                  name="card"
                  value={formData.card}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="checkout-summary">
                <p><strong>Envío: </strong>$8.00</p>
                <p className="total-price"><strong>TOTAL: </strong>${calculateTotal()}</p>
              </div>
              <button type="submit" className="submit-button">Confirmar compra</button>
            </form>
          </>
        )}

        {orderPlaced && (
          <div className="order-confirmation">
            <p>¡Gracias por tu compra! Tu pedido ha sido realizado con éxito.</p>
          </div>
        )}

        <button onClick={handleClose} className="close-button">Cerrar</button>
      </div>
    </div>
  );
};

export default Checkout;

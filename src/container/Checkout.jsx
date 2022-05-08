import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContenxt from '../context/AppContext';
import '../styles/components/Checkout.css';

const Checkout = () => {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContenxt);

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (acumulator, currentValue) =>
      acumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <div>
          {cart.lenght > 0 ? (
            <h3>Lista de pedidos:</h3>
          ) : (
            <h3>Sin pedidos...</h3>
          )}
        </div>
        {cart.map((item) => (
          <div key={item.cartId} className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </div>
            <button type="button" onClick={handleRemove(item.cartId)}>
              <i className="fas fa-trash-alt" title="eliminar" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
          <Link to="/Checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContenxt from '../context/AppContext';
import { handleSumTotal } from '../utils/index';
import '../styles/components/Checkout.css';

const Checkout = () => {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContenxt);

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

 

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <div>
        <h3>{cart.length > 0 ? 'Lista de pedidos' : 'Sin pedidos'}</h3>
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
          <h3>{`Precio Total: $ ${handleSumTotal(cart)}`}</h3>
          <Link to="/Checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;

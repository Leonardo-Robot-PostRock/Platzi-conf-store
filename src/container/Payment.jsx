import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button';
import AppContext from '../context/AppContext';
import { handleSumTotal } from '../utils/index';
import config  from '../../config/index';
import '../styles/components/Payment.css';


const Payment = () => {
  const {
    state: { cart, buyer },
    addNewOrder,
  } = useContext(AppContext);
  const navigate = useNavigate();
  const clientID = config.clientIdPaypal;

  const paypalOptions = {
    clientId: clientID,
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      navigate('/checkout/success');
    }
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.cartId}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal(cart)}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;

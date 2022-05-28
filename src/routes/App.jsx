import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../container/Home';
import Checkout from '../container/Checkout';
import Information from '../container/Information';
import Payment from '../container/Payment';
import Success from '../container/Success';
import NotFound from '../container/NotFound';
import Layout from '../components/Layout';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();
  const isEmpty = Object.keys(initialState.state).length; 

  return (
    <>
      {isEmpty > 0 ? (
        <AppContext.Provider value={initialState}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="checkout/information" element={<Information />} />
                <Route path="checkout/payment" element={<Payment />} />
                <Route path="checkout/success" element={<Success />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AppContext.Provider>
      ) : (
        <h1>Cargando...</h1>
      )}
    </>
  );
};

export default App;

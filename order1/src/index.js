import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CartProvider from './store/CartProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './route/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </BrowserRouter>
  </CartProvider>
);

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import KripaLanding from './components/KripaLanding';
import Products from './pages/Products';

function App() {
  return (
    <Routes>
      <Route path="/" element={<KripaLanding />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default App;

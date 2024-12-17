import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ajusta la ruta según tu estructura de carpetas
import './index.css'; // Si usas CSS, verifica la ruta

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import products from './data';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App products={products}/>
  </React.StrictMode>
);
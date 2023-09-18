import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const bootstrap = document.createElement('link');
bootstrap.rel = 'stylesheet';
bootstrap.href =
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css';
document.head.appendChild(bootstrap);

const fontAwesome = document.createElement('link');
fontAwesome.rel = 'stylesheet';
fontAwesome.href =
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
document.head.appendChild(fontAwesome);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


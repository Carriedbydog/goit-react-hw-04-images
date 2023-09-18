import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Global } from 'styles/Global';
import App from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Global />
  </>
);

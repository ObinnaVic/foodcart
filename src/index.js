import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Store from './components/Store';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* enclose App in Store since App comprises of all components in the website */}
      <HashRouter hashType="slash">
        <Store>
            <App />
        </Store>
      </HashRouter>
  </React.StrictMode>
);

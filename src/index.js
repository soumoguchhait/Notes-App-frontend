import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
    
  
    <BrowserRouter>
    <App />
   </BrowserRouter>
   
   </Provider>
    
  </React.StrictMode>
);

reportWebVitals();

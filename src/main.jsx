import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import RecipeContextProvider from './context/RecipeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecipeContextProvider>
        <App />
      </RecipeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

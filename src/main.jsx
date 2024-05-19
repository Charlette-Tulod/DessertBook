import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import RecipeContextProvider from './context/RecipeContext';
import { ThemeProvider } from '@mui/material/styles';
import theme from './layouts/Theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <RecipeContextProvider>
          <App />
        </RecipeContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

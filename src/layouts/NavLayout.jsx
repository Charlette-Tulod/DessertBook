import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RecipeContextProvider from '../context/RecipeContext';
import NavigationBar from '../components/NavigationBar';

const NavLayout = () => {
  return (
    <>
      <NavigationBar />
      <RecipeContextProvider>
        <Outlet />
        <ToastContainer />
      </RecipeContextProvider>
    </>
  );
};

export default NavLayout;

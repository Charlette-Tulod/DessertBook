import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';

const NavigationBar = () => {
  const activationClass = ({ isActive }) =>
    isActive
      ? 'bg-darkerrose  hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
      : ' hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

  return (
    <nav className="bg-lightrose border-b border-rose">
      <div className=" sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center ">
            <NavLink className="" to="/">
              <img className="h-20 w-auto" src={Logo} alt="Dessert Book" />
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={activationClass}>
                  Home
                </NavLink>
                <NavLink to="/recipes" className={activationClass}>
                  Desserts
                </NavLink>
                <NavLink to="/addrecipe" className={activationClass}>
                  Add Recipe
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;

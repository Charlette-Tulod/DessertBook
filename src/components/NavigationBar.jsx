import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Box, useMediaQuery, useTheme, Drawer, IconButton } from '@mui/material';
import { IoMdMenu } from 'react-icons/io';
import Logo from '../assets/logo.png';

const NavigationBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const activationClass = ({ isActive }) =>
    isActive
      ? 'bg-darkerrose  hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
      : ' hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

  const renderNavLinks = () => (
    <>
      <NavLink to="/" className={activationClass}>
        Home
      </NavLink>
      <NavLink to="/recipes" className={activationClass}>
        Desserts
      </NavLink>
      <NavLink to="/addrecipe" className={activationClass}>
        Add Recipe
      </NavLink>
    </>
  );

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: '#fff1f2', borderBottom: '1px solid #ffe4e6' }}
    >
      <Toolbar>
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <img src={Logo} alt="Dessert Book" style={{ height: '60px', marginRight: '16px' }} />
        </NavLink>
        <Box sx={{ marginLeft: 'auto', display: { xs: 'none', md: 'flex' } }}>
          <div style={{ flexGrow: 1 }}></div>
          {renderNavLinks()}
        </Box>
        {isMobile && (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ ml: 'auto' }}
              onClick={handleDrawerToggle}
            >
              <IoMdMenu />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
              <Box
                sx={{
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <div style={{ flexGrow: 1 }}></div>
                {renderNavLinks()}
              </Box>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;

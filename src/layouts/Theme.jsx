import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffe4e6', // rose
    },
    secondary: {
      main: '#fda4af', // darkerrose
    },

    customColors: {
      brown: '#754328',
      lightrose: '#fff1f2',
      cwhite: '#ffffff',
      red: '#ef4444',
    },
  },
});

export default theme;

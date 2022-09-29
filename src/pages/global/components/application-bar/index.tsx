import React from 'react';
import {
  Toolbar,
  Box,
  AppBar,
  styled,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Link = styled(NavLink)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  height: '100%',
  padding: theme.spacing(0, 2),
  color: 'black',
  textDecoration: 'none',

  ':hover': {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.grey[50],
  },

  '&.active': {
    boxShadow: `inset 0 -4px 0 ${theme.palette.common.white}`,
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#000000',
    },
  },
});
const ApplicationBar: React.FC = () => (
  <ThemeProvider theme={theme}>
    <AppBar position="fixed" color="primary">
      <Toolbar sx={{
        justifyContent: 'space-between',
        alignItems: 'stretch',
        width: 1280,
        height: 100,
        mx: 'auto',
      }}
      >
        <Box sx={{ display: 'flex' }}>
          <Link to="/HandsOn" end sx={{ fontSize: '40px', color: '#7c1034', fontWeight: 500 }}>HandsOn</Link>
        </Box>
        <Box sx={{ display: 'flex', fontSize: '20px' }}>
          <Link to="/auth/login">Sign in</Link>
          <Link to="/auth/favorites"><FavoriteBorderIcon fontSize="large" /></Link>
          <Link to="/auth/cart"><ShoppingCartIcon fontSize="large" /></Link>
        </Box>

      </Toolbar>
    </AppBar>
  </ThemeProvider>

);

export default ApplicationBar;

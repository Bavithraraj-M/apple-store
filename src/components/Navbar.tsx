import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'; // Import Box
import AppleIcon from '@mui/icons-material/Apple';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link } from 'react-router-dom'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Navbar = () => {
  return (
    <AppBar position="static" color='default'>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <Box display="flex" alignItems="center"> 
          <IconButton component={Link} to="/" sx={{ mx: 2 }}>
            <AppleIcon color="inherit" />
          </IconButton>
          <Button color='inherit' component={Link} to="/store" sx={{ mx: 2 }}>
            Store
          </Button>
          <Button color='inherit' component={Link} to="/iPhone" sx={{ mx: 2 }}>
            iPhone
          </Button>
          <Button color='inherit' component={Link} to="/iPad" sx={{ mx: 2 }}>
            iPad
          </Button>
          <Button color='inherit' component={Link} to="/mac" sx={{ mx: 2 }}>
            Mac
          </Button>
          <Button color='inherit' component={Link} to="/watch" sx={{ mx: 2 }}>
            Watch
          </Button>
          <Button color="inherit" component={Link} to="/about" sx={{ mx: 2 }}>
            About
          </Button>
        </Box>
        <Box display="flex"  alignItems="center"> 
          <IconButton color="inherit" component={Link} to="/account" sx={{ mx: 2 }}>
            <AccountCircleIcon></AccountCircleIcon>
          </IconButton>
          <IconButton color="inherit" component={Link} to="/bag" aria-label="cart" sx={{ mx: 2 }}>
            <LocalMallIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

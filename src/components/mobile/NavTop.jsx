import React from 'react';

import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const NavTop = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#FFFFFF' }}>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <IconButton>
            <img src="/assets/mobile/icons/logoIcon.svg" alt="logo" />
          </IconButton>

          <IconButton>
            <img src="/assets/mobile/icons/searchIcon.svg" alt="search" />
          </IconButton>
        </Box>
      </Container>
    </AppBar>
  );
};

export default NavTop;

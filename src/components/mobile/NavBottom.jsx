import React from 'react';

import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const navs = [
  {
    name: 'Home',
    icon: '/assets/mobile/icons/homeIcon.svg',
  },
  {
    name: 'News',
    icon: '/assets/mobile/icons/newsIcon.svg',
  },
  {
    name: 'Profile',
    icon: '/assets/mobile/icons/profileIcon.svg',
  },
];

const NavBottom = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ top: 'auto', bottom: 0, backgroundColor: '#FFFFFF' }}
    >
      <Box display="flex" flexDirection="row" justifyContent="space-around">
        {navs.map(({ name, icon }, i) => (
          <IconButton key={i}>
            <Box>
              <img src={icon} alt="navs" />
              <Typography>{name}</Typography>
            </Box>
          </IconButton>
        ))}
      </Box>
    </AppBar>
  );
};

export default NavBottom;

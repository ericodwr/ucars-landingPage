import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Home = () => {
  return (
    <Box position={'relative'}>
      <img src="/assets/images/homeBg.svg" className="bgHome" alt="homeView" />
      <Box
        sx={{
          position: 'absolute',
          top: '8rem',
          left: '7rem',
        }}
      >
        <Typography
          color="white"
          variant="h2"
          component="h1"
          fontFamily={`'Poppins', sans-serif`}
          fontWeight="600"
          letterSpacing="1px"
        >
          Car Marketplace
        </Typography>
        <Typography
          color="white"
          fontFamily={`'Inter', sans-serif`}
          marginY="2rem"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Nunc
          odio in et, lectus sit lorem id integer.
        </Typography>
        <Button
          variant="contained"
          color="error"
          sx={{
            fontFamily: `'Inter', sans-serif`,
          }}
          size="large"
          width="196px"
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default Home;

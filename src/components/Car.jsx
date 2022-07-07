import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';

const Car = ({ carData }) => {
  return (
    <Grid item xs={3}>
      <Card elevation={2}>
        <Box>
          <img src={carData.imgCar} className="bgHome" alt="cars" />
        </Box>
        <Box margin={'1rem'}>
          {/* Name */}
          <Typography
            gutterBottom
            variant="h6"
            fontFamily={`'Poppins', sans-serif`}
            fontWeight="bold"
            component="h1"
          >
            {carData.name}
          </Typography>

          {/* Price */}
          <Typography
            mb={2}
            fontFamily={`'Poppins', sans-serif`}
            variant="body1"
            component="p"
          >
            {carData.price === 'POA' ? '' : 'From '}
            <span className={carData.price === 'POA' ? '' : 'price'}>
              {carData.price}
            </span>
            <span className="monthly">{carData.monthly}</span>
          </Typography>

          {/* Variant */}
          <Typography
            variant="body2"
            component="p"
            gutterBottom
            fontFamily={`'Poppins', sans-serif`}
            sx={{ fontWeight: 'lighter' }}
          >
            {carData.variant}
          </Typography>
        </Box>

        {/* Brand */}
        <Box
          margin={'1.5rem 1rem'}
          display="flex"
          flexDirection={'row'}
          alignItems="center"
        >
          <Avatar src={carData.brandLogo} alt="logo" />

          <Typography variant="body1" component="p" ml={2}>
            {carData.brand}
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
};

export default Car;

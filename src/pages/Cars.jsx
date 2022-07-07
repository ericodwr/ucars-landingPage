import React from 'react';

import Box from '@mui/material/Box';

import Paper from '@mui/material/Paper';

import ContainerFunc from '../components/helper/ContainerFunc';
import CarsForm from '../components/CarsForm';
import CarList from '../components/CarList';
import Button from '@mui/material/Button';

const Cars = () => {
  return (
    <ContainerFunc>
      <Box position="relative" minHeight={'50vh'}>
        <Paper
          elevation={4}
          sx={{
            marginTop: '-5rem',
          }}
        >
          <CarsForm />
        </Paper>
        <CarList />
        <Box
          display={'flex'}
          flexDirection="row"
          alignItems="center"
          justifyContent={'center'}
          m={'4rem'}
        >
          <Button
            variant="outlined"
            size="large"
            sx={{ padding: '0.7rem' }}
            color="error"
          >
            View More New Cars
          </Button>
        </Box>
      </Box>
    </ContainerFunc>
  );
};

export default Cars;

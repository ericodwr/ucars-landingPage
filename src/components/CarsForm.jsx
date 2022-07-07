import React from 'react';

import Box from '@mui/material/Box';

import PriceForm from './PriceForm';
import TypeForm from './TypeForm';
import VehicleForm from './VehicleForm';
import { Button } from '@mui/material';

const CarsForm = () => {
  return (
    <Box
      flexDirection={'row'}
      sx={{ py: '1rem' }}
      display="flex"
      justifyContent={'space-around'}
    >
      <TypeForm />
      <PriceForm />
      <VehicleForm />
      <Box display="flex" alignItems={'center'}>
        <Button
          size="large"
          sx={{ padding: '1rem 4rem' }}
          color="error"
          variant="contained"
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default CarsForm;

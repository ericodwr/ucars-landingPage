import React, { useState } from 'react';

import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  InputAdornment,
  MenuItem,
  TextField,
  Button,
} from '@mui/material';

const PriceForm = () => {
  const [amount, setAmount] = useState({
    min: '100,000',
    max: '1,000,000',
  });

  const handleChange = (prop) => (event) => {
    setAmount({ ...amount, [prop]: event.target.value });
  };

  return (
    <>
      <Box position={'relative'}>
        <h2 style={{ fontFamily: `'Roboto', sans-serif`, margin: '8px' }}>
          Price Range
        </h2>
        <FormControl sx={{ m: 1, width: 300 }}>
          <TextField
            required
            id="outlined-required"
            value={`$${amount.min} - $${amount.max}`}
            sx={{
              position: 'absolute',
              width: 300,
            }}
          />
          {/* <InputLabel id="price-cars">{amount.max}</InputLabel> */}
          <Select labelId="price-cars" value={``} onChange={handleChange}>
            {/* Price */}
            <Box
              display="flex"
              flexDirection={'row'}
              alignItems="center"
              sx={{
                margin: '1rem',
              }}
            >
              {/* Min Amount */}
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Min</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={amount.min}
                  onChange={handleChange('min')}
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  label="Min"
                />
              </FormControl>
              -{/* Max Amount */}
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Max</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={amount.max}
                  onChange={handleChange('max')}
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  label="Max"
                />
              </FormControl>
            </Box>

            {/* Button */}
            <Box
              display="flex"
              flexDirection={'row'}
              justifyContent="space-between"
              sx={{ margin: '1.5rem' }}
            >
              <MenuItem>Clear</MenuItem>
              <Button color="error" variant="contained">
                Save
              </Button>
            </Box>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default PriceForm;

import React from 'react';
import Car from './Car';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

const cars = [
  {
    name: 'BMW X3',
    price: '$248,000',
    monthly: '$2,302/mo',
    variant: '4 variants | with COE',
    imgCar: '/assets/cars/bmwx3.svg',
    brandLogo: '/assets/icons/bmw.svg',
    brand: 'Performance Motors',
  },
  {
    name: 'Alpine A110',
    price: '$248,800',
    monthly: '$2,302/mo',
    variant: '3 variants | with COE',
    imgCar: '/assets/cars/alpine.svg',
    brandLogo: '/assets/icons/alpine.svg',
    brand: 'Wearnes Automotive ',
  },
  {
    name: 'Aston Martin DBS Superle...',
    price: 'POA',
    monthly: '$2,302/mo',
    variant: '4 variants | with COE',
    imgCar: '/assets/cars/superlegge.svg',
    brandLogo: '/assets/icons/astone.svg',
    brand: 'Wearnes Automotive ',
  },
  {
    name: 'Alfa Romeo Stelvio',
    price: '$278,000',
    monthly: '$2,302/mo',
    variant: '3 variants | with COE',
    imgCar: '/assets/cars/romeo.svg',
    brandLogo: '/assets/icons/bmw.svg',
    brand: 'EuroAutomobile',
  },
  {
    name: 'Aston Martin DB11 Volante',
    price: 'POA',
    monthly: '$2,302/mo',
    variant: '1 variants',
    imgCar: '/assets/cars/db11volante.svg',
    brandLogo: '/assets/icons/astone.svg',
    brand: 'Wearnes Automotive',
  },
  {
    name: 'Aston Martin DB11',
    price: '$799,000',
    monthly: '$2,302/mo',
    variant: '1 variants',
    imgCar: '/assets/cars/db11volante.svg',
    brandLogo: '/assets/icons/astone.svg',
    brand: 'Wearnes Automotive',
  },
  {
    name: 'Aston Martin DB11 Volante',
    price: 'POA',
    monthly: '$2,302/mo',
    variant: '1 variants',
    imgCar: '/assets/cars/db11volante.svg',
    brandLogo: '/assets/icons/astone.svg',
    brand: 'Wearnes Automotive',
  },
];

const CarList = () => {
  return (
    <Box mt={'5rem'}>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <Card>
            <img
              src="/assets/cars/picture.svg"
              className="bgHome"
              alt="first"
            />
          </Card>
        </Grid>
        {cars.map((carData, i) => (
          <Car carData={carData} key={i} />
        ))}
      </Grid>
    </Box>
  );
};

export default CarList;

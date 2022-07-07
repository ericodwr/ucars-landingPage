import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import TitleMobile from '../helper/TitleMobile';

const popularBrands = [
  {
    name: 'Toyota',
    img: '/assets/mobile/brands/toyota.svg',
  },
  {
    name: 'BMW',
    img: '/assets/mobile/brands/bmw.svg',
  },
  {
    name: 'Merdeces',
    img: '/assets/mobile/brands/mercy.svg',
  },
  {
    name: 'Hyundai',
    img: '/assets/mobile/brands/hyundai.svg',
  },
  {
    name: 'Mazda',
    img: '/assets/mobile/brands/mazda.svg',
  },
  {
    name: 'Audi',
    img: '/assets/mobile/brands/audi.svg',
  },
  {
    name: 'Nissan',
    img: '/assets/mobile/brands/nissan.svg',
  },
  {
    name: 'Kia',
    img: '/assets/mobile/brands/kia.svg',
  },
  {
    name: 'Honda',
    img: '/assets/mobile/brands/honda.svg',
  },
  {
    name: 'More',
    img: '/assets/mobile/brands/others.svg',
  },
];

const Brands = () => {
  return (
    <Box my="2rem">
      <Box mb="2rem">
        <TitleMobile>Popular Brands</TitleMobile>
      </Box>
      <Box>
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          alignItems="center"
        >
          {popularBrands.map(({ name, img }, i) => (
            <Grid key={i} item xs={2.2}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <img src={img} alt="name" />
                <Typography
                  fontFamily={`'Poppins', sans-serif`}
                  component={'p'}
                  variant="body2"
                  mt="10px"
                >
                  {name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Brands;

import React from 'react';

import Box from '@mui/material/Box';

import TitleMobile from '../helper/TitleMobile';

import { ScrollMenu } from 'react-horizontal-scrolling-menu';

const data = [
  {
    image: '/assets/mobile/cars/car1.svg',
  },
  {
    image: '/assets/mobile/cars/car2.svg',
  },
  {
    image: '/assets/mobile/cars/car3.svg',
  },
  {
    image: '/assets/mobile/cars/car4.svg',
  },
  {
    image: '/assets/mobile/cars/car5.svg',
  },
  {
    image: '/assets/mobile/cars/car6.svg',
  },
  {
    image: '/assets/mobile/cars/car7.svg',
  },
  {
    image: '/assets/mobile/cars/car8.svg',
  },
];

const CarType = () => {
  return (
    <Box>
      <Box mb="2rem">
        <TitleMobile>Car Type</TitleMobile>
      </Box>
      <Box>
        <ScrollMenu>
          {data.map(({ image }, i) => (
            <Box
              mr={'1rem'}
              itemId={i} // NOTE: itemId is required for track items
              title={i}
              key={i}
            >
              <img src={image} alt="datacar" />
            </Box>
          ))}
        </ScrollMenu>
      </Box>
    </Box>
  );
};

export default CarType;

import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ContainerFunc from '../components/helper/ContainerFunc';

const products = [
  {
    image: '/assets/products/find.svg',
    title: 'Find Car',
    desc: 'Our cars are located at prime areas where by there won’t be problem with transportation',
  },
  {
    image: '/assets/products/payment.svg',
    title: 'Make payments',
    desc: 'Our estates comes with good network, portable water, 24hrs light and round the clock security.',
  },
  {
    image: '/assets/products/secure.svg',
    title: 'Make it Official',
    desc: 'We have been in business for over 32 years, for client outside the country you can trust  us to deliver well.',
  },
];

const Products = () => {
  return (
    <Box sx={{ backgroundColor: '#232323' }}>
      <ContainerFunc>
        <Box
          display="flex"
          flexDirection={'column'}
          justifyContent="center"
          alignItems={'center'}
        >
          {/* Title */}
          <Box my="3rem">
            <Typography
              textAlign={'center'}
              fontFamily={`'Poppins', sans-serif`}
              color={'#EE1B24'}
              component={'h1'}
              variant="h3"
              fontWeight={'bold'}
              gutterBottom
            >
              How it Works.
            </Typography>
            <Typography
              fontFamily={`'Poppins', sans-serif`}
              textAlign={'center'}
              color="white"
              component={'h2'}
              variant="h4"
            >
              This is how our products works
            </Typography>
          </Box>

          {/* Products */}
          <Box
            display={'flex'}
            flexDirection="row"
            justifyContent={'space-between'}
            my="3rem"
          >
            {products.map(({ image, title, desc }, i) => (
              <Box
                key={i}
                display="flex"
                flexDirection="column"
                justifyContent={'center'}
                alignItems="center"
                flex={1}
              >
                <img src={image} alt="find" />
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent={'center'}
                  alignItems="center"
                >
                  <Typography
                    fontFamily={`'Poppins', sans-serif`}
                    color={'white'}
                    component={'h2'}
                    variant="h4"
                  >
                    {title}
                  </Typography>
                  <Typography
                    component={'p'}
                    variant="h6"
                    fontFamily={`'Poppins', sans-serif`}
                    color={'white'}
                    align="center"
                    padding="2rem 4rem"
                    sx={{ fontWeight: '400' }}
                  >
                    {desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </ContainerFunc>
    </Box>
  );
};

export default Products;

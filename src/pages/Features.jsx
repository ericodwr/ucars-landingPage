import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import ContainerFunc from '../components/helper/ContainerFunc';

const Features = () => {
  const contents = [
    {
      image: '/assets/cars/palace.svg',
      name: 'The Palace',
      subName: 'Lekki, phase 2',
      price: '$2,000',
    },
    {
      image: '/assets/cars/ivy.svg',
      name: 'IVY RORY',
      subName: 'Lekki, phase 2',
      price: '$2,000',
    },
    {
      image: '/assets/cars/picture.svg',
    },
  ];

  return (
    <Box>
      <ContainerFunc>
        <Box my="5rem">
          {/* Title */}
          <Box position="relative" mb="4rem">
            {/* title content */}
            <Typography
              fontFamily={`'Poppins', sans-serif`}
              color={'#EE1B24'}
              component={'h1'}
              variant="h3"
              fontWeight={'bold'}
              gutterBottom
            >
              Our Featured Vehicles.
            </Typography>

            {/* Sub title */}
            <Typography
              fontFamily={`'Poppins', sans-serif`}
              component={'h1'}
              variant="h4"
              gutterBottom
            >
              One of our biggest product to be featured
              <br /> and that has sold out the most.
            </Typography>

            {/* Button */}
            <Box
              sx={{
                position: 'absolute',
                right: '5rem',
                top: '7em',
              }}
            >
              <Button size="large" variant="contained" color="error">
                View More
              </Button>
            </Box>
          </Box>

          {/* Content */}
          <Box
            display={'flex'}
            flexDirection="row"
            alignItems={'center'}
            justifyContent="center"
          >
            {contents.map((content, i) => (
              <Box key={i} mx="4rem">
                <Box>
                  <img src={content.image} alt="content" />
                </Box>

                {/* Text */}
                {content.name && (
                  <Box
                    display="flex"
                    flexDirection={'row'}
                    justifyContent="space-between"
                    alignItems="center"
                    mt="4rem"
                  >
                    <Box>
                      <Typography
                        fontFamily={`'Poppins', sans-serif`}
                        component={'h1'}
                        variant="h4"
                      >
                        {content.name}
                      </Typography>
                      <Typography
                        fontFamily={`'Poppins', sans-serif`}
                        component={'p'}
                        variant="h6"
                      >
                        {content.subName}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        fontFamily={`'Poppins', sans-serif`}
                        component={'p'}
                        variant="h6"
                      >
                        Duplex
                      </Typography>
                      <Typography
                        fontFamily={`'Poppins', sans-serif`}
                        component={'p'}
                        variant="h6"
                        color="#EE1B24"
                        fontWeight="bold"
                      >
                        {content.price}
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </ContainerFunc>
    </Box>
  );
};

export default Features;

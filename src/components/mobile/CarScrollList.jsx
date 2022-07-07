import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import TitleMobile from '../helper/TitleMobile';

const CarScrollList = ({ title, data, news }) => {
  if (news) {
    return (
      <Box mb="6rem">
        <Box my="1rem">
          <TitleMobile>{title}</TitleMobile>
        </Box>
        <Box>
          <ScrollMenu>
            {data.map((newsInfo, i) => (
              <Box
                itemId={i} // NOTE: itemId is required for track items
                title={i}
                key={i}
                mr="1.2rem"
              >
                <Box>
                  <img src={newsInfo.image} alt="cars" />
                </Box>
                <Box display="flex">
                  <Typography
                    padding="3px 7px"
                    fontFamily={`'Poppins', sans-serif`}
                    component={'p'}
                    variant="caption"
                    my="0.3rem"
                    bgcolor={'#F1F1F1'}
                  >
                    News
                  </Typography>
                </Box>
                <Typography
                  fontFamily={`'Poppins', sans-serif`}
                  component={'p'}
                  variant="body2"
                  align="justify"
                >
                  {newsInfo.title.length > 60
                    ? `${newsInfo.title.substring(0, 57)}...`
                    : newsInfo.title}
                </Typography>
                <Box display="flex" flexDirection="row" my="0.3rem">
                  <Typography
                    fontFamily={`'Poppins', sans-serif`}
                    component={'p'}
                    variant="caption"
                    color="#5F5F5F"
                    mr="0.5rem"
                  >
                    {newsInfo.writer}
                  </Typography>
                  -
                  <Typography
                    ml="0.5rem"
                    fontFamily={`'Poppins', sans-serif`}
                    component={'p'}
                    color="#5F5F5F"
                    variant="caption"
                  >
                    {newsInfo.time}
                  </Typography>
                </Box>
              </Box>
            ))}
          </ScrollMenu>
        </Box>
      </Box>
    );
  }

  return (
    <Box>
      <Box my="1rem">
        <TitleMobile>{title}</TitleMobile>
      </Box>
      <Box>
        <ScrollMenu>
          {data.map((car, i) => (
            <Box
              itemId={i} // NOTE: itemId is required for track items
              title={i}
              key={i}
              mr="1.2rem"
            >
              <Box>
                <img src={car.image} alt="cars" />
              </Box>

              <Typography
                fontFamily={`'Poppins', sans-serif`}
                component={'p'}
                variant="body2"
                my="0.3rem"
              >
                {car.name}
              </Typography>
              <Typography
                fontFamily={`'Poppins', sans-serif`}
                component={'p'}
                variant="body2"
                fontWeight="bold"
              >
                {car.price}
              </Typography>
              {car.dateInfo && (
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  my="0.3rem"
                >
                  <Typography
                    fontFamily={`'Poppins', sans-serif`}
                    component={'p'}
                    variant="caption"
                    color="#5F5F5F"
                  >
                    {car.dateInfo}
                  </Typography>
                  -
                  <Typography
                    fontFamily={`'Poppins', sans-serif`}
                    component={'p'}
                    color="#5F5F5F"
                    variant="caption"
                  >
                    {car.kmInfo}
                  </Typography>
                  -
                  <Typography
                    fontFamily={`'Poppins', sans-serif`}
                    component={'p'}
                    color="#5F5F5F"
                    variant="caption"
                  >
                    {car.deprInfo}
                  </Typography>
                </Box>
              )}
            </Box>
          ))}
        </ScrollMenu>
      </Box>
    </Box>
  );
};

export default CarScrollList;

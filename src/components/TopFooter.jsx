import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const TopFooter = () => {
  return (
    <Container maxWidth="xl" sx={{ height: '72px' }}>
      <Box
        justifyContent="space-between"
        height="72px"
        display="flex"
        alignItems="center"
      >
        {/* Location and Email */}
        <Box
          display="flex"
          justifyContent={'space-around'}
          flexDirection="row"
          alignItems="center"
        >
          {/* Location */}

          <Box display="flex" alignItems="flex-start" marginLeft={'2rem'}>
            <img src="/assets/icons/locIcon.svg" alt="icons" />
            <Typography variant="body2" component="p" marginLeft={'0.7rem'}>
              71 Ayer Rajah Crescent, #06-14, <br />
              Singapore 139951
            </Typography>
          </Box>

          {/* Email */}
          <Box display="flex" alignItems="flex-start" marginLeft={'2rem'}>
            <img src="/assets/icons/emailIcon.svg" alt="icons" />
            <Typography variant="body2" marginLeft={'0.7rem'} component="p">
              Email us at:
              <br /> hello@carbuyer.com.sg
            </Typography>
          </Box>
        </Box>

        {/* Numbers */}
        <Box display="flex" alignItems="flex-start" marginRight={'2rem'}>
          <img src="/assets/icons/phoneIcon.svg" alt="icons" />
          <Typography variant="body2" component="p" marginLeft={'0.7rem'}>
            +65 8808 7905 <br />
            +7 (700) 51 51 518
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default TopFooter;

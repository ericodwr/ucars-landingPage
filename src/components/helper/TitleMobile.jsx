import React from 'react';

import Typography from '@mui/material/Typography';

const TitleMobile = ({ children }) => {
  return (
    <Typography
      fontFamily={`'Poppins', sans-serif`}
      component={'h1'}
      variant="h6"
      fontWeight="bold"
    >
      {children}
    </Typography>
  );
};

export default TitleMobile;

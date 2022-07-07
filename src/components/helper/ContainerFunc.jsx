import React from 'react';

import Container from '@mui/material/Container';

const ContainerFunc = ({ children }) => {
  return (
    <Container maxWidth="xl">
      <Container maxWidth="xl">
        <Container maxWidth="xl">{children}</Container>
      </Container>
    </Container>
  );
};

export default ContainerFunc;

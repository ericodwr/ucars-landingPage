import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Navbar from './components/Navbar';

import TopFooter from './components/TopFooter';

import {
  Cars,
  Features,
  Home,
  Products,
  Questions,
  About,
  Footer,
} from './pages/index';
import HomeMobile from './pages/Mobile/HomeMobile';
import NavBottom from './components/mobile/NavBottom';
import NavTop from './components/mobile/NavTop';

const App = () => {
  return (
    <>
      {/* Big Screen */}
      <Box sx={{ display: { xs: 'none', xl: 'block' } }}>
        <TopFooter />
        <Navbar />
        <Home />
        <Cars />
        <Products />
        <Features />
        <Questions />
        <About />
        <Footer />
      </Box>

      {/* Small Screen */}
      <Box sx={{ display: { xs: 'block', xl: 'none' } }}>
        <NavTop />
        <Container maxWidth="lg">
          <HomeMobile />
        </Container>
        <NavBottom />
      </Box>
    </>
  );
};

export default App;

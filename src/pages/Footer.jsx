import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import ContainerFunc from '../components/helper/ContainerFunc';

const contactInfo = [
  {
    icon: '/assets/icons/locIcon.svg',
    text: '71 Ayer Rajah Crescent, #06-14, Singapore 139951',
  },
  {
    icon: '/assets/icons/phoneIcon.svg',
    text: '+65 8808 7905',
  },
  {
    icon: '/assets/icons/emailIcon.svg',
    text: 'hello@carbuyer.com.sg',
  },
];

const about = [
  {
    name: 'About Us',
    link: '/',
  },
  {
    name: 'Contact Us',
    link: '/',
  },
  {
    name: 'Careers',
    link: '/',
  },
];

const services = [
  {
    name: 'Buy Used Cars',
    link: '/',
  },
  {
    name: 'Buy New Cars',
    link: '/',
  },
  {
    name: 'Be a Dealer with UCARS',
    link: '/',
  },
];

const resources = [
  {
    name: 'News',
    link: '/',
  },
  {
    name: 'Sell My Car',
    link: '/',
  },
  {
    name: 'COE Prices',
    link: '/',
  },
];

const socmed = [
  {
    icon: '/assets/icons/ig.svg',
    link: '/',
  },
  {
    icon: '/assets/icons/fb.svg',
    link: '/',
  },
  {
    icon: '/assets/icons/tele.svg',
    link: '/',
  },
  {
    icon: '/assets/icons/linkedin.svg',
    link: '/',
  },
  {
    icon: '/assets/icons/yt.svg',
    link: '/',
  },
];

const companyInfo = [
  {
    name: 'Advertising Terms and Conditions',
    link: '',
  },
  {
    name: 'Platform Terms and Conditions',
    link: '',
  },
  {
    name: 'Privacy Policy',
    link: '',
  },
];

const LinkInfo = ({ data, title }) => (
  <Box>
    {/* title */}
    <Box mb="1rem">
      <Typography
        variant="h6"
        component="p"
        fontWeight="bold"
        fontFamily={`font-family: 'Poppins', sans-serif;`}
      >
        {title}
      </Typography>
    </Box>

    {/* list */}
    {data.map(({ name, link }, i) => (
      <Box mb="1rem" key={i}>
        <a href={link} className="links">
          <Typography
            variant="body1"
            component="p"
            fontFamily={`font-family: 'Poppins', sans-serif;`}
            color="black"
            sx={{ ':hover': { borderBottom: '1px solid black' } }}
          >
            {name}
          </Typography>
        </a>
      </Box>
    ))}
  </Box>
);

const Footer = () => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
  };
  return (
    <Box>
      <ContainerFunc>
        {/* Container */}
        <Box my="2rem">
          {/* Top info */}
          <Box
            display="flex"
            flexDirection="row"
            alignItems="top"
            justifyContent="space-between"
            my="4rem"
          >
            {/* contact */}
            <Box>
              <img src="/assets/icons/carBuyer.svg" alt="icons" />
              <Box>
                {contactInfo.map(({ icon, text }, i) => (
                  <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    key={i}
                    mt="0.7rem"
                  >
                    <img
                      src={icon}
                      alt="iconcontact"
                      style={{ width: '15px' }}
                      className="homeBg"
                    />
                    <Typography
                      fontFamily={`font-family: 'Poppins', sans-serif`}
                      ml="10px"
                    >
                      {text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Links */}
            <LinkInfo data={about} title="About" />
            <LinkInfo data={services} title="Services" />
            <LinkInfo data={resources} title="Resources" />

            {/* Form */}
            <Box>
              <Typography
                fontFamily={`font-family: 'Poppins', sans-serif`}
                variant="body1"
                component="p"
              >
                Be first to latest news, reviews and content now!
              </Typography>
              <Box my="1rem">
                <form onSubmit={handleSubmit}>
                  <FormControl
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      height: '50px',
                    }}
                  >
                    <InputLabel htmlFor="component-outlined">
                      Enter your email
                    </InputLabel>
                    <OutlinedInput
                      // sx={{
                      //   width: '300px',
                      // }}
                      id="component-outlined"
                      value={name}
                      onChange={handleChange}
                      label="email"
                      required
                      type="email"
                    />
                    <Button
                      sx={{
                        fontFamily: `'Poppins', sans-serif`,
                      }}
                      variant="contained"
                      color="error"
                      type="submit"
                    >
                      Subscribe
                    </Button>
                  </FormControl>
                </form>
              </Box>

              {/* Socmed */}
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
                alignItems={'center'}
                sx={{
                  mt: '1.5rem',
                }}
              >
                <Typography>Follow Us:</Typography>
                <Box>
                  {socmed.map(({ icon, link }, i) => (
                    <IconButton sx={{ margin: '2px' }} key={i}>
                      <a href={link}>
                        <img src={icon} alt="socmed" />
                      </a>
                    </IconButton>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Bottom info */}
          <Box display={'flex'} justifyContent="space-between">
            {/* Left */}
            <Box>
              {/* Terms */}
              <Box display="flex" flexDirection={'row'} gap="2rem">
                {companyInfo.map(({ name, link }, i) => (
                  <Box key={i}>
                    <a href={link} className="links">
                      <Typography
                        variant="body1"
                        component="p"
                        fontFamily={`font-family: 'Poppins', sans-serif;`}
                        color="black"
                        sx={{ ':hover': { borderBottom: '1px solid black' } }}
                      >
                        {name}
                      </Typography>
                    </a>
                  </Box>
                ))}
              </Box>

              {/* Company */}
              <Box display="flex" mt="2rem" alignItems="center">
                <img src="/assets/icons/footerLogo.svg" alt="logow" />
                <Typography variant="body2" component="p" ml="1rem">
                  CarBuyer Pte Ltd and the CarBuyer Singapore brand are wholly
                  owned by UCARS Pte Ltd
                </Typography>
              </Box>
            </Box>

            {/* Right */}
            <Box>
              <Typography variant="body2" component="p">
                © 2022. All rights reserved.
              </Typography>
            </Box>
          </Box>
        </Box>
      </ContainerFunc>
    </Box>
  );
};

export default Footer;

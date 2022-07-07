import React from 'react';

import Box from '@mui/material/Box';
import Brands from '../../components/mobile/Brands';
import CarType from '../../components/mobile/CarType';
import CarScrollList from '../../components/mobile/CarScrollList';

const usedCars = [
  {
    name: 'Mazda 3 Sedan 1.5 SP (A)',
    image: '/assets/mobile/cars/mazda.svg',
    price: '$83,800',
    dateInfo: '05/10/11',
    kmInfo: '8,000 km',
    deprInfo: '$7,000 depr.',
  },
  {
    name: 'BMW 5 Series Sedan 520i (A)',
    image: '/assets/mobile/cars/bmw.svg',
    price: '$96,800',
    dateInfo: '05/10/11',
    kmInfo: '8,000 km',
    deprInfo: '$7,000 depr.',
  },
  {
    name: 'Honda CR-V 1.5 T 7-Seater (A)',
    image: '/assets/mobile/cars/honda.svg',
    price: '$139,000',
    dateInfo: '05/10/11',
    kmInfo: '8,000 km',
    deprInfo: '$7,000 depr.',
  },
  {
    name: 'Subaru Forester 2.0 XT (A)',
    image: '/assets/mobile/cars/subaru.svg',
    price: '$65,800',
    dateInfo: '05/10/11',
    kmInfo: '8,000 km',
    deprInfo: '$7,000 depr.',
  },
  {
    name: 'Honda Shuttle 1.5 [2017] (A)',
    image: '/assets/mobile/cars/hondashut.svg',
    price: '$67,800',
    dateInfo: '05/10/11',
    kmInfo: '8,000 km',
    deprInfo: '$7,000 depr.',
  },
];

const newCars = [
  {
    name: 'Tesla Model Y SUV',
    image: '/assets/mobile/cars/tesla.svg',
    price: '$142,271',
  },
  {
    name: 'Lamborghini Huracan',
    image: '/assets/mobile/cars/lambo.svg',
    price: '$250,800',
  },
  {
    name: 'Range Rover Mild Hybrid',
    image: '/assets/mobile/cars/landrov.svg',
    price: '$578,999',
  },
  {
    name: 'BMW 2 Series Coupé',
    image: '/assets/mobile/cars/bmw2.svg',
    price: '$264,888',
  },
  {
    name: 'Mercedes Benz E-Class E229d',
    image: '/assets/mobile/cars/mercy.svg',
    price: '$250,800',
  },
];

const news = [
  {
    image: '/assets/mobile/cars/news4.svg',
    title:
      'Volkswagen previews all-new electric sedan with plans for a 2023 launch',
    writer: 'Lionel Kong',
    time: '30m ago',
  },
  {
    image: '/assets/mobile/cars/news5.svg',
    title: `Hyundai announces Ioniq 6 'streamliner' sedan to rival Model 3
`,
    writer: 'Derryn Wong',
    time: '30m ago',
  },
  {
    image: '/assets/mobile/cars/news3.svg',
    title: 'Top 5 Cheapest Cars In Singapore Under $10,000',
    writer: 'Lionel Kong',
    time: '30m ago',
  },
  {
    image: '/assets/mobile/cars/news1.svg',
    title: 'We Rate The Best Car Cameras For Drivers',
    writer: 'UCARS Team',
    time: '30m ago',
  },
  {
    image: '/assets/mobile/cars/news2.svg',
    title: 'Singapore Budget 2021: What Do Drivers Need to Know',
    writer: 'UCARS Team',
    time: '30m ago',
  },
];

const HomeMobile = () => {
  return (
    <Box>
      <Box mt="4rem">
        <img
          src="/assets/mobile/cars/homeBg.svg"
          className="bgHome"
          alt="home"
        />
      </Box>
      <Box>
        <Brands />
        <CarType />
        <CarScrollList title={'Used Cars'} data={usedCars} />
        <CarScrollList title={'New Cars'} data={newCars} />
        <CarScrollList title={'Lates News'} data={news} news />
      </Box>
    </Box>
  );
};

export default HomeMobile;

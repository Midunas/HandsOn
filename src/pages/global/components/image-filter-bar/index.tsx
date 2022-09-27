/* eslint-disable no-lone-blocks */
import React from 'react';
import { Box, Avatar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  height: '100%',
  padding: theme.spacing(0, 2),
  textDecoration: 'none',
  color: 'black',
}));

const ImageFilters: React.FC = () => (
  <Box sx={{
    display: 'flex',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#deebe2',
    gap: 8,
  }}
  >
    <Link to="/gifts">
      <Box sx={{ textAlign: 'center' }}>
        <Avatar
          src="https://i.etsystatic.com/15614105/c/1000/794/811/1311/il/127374/2690378139/il_340x270.2690378139_azt6.jpg"
          style={{
            width: 100,
            height: 100,
          }}
        />
        Gifts
      </Box>
    </Link>

    <Link to="/home-decor">
      <Box>
        <Avatar
          src="https://i.etsystatic.com/35792067/r/il/da4b6c/3985545725/il_340x270.3985545725_gka5.jpg"
          style={{
            width: 100,
            height: 100,
          }}
        />
        Home Decor
      </Box>
    </Link>

    <Link to="/clothing">
      <Box sx={{ textAlign: 'center' }}>
        <Avatar
          src="https://i.etsystatic.com/5609612/c/1241/986/0/562/il/01baeb/3672998546/il_340x270.3672998546_e79j.jpg"
          style={{
            width: 100,
            height: 100,
          }}
        />
        Clothing
      </Box>
    </Link>
    <Link to="/clothing">
      <Box sx={{ textAlign: 'center' }}>
        <Avatar
          src="https://i.etsystatic.com/6437138/r/il/e26be1/1945220304/il_300x300.1945220304_14u5.jpg"
          style={{
            width: 100,
            height: 100,
          }}
        />
        Jewelry
      </Box>
    </Link>
    <Link to="/furniture">
      <Box
        sx={{ textAlign: 'center' }}
      >
        <Avatar
          src="https://i.etsystatic.com/8938001/c/2000/2000/0/0/il/e197e5/3904534040/il_300x300.3904534040_rhzn.jpg"
          style={{
            width: 100,
            height: 100,
          }}
        />
        Furniture
      </Box>
    </Link>
  </Box>
);

export default ImageFilters;

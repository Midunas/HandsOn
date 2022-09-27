import React from 'react';
import ApplicationBar from 'pages/global/components/application-bar';
import { Box, Typography } from '@mui/material';

const CartPage = () => (
  <>
    <ApplicationBar />
    <Box>
      <Typography variant="h4" sx={{ mt: -30 }}>
        Your car is empty.
      </Typography>
    </Box>
  </>
);

export default CartPage;

import React from 'react';
import { Box } from '@mui/material';

type MainContainerProps = {
  children: any,
};
const MainContainer: React.FC<MainContainerProps> = ({ children }) => (
  <Box sx={{ width: 1280, margin: 'auto' }}>
    {children}
  </Box>
);

export default MainContainer;

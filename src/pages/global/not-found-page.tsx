import * as React from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  styled,
} from '@mui/material';
import { Link as RRDLink } from 'react-router-dom';

const Link = styled(RRDLink)(({ theme }) => ({
  fontSize: 20,
  color: theme.palette.common.white,
}));

const NotFoundPage: React.FC = () => (
  <Box sx={{
    display: 'grid',
    placeItems: 'center',
    height: '100vh',
    width: '100vw',
  }}
  >
    <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
      <Typography color="error" variant="h2">Page not found</Typography>
      <Button variant="contained" sx={{ mt: 4 }}>
        <Link to="/" sx={{}}>Go to Home</Link>
      </Button>
    </Paper>
  </Box>
);

export default NotFoundPage;

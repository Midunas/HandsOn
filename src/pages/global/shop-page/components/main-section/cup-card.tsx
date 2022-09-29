import * as React from 'react';
import {
  Grid,
  Paper,
  Box,
  Typography,
  Button,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import Swiper from 'components/swiper';
import { useNavigate } from 'react-router-dom';

type CupCardProps = Omit<Cup, 'categoryId' | 'materialTypeId' | 'colorId'>;

const themeBlack = createTheme({
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});
const CupCard: React.FC<CupCardProps> = ({
  id,
  title,
  description,
  images,
  price,
}) => {
  const navigate = useNavigate();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper
        elevation={3}
        sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
      >
        <Box>
          <Swiper images={images} />
        </Box>
        <Box sx={{
          p: 2,
          pt: 1,
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        >
          <Box>
            <Box sx={{ mb: 1 }}>
              <ThemeProvider theme={themeBlack}>
                <Typography
                  component="div"
                  variant="h6"
                  sx={{
                    float: 'right',
                    ml: 1,
                    mb: 1,
                    color: 'primary',
                    fontSize: '18px',
                  }}
                >
                  {`${String(price).replace('.', ',')} €`}
                </Typography>
              </ThemeProvider>
              <Typography component="h2" variant="h5">{title}</Typography>
            </Box>
            <Box sx={{ height: 80, my: 2 }}>
              <Typography
                sx={{
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'elipsis',
                }}
              >
                {description}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              sx={{ width: '50%' }}
              onClick={() => navigate(`/cup/${id}`)}
            >
              View
            </Button>
            <Button
              variant="contained"
              sx={{ width: '50%' }}
              color="success"
            // onClick={() => console.log('Dėti į krepšelį:', id)}
            >
              Buy
            </Button>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default CupCard;

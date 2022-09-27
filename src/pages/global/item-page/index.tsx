import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Skeleton,
  Button,
  InputBase,
  Paper,
  IconButton,
  Divider,
} from '@mui/material';
import Swiper from 'components/swiper';
import CupService from 'services/cup-service';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CupPage: React.FC = () => {
  const { id } = useParams();
  const [cup, setCup] = React.useState<Cup | null>(null);

  if (id === undefined) return <Navigate to="/page-not-found" />;

  React.useEffect(() => {
    (async () => {
      const fetchedItem = await CupService.fetchSingle(id);

      setCup(fetchedItem);
    })();
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      {cup ? (
        <Paper
          elevation={0}
          sx={(theme) => ({
            mx: 'auto',
            maxWidth: { xs: 400, md: 'initial' },
            p: { xs: 3 },
            boxShadow: { xs: theme.shadows[3] },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 2,
          })}
        >
          <Box sx={{ width: { md: 500 } }}>
            <Swiper
              images={cup.images}
              sx={{ height: { xs: 300, md: 500 } }}
            />
          </Box>
          <Box sx={{
            flexGrow: { md: 1 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
          >
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography component="h1" variant="h4">{cup.title}</Typography>
                <Typography
                  component="div"
                  variant="h5"
                  color="success.main"
                  sx={{
                    fontWeight: 'medium',
                    whiteSpace: 'nowrap',
                    pt: 0.5,
                  }}
                >
                  {`${cup.price} $`}
                </Typography>
              </Box>

              <Divider textAlign="left" sx={{ my: 2 }}>Pagrindinė informacija</Divider>

              <Typography variant="body1" sx={{ fontWeight: 'medium', my: 2 }}>
                {cup.description}
              </Typography>
            </Box>

            <Box>
              <Divider textAlign="left" sx={{ my: 2 }}>Komercija</Divider>
              <Paper
                elevation={3}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  py: 0.5,
                  px: 2,
                  mb: 2,
                }}
              >
                <Typography>Kiekis</Typography>
                <Box>
                  <IconButton><AddIcon /></IconButton>
                  <InputBase value={2} sx={{ width: 40 }} inputProps={{ sx: { textAlign: 'center' } }} />
                  <IconButton><RemoveIcon /></IconButton>
                </Box>
              </Paper>

              <Button variant="contained" fullWidth size="large">Pridėti į krepšelį</Button>
            </Box>

          </Box>
        </Paper>
      ) : (
        <>
          <Skeleton variant="rectangular" width="100%" height={300} sx={{ mb: 3 }} />
          <Skeleton variant="rectangular" width="100%" height={20} sx={{ mb: 3 }} />
          <Skeleton variant="rectangular" width="100%" height={60} sx={{ mb: 3 }} />
        </>
      )}
    </Container>
  );
};

export default CupPage;

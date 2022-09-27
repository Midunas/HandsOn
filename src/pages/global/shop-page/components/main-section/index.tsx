import * as React from 'react';
import {
  Box,
  Typography,
  Grid,
  Divider,
} from '@mui/material';
import ShopContext from '../../contexts/shop-context';
import CupCard from './cup-card';

type MainSectionProps = {
  isExtendedLayout: boolean
};

const MainSection: React.FC<MainSectionProps> = () => {
  const { cups } = React.useContext(ShopContext);

  return (
    <Box
      component="main"
      sx={() => ({
        flexGrow: 1,
        p: 3,
        // ...(isExtendedLayout && {
        //   ml: `${theme.common.drawerWidth.md}px`,
        // }),
      })}
    >
      <Typography component="h1" variant="h5">All items</Typography>
      <Divider sx={{ mt: 2, mb: 3 }} />
      <Grid container spacing={3} sx={{ alignItem: 'stretch' }}>
        {cups.map((cup) => (
          <CupCard
            key={cup.id}
            id={cup.id}
            title={cup.title}
            description={cup.description}
            images={cup.images}
            price={cup.price}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default MainSection;

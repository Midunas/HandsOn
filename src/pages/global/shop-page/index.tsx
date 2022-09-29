import * as React from 'react';
import { useMediaQuery, type Theme, Box } from '@mui/material';
import SideBar from './components/side-bar';
import MainSection from './components/main-section';
import DrawerButton from './components/drawer-button';
import { DrawerProvider } from './contexts/drawer-context';
import { ShopContextProvider } from './contexts/shop-context';
import ImageFilters from '../components/image-filter-bar/index';
import MainContainer from '../../../components/container/main-container';

const ShopPage: React.FC = () => {
  const isExtendedLayout = useMediaQuery<Theme>((theme) => theme.breakpoints.up('xs'));

  return (
    <Box>
      <ImageFilters />
      <MainContainer>
        <ShopContextProvider>
          <DrawerProvider>
            <SideBar isExtendedLayout={!isExtendedLayout} />
            <MainSection isExtendedLayout={isExtendedLayout} />
            <DrawerButton />
          </DrawerProvider>
        </ShopContextProvider>
      </MainContainer>
    </Box>
  );
};

export default ShopPage;

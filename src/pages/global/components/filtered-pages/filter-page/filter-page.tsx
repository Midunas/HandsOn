import * as React from 'react';
import { useMediaQuery, type Theme, Box } from '@mui/material';
import SideBar from 'pages/global/shop-page/components/side-bar';
import MainSection from 'pages/global/shop-page/components/main-section';
import DrawerButton from 'pages/global/shop-page/components/drawer-button';
import MainContainer from 'components/container/main-container';
import { DrawerProvider } from 'pages/global/shop-page/contexts/drawer-context';
import { ShopContextProvider } from 'pages/global/shop-page/contexts/shop-context';

const FilterPage: React.FC = () => {
  const isExtendedLayout = useMediaQuery<Theme>((theme) => theme.breakpoints.up('xs'));

  return (
    <Box>
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
export default FilterPage;

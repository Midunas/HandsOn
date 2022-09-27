import * as React from 'react';
import {
  IconButton,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import DrawerContext from '../contexts/drawer-context';

const DrawerButton: React.FC = () => {
  const { open, toggleDrawer } = React.useContext(DrawerContext);

  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={toggleDrawer}
      size="large"
      sx={{
        position: 'fixed',
        bottom: 15,
        right: 15,
        bgcolor: 'primary.main',
        borderRadius: 1,
        WebkitBackfaceVisibility: 'hidden',
        color: 'common.white',
        ':hover': {
          bgcolor: 'primary.dark',
        },
        zIndex: 'drawerButton',
      }}
    >
      {open ? <ChevronLeftIcon /> : <DisplaySettingsIcon />}
    </IconButton>
  );
};

export default DrawerButton;

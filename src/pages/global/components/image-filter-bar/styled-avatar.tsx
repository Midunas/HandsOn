import {
  Avatar, styled, AvatarProps, alpha,
} from '@mui/material';

const StyledAvatar = styled(Avatar)<AvatarProps>(({ theme }) => ({
  width: 150,
  height: 150,
  color: theme.palette.success.main,
  '& .MuiSlider-thumb': {
    '&:hover, &.Mui-focusVisible': {
      boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
      height: 200,
      width: 200,
    },
    '&.Mui-active': {
      boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
    },
  },
}));

export default StyledAvatar;

import * as React from 'react';
import {
  Paper,
  Typography,
  Button,
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';

type AuthFormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  title: string,
  submitText: string,
  children: React.ReactNode,
  isValid?: boolean
};

const AuthForm: React.FC<AuthFormProps> = ({
  onSubmit,
  title,
  submitText,
  children,
  isValid = true,
}) => (
  <Paper
    component="form"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      width: 380,
      p: 4,
    }}
    elevation={10}
    onSubmit={onSubmit}
  >
    <SecurityIcon sx={{ fontSize: 50, alignSelf: 'center' }} color="primary" />
    <Typography component="h1" variant="h4" align="center">{title}</Typography>
    {children}
    <Button
      type="submit"
      variant="contained"
      sx={{ height: 60 }}
      size="large"
      disabled={!isValid}
    >
      {submitText}
    </Button>
  </Paper>
);

export default AuthForm;

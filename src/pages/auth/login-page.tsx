import * as React from 'react';
import { TextField, FormControlLabel, Button } from '@mui/material';
import CustomSizeCheckbox from 'components/form-controls/custom-size-checkbox';
import { NavLink } from 'react-router-dom';
import AuthForm from './components/auth-form';

const LoginPage: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [remember, setRemember] = React.useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Siunčiami duomenys į serverį, naudojant globalios būsenos valdymo įrankį:');
    console.log({
      email,
      password,
      remember,
    });
  };

  return (
    <AuthForm title="Sign in" submitText="Sign in" onSubmit={handleSubmit}>
      <Button sx={{ textDecoration: 'none' }}><NavLink to="/auth/register">register</NavLink></Button>
      <TextField
        variant="filled"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        variant="filled"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <FormControlLabel
        control={(
          <CustomSizeCheckbox
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
        )}
        label="Remember me"
      />
    </AuthForm>
  );
};

export default LoginPage;

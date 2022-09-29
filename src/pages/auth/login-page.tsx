import * as React from 'react';
import {
  TextField, FormControlLabel, Button, ThemeProvider,
} from '@mui/material';
import CustomSizeCheckbox from 'components/form-controls/custom-size-checkbox';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import { createTheme } from '@mui/material/styles';
import * as yup from 'yup';
import AuthForm from './components/auth-form';

type LoginValues = {
  email: string,
  password: string,
  remember: boolean,
};
const validationSchema = yup.object({
  email: yup.string()
    .required('Password is required')
    .email('Incorrect email'),
  password: yup.string()
    .required('Password is required')
    .min(8, 'Must be at least 8 characters'),
});

const LoginPage: React.FC = () => {
  const {
    values, touched, errors, isValid, dirty,
    handleChange, handleBlur, handleSubmit,
  } = useFormik<LoginValues>({
    initialValues: {
      email: '',
      password: '',
      remember: true,
    },

    onSubmit(formValues) {
      console.log(formValues);
    },

    validationSchema,
  });

  const themeBlack = createTheme({
    palette: {
      primary: {
        main: '#2b2a2a',
      },
      secondary: {
        main: '#0048ff',
      },
    },
  });

  return (
    <ThemeProvider theme={themeBlack}>
      <AuthForm
        title="Sign in"
        submitText="Sign in"
        onSubmit={handleSubmit}
        isValid={isValid && dirty}
      >
        <Button sx={{ textDecoration: 'none', color: 'primary' }}><NavLink to="/auth/register">register</NavLink></Button>
        <TextField
          name="email"
          variant="filled"
          label="Email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <TextField
          name="password"
          variant="filled"
          label="Password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
        />
        <FormControlLabel
          control={(
            <CustomSizeCheckbox
              name="remember"
              checked={values.remember}
              onChange={handleChange}
              onBlur={handleBlur}
              color="secondary"
            />
          )}
          label="Remember me"
        />
      </AuthForm>
    </ThemeProvider>
  );
};

export default LoginPage;

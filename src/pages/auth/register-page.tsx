/* eslint-disable max-len */
import * as React from 'react';
import { TextField, Autocomplete } from '@mui/material';
import CheckboxGroup, { CheckboxOption } from 'components/form-controls/checkbox-group';
import CategoriesService from 'services/categories-service';
import * as yup from 'yup';
import { useFormik } from 'formik';
import AuthForm from './components/auth-form';
import MarketingInterestsService from '../../services/marketing-interests-service';
/*
  1. Parsiųsti ir būsenos kintamuosiuose išsaugoti categories ir marketingIntrests duomenis
    * categories duomenis pritaikykite ir pateikite Autocomplete field'ui
    * marketingIntrests duomenis pritaikykite ir pateikite CheckboxGroup field'ui
  2. Sukurti Formik helper'ius naudojant useFormik hook'są
    * Įrašykite pradines reikšmes:
    * Įrašykite onSubmit funkciją
  3. Įgalinkite TextField laukams:
    * įgalinkite įvedamų reikšmių dvipusį susiejimą su formik.values
    * paliestumo būsenos saugojimą formik.fields objekte
    * pateikite validacijos schemą (KOLKAS TIK TextField LAUKAMS)
    * įgalinkite klaidų rodymą
  4. Pritaikykite AuthForm komponentui validumo reikšmė naudojant formik.dirty ir formik.isValid helper'ius
*/

type LoginValues = {
  email: string,
  password: string,
  categories: string,
  marketingInterest: boolean,
};

const categoryToCheckboxOption = ({ id, title }: Category): CheckboxOption => ({
  value: id,
  label: title,
});

const marketingInterestsToCheckboxOption = ({ id, title }: MarketingInterest): CheckboxOption => ({
  value: id,
  label: title,
});

const validationSchema = yup.object({
  email: yup.string()
    .required('Password is required')
    .email('Incorrect email'),
  password: yup.string()
    .required('Password is required')
    .min(8, 'Must be at least 8 characters'),
});

const RegisterPage: React.FC = () => {
  const [categoriesOptions, setCategoriesOptions] = React.useState<CheckboxOption[]>([]);
  const [
    marketingInterestsOptions,
    setMarketingInterestsOptions,
  ] = React.useState<CheckboxOption[]>([]);

  const {
    values, touched, errors, isValid, dirty,
    handleChange, handleBlur, handleSubmit,
  } = useFormik<LoginValues>({
    initialValues: {
      email: '',
      password: '',
      categories: '',
      marketingInterest: true,
    },

    onSubmit(formValues) {
      console.log(formValues);
    },

    validationSchema,
  });

  React.useEffect(() => {
    (async () => {
      const [
        fetchedCategories,
        fetchedMarketingInterests,
      ] = await Promise.all([
        CategoriesService.fetchMany(),
        MarketingInterestsService.fetchMany(),
      ]);

      setCategoriesOptions(fetchedCategories.map(categoryToCheckboxOption));
      setMarketingInterestsOptions(fetchedMarketingInterests.map(marketingInterestsToCheckboxOption));
    })();
  }, []);

  return (
    <AuthForm
      title="Register"
      submitText="Register"
      onSubmit={handleSubmit}
      isValid={isValid && dirty}
    >
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
      <Autocomplete
        options={categoriesOptions}
        multiple
        renderInput={(inputProps) => (
          <TextField
            label="Points of interest"
            name="categories"
            variant="filled"
            {...inputProps}
          />
        )}
      />
      <CheckboxGroup
        label="Marketing Interests"
        name="marketingInterests"
        options={marketingInterestsOptions}
      />
    </AuthForm>
  );
};

export default RegisterPage;

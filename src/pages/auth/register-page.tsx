import * as React from 'react';
import { TextField, Autocomplete } from '@mui/material';
import CheckboxGroup, { CheckboxOption } from 'components/form-controls/checkbox-group';
import AuthForm from './components/auth-form';

type ContentType = {
  id: string,
  title: string
};

type Topic = {
  id: string,
  title: string
};

const contentType2CheckboxOption = ({ id, title }: ContentType): CheckboxOption => ({
  value: id,
  label: title,
});

const checkboxOptionToContentType = ({ value, label }: CheckboxOption): ContentType => ({
  id: value,
  title: label,
});

const topics: Topic[] = [
  { id: '1', title: 'HTML' },
  { id: '2', title: 'CSS' },
  { id: '3', title: 'JavaScript' },
  { id: '4', title: 'DOM' },
  { id: '5', title: 'TypeScript' },
  { id: '6', title: 'Webpack' },
  { id: '7', title: 'GIT' },
  { id: '8', title: 'React' },
  { id: '9', title: 'Node' },
  { id: '10', title: 'Express' },
  { id: '11', title: 'SQL' },
  { id: '12', title: 'MongoDB' },
];

const contentTypes: ContentType[] = [
  { id: '1', title: 'Journals' },
  { id: '2', title: 'Videos' },
  { id: '3', title: 'Queries' },
  { id: '4', title: 'Tasks' },
];

const contentTypeOptions = contentTypes.map(contentType2CheckboxOption);

const RegisterPage: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [selectedTopics, setSelectedTopics] = React.useState<Topic[]>([]);
  const [selectedContentTypes, setSelectedContentTypes] = React.useState<CheckboxOption[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Siunčiami duomenys į serverį, naudojant globalios būsenos valdymo įrankį:');
    console.log({
      email,
      password,
      selectedTopics,
      selectedContentTypes: selectedContentTypes.map(checkboxOptionToContentType),
    });
  };

  return (
    <AuthForm title="Register" submitText="Register" onSubmit={handleSubmit}>
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
      <Autocomplete
        options={topics}
        multiple
        getOptionLabel={({ title }) => title}
        value={selectedTopics}
        onChange={(_, newSelectedTopics) => setSelectedTopics(newSelectedTopics)}
        renderInput={(inputProps) => (
          <TextField
            label="Topics of interest"
            variant="filled"
            {...inputProps}
          />
        )}
      />
      <CheckboxGroup
        label="Preferred format"
        name="interest-types"
        options={contentTypeOptions}
        value={selectedContentTypes}
        onChange={(_, newContentTypes) => setSelectedContentTypes(newContentTypes)}
      />
    </AuthForm>
  );
};

export default RegisterPage;

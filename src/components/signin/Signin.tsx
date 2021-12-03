import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Checkbox, Container, FormControlLabel, Typography } from '@mui/material';
import { Field, Formik } from 'formik';
import { TextField } from 'formik-mui';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { User } from '../../../interfaces';
import users from '../../users.json';
import Copyright from '../copyrigth/Copyrigth';
import { FlexColumn, FlexCenter, SignInButton } from './Signin.styles';
import validationSchema from './validationSchema';

import 'react-toastify/dist/ReactToastify.css';

const Signin: React.FC = () => {
  const navigate = useNavigate();

  const initialValues: User = {
    username: '',
    password: '',
  };

  const isAuthenticated = (userFormData: User, usersData: User[]): boolean => {
    const foundUser = usersData.find((user) => user.username === userFormData.username);
    if (foundUser) {
      return foundUser.username === userFormData.username && foundUser.password === userFormData.password;
    }
    return false;
  };

  const notifyError = (): React.ReactText => toast.error('User is not authenticated');

  const handleSubmitForm = (values: User): void => {
    if (isAuthenticated(values, users)) {
      navigate('/home');
    } else {
      notifyError();
    }
  };

  return (
    <Container component='main' maxWidth='xs'>
      <FlexCenter>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmitForm}>
          {({ handleChange, handleBlur, submitForm, values }) => (
            <FlexColumn>
              <Field
                component={TextField}
                margin='normal'
                fullWidth
                name='username'
                label='Username'
                type='text'
                id='username'
                autoComplete='username'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              <Field
                component={TextField}
                margin='normal'
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <SignInButton type='submit' fullWidth variant='contained' onClick={submitForm}>
                Sign In
              </SignInButton>
              <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />
            </FlexColumn>
          )}
        </Formik>
      </FlexCenter>
      <Copyright />
      <ToastContainer />
    </Container>
  );
};

export default Signin;
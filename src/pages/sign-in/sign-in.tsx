import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Checkbox, Container, FormControlLabel, Typography } from '@mui/material';
import { Field, Formik } from 'formik';
import { TextField } from 'formik-mui';
import React, { ReactElement, ReactText } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import UserAuth from '../../components/auth/user-auth';
import Copyright from '../../components/copyrigth/copyrigth';
import { APP_ROUTES } from '../../enums';
import { useAppSelector } from '../../hooks';
import { User } from '../../interfaces';
import { usersSelector } from '../../store/users.slices';
import { FlexColumn, FlexCenter, SignInButton } from './sign-in.styles';
import validationSchema from './validationSchema';

const Signin = (): ReactElement => {
  const navigate = useNavigate();

  const users: User[] = useAppSelector(usersSelector.selectAll);

  const initialValues: User = {
    id: '',
    username: '',
    password: '',
  };

  const userAuth = new UserAuth();

  const isAuthenticated = (userFormData: User, usersData: User[]): boolean => {
    const foundUser = usersData.find((user) => user.username === userFormData.username);
    if (foundUser) {
      return foundUser.username === userFormData.username && foundUser.password === userFormData.password;
    }
    return false;
  };

  const notifyError = (): ReactText => toast.error('User is not authenticated');

  const handleSubmitForm = (values: User): void => {
    if (isAuthenticated(values, users)) {
      userAuth.setUserAuthenticated(true);
      navigate(APP_ROUTES.HOME);
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

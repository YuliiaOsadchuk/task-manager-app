import { Link, Typography } from '@mui/material';
import React, { ReactElement } from 'react';

const YEAR = new Date().getFullYear();

const Copyright = (): ReactElement => (
  <Typography variant='body2' color='text.secondary' align='center'>
    Copyright ©
    <Link color='inherit' href='https://mui.com/'>
      Your Website
    </Link>
    {YEAR}
  </Typography>
);

export default Copyright;

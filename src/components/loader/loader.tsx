import { CircularProgress } from '@mui/material';
import React, { FC } from 'react';

import { CenteredBox } from './loader.styles';

const Loader: FC = () => (
  <CenteredBox>
    <CircularProgress />
  </CenteredBox>
);

export default Loader;

import { CircularProgress } from '@mui/material';
import React, { ReactElement } from 'react';

import { CenteredBox } from './progress.styles';

const Progress = (): ReactElement => (
  <CenteredBox>
    <CircularProgress />
  </CenteredBox>
);

export default Progress;

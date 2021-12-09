import React, { lazy } from 'react';

import { withSuspense } from '../../with-suspense';
import Progress from '../progress/progress';

const SigninLazy = lazy(() => import('./sign-in'));

export default withSuspense(SigninLazy, <Progress />);

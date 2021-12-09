import React, { lazy } from 'react';

import { withSuspense } from '../../with-suspense';
import Progress from '../progress/progress';

const HomeLazy = lazy(() => import('./home'));

export default withSuspense(HomeLazy, <Progress />);

import { lazy } from 'react';

import { withSuspense } from '../../with-suspense';

const HomeLazy = lazy(() => import('./home'));

export default withSuspense(HomeLazy);

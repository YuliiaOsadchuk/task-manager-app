import { lazy } from 'react';

import { withSuspense } from '../../with-suspense';

const SigninLazy = lazy(() => import('./sign-in'));

export default withSuspense(SigninLazy);

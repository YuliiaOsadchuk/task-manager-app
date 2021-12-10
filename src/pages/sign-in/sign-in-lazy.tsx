import { lazy } from 'react';

import { withSuspense } from '../../hocs/with-suspense';

const SigninLazy = lazy(() => import('./sign-in'));

export default withSuspense(SigninLazy);

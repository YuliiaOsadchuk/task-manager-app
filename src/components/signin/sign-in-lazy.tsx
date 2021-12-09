import { FC, lazy, LazyExoticComponent } from 'react';

import { routeWithSuspense } from '../../route-with-suspense';
import Loader from '../loader/loader';

const SigninLazy: LazyExoticComponent<FC> = lazy(() => import('./sign-in'));

export default routeWithSuspense(SigninLazy, Loader);

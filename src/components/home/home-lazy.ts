import { FC, lazy, LazyExoticComponent } from 'react';

import { routeWithSuspense } from '../../route-with-suspense';
import Loader from '../loader/loader';

const HomeLazy: LazyExoticComponent<FC> = lazy(() => import('./home'));

export default routeWithSuspense(HomeLazy, Loader);

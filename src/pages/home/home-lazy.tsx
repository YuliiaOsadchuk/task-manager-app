import { lazy } from 'react';

import { withSuspense } from '../../hocs/with-suspense';

const HomeLazy = lazy(() => import('./home'));

export default withSuspense(HomeLazy);

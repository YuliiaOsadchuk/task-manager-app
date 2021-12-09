import React, { Suspense, FC, LazyExoticComponent, ReactElement, ComponentType } from 'react';

import Progress from './components/progress/progress';

interface RouteWithSuspenseProps {
  Component?: LazyExoticComponent<ComponentType>;
  loader?: ReactElement;
}

const DEFAULT_LOADER = <Progress />;

/**
 * This HOC intended to wrap components that you want to lazy load {@link https://reactjs.org/docs/code-splitting.html}
 *
 * @param {React.LazyExoticComponent<React.FC>} Component Component that you want to exclude from bundle and lazy load on demand
 * @param {React.ReactElement} loader Component that will be displayed till component load
 *
 * @example const componentToBeLazyLoaded = withSuspense(lazy(() => import(pathToComponent)));
 */

export const withSuspense =
  (Component: LazyExoticComponent<FC>, loader: ReactElement = DEFAULT_LOADER): FC<RouteWithSuspenseProps> =>
  (props): ReactElement =>
    (
      <Suspense fallback={loader}>
        <Component {...props} />
      </Suspense>
    );

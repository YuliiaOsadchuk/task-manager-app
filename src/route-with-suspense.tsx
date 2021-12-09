import React, { Suspense, FC, LazyExoticComponent, ReactElement, ComponentType } from 'react';

interface RouteWithSuspenseProps {
  Component?: LazyExoticComponent<ComponentType>;
  loader?: ReactElement;
}

export const routeWithSuspense =
  (Component: LazyExoticComponent<FC>, Loader: FC): FC<RouteWithSuspenseProps> =>
  (props): ReactElement =>
    (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    );

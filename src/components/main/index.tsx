import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Simple = lazy(() => import('@components/simple'));

export const Main = () => {
  return (
    <Suspense fallback={<div>Wczytywanie...</div>}>
      <Switch>
        <Route exact={true} path={'/'} component={Simple} />
      </Switch>
    </Suspense>
  );
};

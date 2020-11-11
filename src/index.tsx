import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Main } from '@components/main';

const rootElement = document.getElementById('root');

const renderApp = (Component: () => JSX.Element) => {
  ReactDOM.render(
    <Router>
      <Component />
    </Router>,
    rootElement
  );
};

renderApp(Main as () => JSX.Element);

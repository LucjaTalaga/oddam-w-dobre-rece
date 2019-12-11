import React from 'react';
import logo from './logo.svg';
import './scss/main.scss';
import Home from './components/Home';

import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

function App() {
  return (
      <HashRouter>
        <>
          <Route exact path='/' component={Home} />
        </>
      </HashRouter>
  );
}

export default App;

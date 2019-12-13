import React from 'react';
import logo from './logo.svg';
import './scss/main.scss';
import Home from './components/Home';
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Register from "./components/Register";

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
            <Navigation/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
            </Switch>
        </>
      </HashRouter>
  );
}

export default App;

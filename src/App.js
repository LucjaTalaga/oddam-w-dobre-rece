import React from 'react';
import logo from './logo.svg';
import './scss/main.scss';
import Home from './components/Home';
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import Firebase, {FirebaseContext, withFirebase} from './components/Firebase/index'

import {
  HashRouter,
  Route,
  Switch,
    withRouter
} from 'react-router-dom';

const RegisterWithFirebase = withRouter(withFirebase(Register));

function App() {
  return (
      <HashRouter>
        <>
            <Navigation/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={RegisterWithFirebase}/>
                <Route path='/logout' component={Logout} />
            </Switch>
        </>
      </HashRouter>
  );
}

export default App;

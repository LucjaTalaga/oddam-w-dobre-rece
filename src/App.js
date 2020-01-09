import React, {Component} from 'react';
import logo from './logo.svg';
import './scss/main.scss';
import Home from './components/Home';
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import GiveBack from "./components/GiveBack";
import Firebase, {FirebaseContext, withFirebase} from './components/Firebase/index'

import {
  HashRouter,
  Route,
  Switch,
    withRouter
} from 'react-router-dom';

const RegisterWithFirebase = withRouter(withFirebase(Register));
const LoginWithFirebase = withRouter(withFirebase(Login));
const NavigationWithFirebase = withFirebase(Navigation);

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authUser: null
        }
    }
    componentDidMount() {
        this.props.firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? this.setState({ authUser })
                : this.setState({ authUser: null });
        });
    }

    render() {
        return (
            <HashRouter>
                <>
                    <NavigationWithFirebase authUser={this.state.authUser}/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/login' component={LoginWithFirebase}/>
                        <Route path='/register' component={RegisterWithFirebase}/>
                        <Route path='/logout' component={Logout}/>
                        <Route path='/give-back' component={GiveBack}/>
                    </Switch>
                </>
            </HashRouter>
        );
    }
}

export default withFirebase(App);

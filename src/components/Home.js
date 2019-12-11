import React, {Component} from "react";
import ReactDOM from "react-dom";

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import logo from "../logo.svg";
import HomeHeader from "./HomeComponents/HomeHeader";

class Home extends Component {
    render() {
        return (
         <>
             <HomeHeader/>

         </>
        )
    }

}

export default Home;
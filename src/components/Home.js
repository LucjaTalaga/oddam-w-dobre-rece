import React, {Component} from "react";
import ReactDOM from "react-dom";

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import HomeHeader from "./HomeComponents/HomeHeader";
import HomeThreeColumns from "./HomeComponents/HomeThreeColumns";

class Home extends Component {
    render() {
        return (
         <>
             <HomeHeader name='HomeHeader'/>
             <HomeThreeColumns name='HomeThreeColumns'/>
         </>
        )
    }

}

export default Home;
import React, {Component} from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import HomeHeader from "./HomeComponents/HomeHeader";
import HomeThreeColumns from "./HomeComponents/HomeThreeColumns"

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

import { Link as scrollLink } from 'react-scroll';

class Navigation extends Component{

    render() {
        return (
            <nav>
                <ul className='linkList flex-box'>
                    <li><Link className='link' to="/login">Zaloguj się</Link></li>
                    <li><Link className='link register' to="/register">Załóż konto</Link></li>
                </ul>
                <ul className='scrollList flex-box'>
                    <li><scrollLink className='scrollLink start' to={HomeHeader} spy={true}>Start</scrollLink></li>
                    <li><scrollLink className='scrollLink' to={HomeThreeColumns} spy={true}>O co chodzi?</scrollLink></li>
                    <li><scrollLink className='scrollLink' spy={true}>O nas</scrollLink></li>
                    <li><scrollLink className='scrollLink' spy={true}>Fundacja i organizacje</scrollLink></li>
                    <li><scrollLink className='scrollLink' spy={true}>kontakt</scrollLink></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;
import React, {Component} from "react";
import ReactDOM from "react-dom";
import Home from "./Home";

import {
    Link,
} from 'react-router-dom';

import {Link as ScrollLink} from 'react-scroll';

class Navigation extends Component {

    state = {
        theposition: 0
    };

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight

        const scrolled = winScroll / height

        this.setState({
            theposition: scrolled,
        })
    };

    render() {
        return (
            <section className={this.state.theposition !== 0 ? 'navBackground navigation' : 'navigation' }>
                <nav>
                    <ul className='linkList flex-box'>
                        <li><Link className='link' to="/login">Zaloguj się</Link></li>
                        <li><Link className='link register' to="/register">Załóż konto</Link></li>
                    </ul>
                    <ul className='scrollList flex-box'>
                        <li><ScrollLink className='scrollLink start' activeClass='active' to='HomeHeader' spy={true}
                                        smooth={true}>Start</ScrollLink></li>
                        <li><ScrollLink className='scrollLink' activeClass='active' to='HomeThreeColumns' smooth={true}
                                        spy={true}>O co chodzi?</ScrollLink></li>
                        <li><ScrollLink className='scrollLink' spy={true} to='HomeAboutUs' smooth={true} spy={true}>O
                            nas</ScrollLink></li>
                        <li><ScrollLink className='scrollLink' spy={true} smooth={true} activeClass='active'
                                        to='HomeWhoWeHelp'>Fundacja i organizacje</ScrollLink></li>
                        <li><ScrollLink className='scrollLink' spy={true} smooth={true} activeClass='active'
                                        to='HomeContact'>kontakt</ScrollLink></li>
                    </ul>
                </nav>
            </section>
        );
    }
}

export default Navigation;
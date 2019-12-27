import React, {Component} from "react";
import ReactDOM from "react-dom";
import decoration from "../assets/Decoration.svg";
import {
    Link,
} from 'react-router-dom';


class Logout extends Component {

    render() {
        return (
            <section className='logout flex-box'>
                <div className='logoutForm flex-box'>
                    <h1>Wylogowanie nastąpiło <br/> pomyślnie</h1>
                    <img src={decoration}></img>
                    <button><Link to="/" className='logoutLink'>Strona główna</Link></button>
                </div>
            </section>
        )
    }
}

export default Logout;
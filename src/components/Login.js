import React, {Component} from "react";
import ReactDOM from "react-dom";
import decoration from "../assets/Decoration.svg";
import {
    Link,
} from 'react-router-dom';


class Login extends Component {
    render() {
        return (
            <section className='login flex-box'>
                <div className='loginForm flex-box'>
                    <h1>Zaloguj się</h1>
                    <img src={decoration}></img>
                    <form>
                        <div className='labels flex-box'>
                            <label id="name">Email<br/>
                                <input type="text" name="name"/>
                            </label>
                            <label id="email">Hasło<br/>
                                <input type="email" name="email"/>
                            </label>
                        </div>
                        <button><Link to="/register" className='loginLink'>Załóż konto</Link></button>
                        <button>Zaloguj się</button>
                    </form>
                </div>
            </section>
        )
    }

}

export default Login;
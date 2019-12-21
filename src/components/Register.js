import React, {Component} from "react";
import ReactDOM from "react-dom";
import decoration from "../assets/Decoration.svg";
import {
    Link,
} from 'react-router-dom';


class Register extends Component {
    render() {
        return (
            <section className='register flex-box'>
                <div className='registerForm flex-box'>
                    <h1>Załóż konto</h1>
                    <img src={decoration}></img>
                    <form>
                        <div className='labels flex-box'>
                            <label id="name">Email<br/>
                                <input type="text" name="name"/>
                            </label>
                            <label id="pass">Hasło<br/>
                                <input type="password" name="pass"/>
                            </label>
                            <label id="passRepeat">Powtórz hasło<br/>
                                <input type="password" name="passRepeat"/>
                            </label>
                        </div>
                        <button><Link to="/login" className='registerLink'>Zaloguj się</Link></button>
                        <button>Załóż konto</button>
                    </form>
                </div>
            </section>
        )
    }

}

export default Register;
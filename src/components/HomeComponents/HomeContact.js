import React, {Component} from "react";
import decoration from '../../assets/Decoration.svg';


class HomeContact extends Component {
    render() {
        return (
            <section className='contact flex-box'>
                <div className='contactForm flex-box'>
                    <h1>Skontaktuj się z nami</h1>
                    <img src={decoration}></img>
                    <form>
                        <div className='labels flex-box'>
                            <label id="name">Wpisz swoje imię <br/>
                                <input type="text" name="username"/>
                            </label>
                            <label id="email">Wpisz swój email <br/>
                                <input type="email" name="usermail"/>
                            </label>
                        </div>
                        <label id="textarea">Wpisz swoją wiadomość<br/>
                            <textarea type="text" name="sometext"
                                   placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                        </label>
                        <button>Wyślij</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default HomeContact;
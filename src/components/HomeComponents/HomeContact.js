import React, {Component} from "react";
import decoration from '../../assets/Decoration.svg';


class HomeContact extends Component {

    state = {
        name: "",
        email: "",
        text:""
    };
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Nazwa: ${this.state.name}`);
        console.log(`W: ${this.state.text}`);
        const submitData = {
            "data":[
                this.state.name,
                this.state.email,
                this.state.text
            ]
        }
        fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
            method: 'POST',
            body: JSON.stringify(submitData)
        }).then( resp => {
            return resp.text();
        }).then( text => {
            console.log(text);
        });
    };
    render() {
        const {name, email, text} = this.state;
        return (
            <section className='contact flex-box'>
                <div className='contactForm flex-box'>
                    <h1>Skontaktuj się z nami</h1>
                    <img src={decoration}></img>
                    <form onSubmit={this.handleSubmit}>
                        <div className='labels flex-box'>
                            <label id="name">Wpisz swoje imię <br/>
                                <input type="text" name="name" value={name} onChange={this.handleChange}/>
                            </label>
                            <label id="email">Wpisz swój email <br/>
                                <input type="email" name="email" value={email} onChange={this.handleChange}/>
                            </label>
                        </div>
                        <label id="textarea">Wpisz swoją wiadomość<br/>
                            <textarea type="text" name="text" value={text} onChange={this.handleChange}
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
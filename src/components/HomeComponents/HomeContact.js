import React, {Component} from "react";
import decoration from '../../assets/Decoration.svg';


class HomeContact extends Component {

    state = {
        name: "",
        email: "",
        message: ""
    };
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const submitData = {
            "name": this.state.name,
            "email": this.state.email,
            "message": this.state.message

        };
        fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(submitData)
        }).then(resp => {
            return resp.text();
        }).then(text => {
            console.log(text);
        });
    };
    render() {
        const {name, email, message} = this.state;
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
                            <textarea type="text" name="message" value={message} onChange={this.handleChange}
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
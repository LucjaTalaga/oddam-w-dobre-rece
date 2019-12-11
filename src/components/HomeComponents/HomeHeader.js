import React, {Component} from "react";
import ReactDOM from "react-dom";
import logo from "../../logo.svg";



class HomeHeader extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and load to resave, HomeHeader.
                    </p>
                    <a
                        className="App-link"
                        href="https://www.youtube.com/watch?v=Cn2XPRPmYF0"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        )
    }

}

export default HomeHeader;

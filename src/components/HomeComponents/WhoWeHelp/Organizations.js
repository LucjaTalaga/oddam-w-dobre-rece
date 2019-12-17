import React, {Component} from "react";
import decoration from '../../../assets/Decoration.svg';


class Organizations extends Component {
    state = {
        page1: 'show',
        page2: 'hidden',
    };
    foundationButtonHandler = () => {
        this.props.foundation();
    };

    organizationButtonHandler = () => {
        this.props.organization();
    };

    localsButtonHandler = () => {
        this.props.local();
    };

    page1ButtonHandler = () => {
        this.setState({
            page1: 'show',
            page2: 'hidden',
        });
    };
    page2ButtonHandler = () => {
        this.setState({
            page1: 'hidden',
            page2: 'show',
        });
    };

    render() {
        return (
            <section className='whoWeHelp flex-box' id='HomeWhoWeHelp'>
                <h1>Komu pomagamy?</h1>
                <img src={decoration}/>
                <div className='typesOfSupports'>
                    <button onClick={this.foundationButtonHandler}>Fundacjom</button>
                    <button onClick={this.organizationButtonHandler} className='activeButton'>Organizacjom
                        pozarządowym
                    </button>
                    <button onClick={this.localsButtonHandler}>Lokalnym zbiórkom</button>
                </div>
                <p>Lorem Ipsum ...</p>
                <div className='organizations' className={this.state.page1}>
                    <div className='organization flex-box'>
                        <div>
                            <h1>Organizacja "Lorem Ipsum1"</h1>
                            <p>Cel i misja: Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                        </div>
                        <div>
                            <p>Ubrania, sprzęt, ksiązki </p>
                        </div>
                    </div>
                    <div className='organization flex-box'>
                        <div>
                            <h1>Fundacja "Dla dzieci"</h1>
                            <p>Cel i misja: Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                        </div>
                        <div>
                            <p>Ubrania, sprzęt, ksiązki </p>
                        </div>
                    </div>
                    <div className='organization flex-box'>
                        <div>
                            <h1>Fundacja "Bez domu"</h1>
                            <p>Cel i misja: Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                        </div>
                        <div>
                            <p>Ubrania, sprzęt, ksiązki </p>
                        </div>
                    </div>
                </div>
                <div className='organizations' className={this.state.page2}>
                    <div className='organization flex-box'>
                        <div>
                            <h1>Organizacja "Lorem Ipsum4"</h1>
                            <p>Cel i misja: Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                        </div>
                        <div>
                            <p>Ubrania, sprzęt, ksiązki </p>
                        </div>
                    </div>
                    <div className='organization flex-box'>
                        <div>
                            <h1>Fundacja "Dla dzieci"</h1>
                            <p>Cel i misja: Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                        </div>
                        <div>
                            <p>Ubrania, sprzęt, ksiązki </p>
                        </div>
                    </div>
                    <div className='organization flex-box'>
                        <div>
                            <h1>Fundacja "Bez domu"</h1>
                            <p>Cel i misja: Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                        </div>
                        <div>
                            <p>Ubrania, sprzęt, ksiązki </p>
                        </div>
                    </div>
                </div>
                <div className='pageNumbers'>
                    <button onClick={this.page1ButtonHandler}>1</button>
                    <button onClick={this.page2ButtonHandler}>2</button>
                </div>
            </section>
        );
    }
}

export default Organizations;
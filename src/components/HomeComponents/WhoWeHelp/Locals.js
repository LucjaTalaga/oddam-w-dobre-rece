import React, {Component} from "react";
import decoration from '../../../assets/Decoration.svg';


class Locals extends Component {

    foundationButtonHandler = () => {
        this.props.foundation();
    };

    organizationButtonHandler = () => {
        this.props.organization();
    };

    localsButtonHandler = () => {
        this.props.local();
    };
    render() {
        return (
            <section className='whoWeHelp flex-box' id='HomeWhoWeHelp'>
                <h1>Komu pomagamy?</h1>
                <img src={decoration}/>
                <div className='typesOfSupports'>
                    <button onClick={this.foundationButtonHandler}>Fundacjom</button>
                    <button onClick={this.organizationButtonHandler}>Organizacjom pozarządowym</button>
                    <button onClick={this.localsButtonHandler} className='activeButton'>Lokalnym zbiórkom</button>
                </div>
                <p>Lorem Ipsum ...</p>
                <div className='organizations'>
                    <div className='organization flex-box'>
                        <div>
                            <h1>Zbiórka "Lorem Ipsum1"</h1>
                            <p>Cel i misja: Pomoc dla potrzebujących</p>
                        </div>
                        <div>
                            <p>Ubrania, sprzęt, ksiązki </p>
                        </div>
                    </div>
                    <div className='organization flex-box'>
                        <div>
                            <h1>Fundacja "Dla dzieci"</h1>
                            <p>Cel i misja: Pomoc dla potrzebujących</p>
                        </div>
                        <div>
                            <p>Ubrania, sprzęt, ksiązki </p>
                        </div>
                    </div>
                    <div className='organization flex-box'>
                        <div>
                            <h1>Fundacja "Bez domu"</h1>
                            <p>Cel i misja: Pomoc dla potrzebujących</p>
                        </div>
                        <div>
                            <p>Ubrania, sprzęt, ksiązki </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Locals;
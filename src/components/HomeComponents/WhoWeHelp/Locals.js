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
            <div className='flex-box whoWeHelp_Container'>
                <section className='whoWeHelp flex-box' id='HomeWhoWeHelp'>
                    <h1>Komu pomagamy?</h1>
                    <img src={decoration}/>
                    <div className='typesOfSupports flex-box'>
                        <button onClick={this.foundationButtonHandler}>Fundacjom</button>
                        <button onClick={this.organizationButtonHandler}>Organizacjom <br/> pozarządowym</button>
                        <button onClick={this.localsButtonHandler} className='activeButton'>Lokalnym <br/> zbiórkom</button>
                    </div>
                    <p>W naszej bazie znajdziesz listę zweryfikowanych zbiórek, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                    <div className='organizations'>
                        <div className='organization flex-box'>
                            <div>
                                <h2>Zbiórka "Lorem Ipsum1"</h2>
                                <p>Cel i misja: Pomoc dla potrzebujących</p>
                            </div>
                            <div>
                                <p>Ubrania, sprzęt, ksiązki </p>
                            </div>
                        </div>
                        <div className='organization flex-box'>
                            <div>
                                <h2>Fundacja "Dla dzieci"</h2>
                                <p>Cel i misja: Pomoc dla potrzebujących</p>
                            </div>
                            <div>
                                <p>Ubrania, sprzęt, ksiązki </p>
                            </div>
                        </div>
                        <div className='organization flex-box'>
                            <div>
                                <h2>Fundacja "Bez domu"</h2>
                                <p>Cel i misja: Pomoc dla potrzebujących</p>
                            </div>
                            <div>
                                <p>Ubrania, sprzęt, ksiązki </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Locals;
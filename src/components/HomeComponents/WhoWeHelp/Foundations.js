import React, {Component} from "react";
import decoration from '../../../assets/Decoration.svg';


class Foundations extends Component {
    state = {
        page1: 'show, organizations',
        page2: 'hidden',
        page3: 'hidden'
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
            page1: 'show, organizations',
            page2: 'hidden',
            page3: 'hidden'
        });
    };
    page2ButtonHandler = () => {
        this.setState({
            page1: 'hidden',
            page2: 'show, organizations',
            page3: 'hidden'
        });
    };
    page3ButtonHandler = () => {
        this.setState({
            page1: 'hidden',
            page2: 'hidden',
            page3: 'show, organizations'
        });
    };

    render() {
        return (
            <div className='flex-box whoWeHelp_Container'>
                <section className='whoWeHelp flex-box' id='HomeWhoWeHelp'>
                    <h1>Komu pomagamy?</h1>
                    <img src={decoration}/>
                    <div className='typesOfSupports flex-box'>
                        <button onClick={this.foundationButtonHandler} className='activeButton'>Fundacjom</button>
                        <button onClick={this.organizationButtonHandler}>Organizacjom <br/> pozarządowym</button>
                        <button onClick={this.localsButtonHandler}>Lokalnym <br/> zbiórkom</button>
                    </div>
                    <p>W naszej bazie znajdziesz listę zweryfikowanych fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                    <div className={this.state.page1}>
                        <div className='organization flex-box'>
                            <div>
                                <h2>Fundacja "Dbam o Zdrowie"</h2>
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
                    <div className={this.state.page2}>
                        <div className='organization flex-box'>
                            <div>
                                <h2>Fundacja "Lorem Ipsum 4"</h2>
                                <p>Cel i misja: Pomoc dla potrzebujących</p>
                            </div>
                            <div>
                                <p>Ubrania, sprzęt, ksiązki </p>
                            </div>
                        </div>
                        <div className='organization flex-box'>
                            <div>
                                <h2>Fundacja "Lorem Ipsum 5"</h2>
                                <p>Cel i misja: Pomoc dla potrzebujących</p>
                            </div>
                            <div>
                                <p>Ubrania, sprzęt, ksiązki </p>
                            </div>
                        </div>
                        <div className='organization flex-box'>
                            <div>
                                <h2>Fundacja "Lorem Ipsum 6"</h2>
                                <p>Cel i misja: Pomoc dla potrzebujących</p>
                            </div>
                            <div>
                                <p>Ubrania, sprzęt, ksiązki </p>
                            </div>
                        </div>
                    </div>
                    <div className={this.state.page3}>
                        <div className='organization flex-box'>
                            <div>
                                <h2>Fundacja "Lorem Ipsum 7"</h2>
                                <p>Cel i misja: Pomoc dla potrzebujących</p>
                            </div>
                            <div>
                                <p>Ubrania, sprzęt, ksiązki </p>
                            </div>
                        </div>
                        <div className='organization flex-box'>
                            <div>
                                <h2>Fundacja "Lorem Ipsum 8"</h2>
                                <p>Cel i misja: Pomoc dla potrzebujących</p>
                            </div>
                            <div>
                                <p>Ubrania, sprzęt, ksiązki </p>
                            </div>
                        </div>
                        <div className='organization flex-box'>
                            <div>
                                <h2>Fundacja "Lorem Ipsum 9"</h2>
                                <p>Cel i misja: Pomoc dla potrzebujących</p>
                            </div>
                            <div>
                                <p>Ubrania, sprzęt, ksiązki </p>
                            </div>
                        </div>
                    </div>
                    <div className='pageNumbers'>
                        <button onClick={this.page1ButtonHandler}>1</button>
                        <button onClick={this.page2ButtonHandler}>2</button>
                        <button onClick={this.page3ButtonHandler}>3</button>
                    </div>
                </section>
            </div>
        );
    }
}

export default Foundations;
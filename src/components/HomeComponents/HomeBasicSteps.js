import React, {Component} from "react";
import ReactDOM from "react-dom";
import decoration from '../../assets/Decoration.svg';
import {
    Link,
} from 'react-router-dom';

import icon1 from '../../assets/Icon-1.svg';
import icon2 from '../../assets/Icon-2.svg';
import icon3 from '../../assets/Icon-3.svg';
import icon4 from '../../assets/Icon-4.svg';

class HomeBasicSteps extends Component {

    render() {
        return (
            <section className='basicSteps flex-box'>
                <h1>Wystarczą 4 proste kroki</h1>
                <img src={decoration}></img>
                <div className='infoSection flex-box'>
                    <div className='infoElement flex-box'>
                        <img src={icon1}></img>
                        <p>Wybierz rzeczy</p>
                        <div className='line'></div>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className='infoElement flex-box'>
                        <img src={icon2}></img>
                        <p>Spakuj je</p>
                        <div className='line'></div>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div className='infoElement flex-box'>
                        <img src={icon3}></img>
                        <p>Zdecyduj komu chcesz pomóc</p>
                        <div className='line'></div>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div className='infoElement flex-box'>
                        <img src={icon4}></img>
                        <p>Zamów kuriera</p>
                        <div className='line'></div>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
                <Link className='link' to="/login">Oddaj <br/> rzeczy</Link>
            </section>
        )
    }
}

export default HomeBasicSteps;
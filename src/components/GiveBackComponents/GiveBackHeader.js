import React, {Component} from "react";
import decoration from "../../assets/Decoration.svg";


class GiveBackHeader extends Component {
    render() {
        return (
            <section className='giveBackHeader flex-box'>
                <div className='giveBackImg'> </div>
                <div className='flex-box'>
                    <div className='giveBackIntro flex-box'>
                        <h1>Oddaj rzeczy, których już nie chcesz<br/> <strong>potrzebującym</strong></h1>
                        <img src={decoration}></img>
                        <h2>Wystarczą 4 proste kroki:</h2>
                        <div className='giveBackOrganise flex-box'>
                            <div className='flex-box'>
                                <h1>1</h1>
                                <p>Wybierz <br/> rzeczy</p>
                            </div>
                            <div className='flex-box'>
                                <h1>2</h1>
                                <p>Spakuj je <br/> w worki</p>
                            </div>
                            <div className='flex-box'>
                                <h1>3</h1>
                                <p>Wybierz <br/> fundację</p>
                            </div>
                            <div className='flex-box'>
                                <h1>4</h1>
                                <p>Zamów <br/> kuriera</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default GiveBackHeader;
import React, {Component} from "react";
import decoration from '../../assets/Decoration.svg';



class HomeContact extends Component {
    render() {
        return (
            <section className='contact flex-box'>
                <div className='contactForm'>
                    <h1>Skontaktuj się z nami</h1>
                    <img src={decoration}></img>
                    <form>

                    </form>
                </div>
            </section>
        )
    }
}
export default HomeContact;
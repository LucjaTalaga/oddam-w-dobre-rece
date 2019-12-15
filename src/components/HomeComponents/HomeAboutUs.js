import React, {Component} from "react";
import people from '../../assets/People.jpg';
import decoration from '../../assets/Decoration.svg';
import signature from '../../assets/Signature.svg';

class HomeAboutUs extends Component {
    render() {
        return (
            <section className='aboutUs flex-box'>
                <div>
                    <h1>O nas</h1>
                    <img src={decoration}/>
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <img src={signature}/>
                </div>
                <div className='people'>
                </div>

            </section>
        )
    }
}

export default HomeAboutUs;
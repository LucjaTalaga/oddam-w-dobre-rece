import React, {Component} from "react";
import ReactDOM from "react-dom";

class HomeThreeColumns extends Component {

    render() {
        return (
            <section className='threeColumns flex-box'>
                <div>
                    <h1>{this.props.bagsGiven}</h1>
                    <h2>Oddanych worków</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div>
                    <h1>{this.props.organizationsSupported}</h1>
                    <h2>Wspartych organizacji</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div>
                    <h1>{this.props.collectionsOrganized}</h1>
                    <h2>Zorganizowanych zbiórek</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
            </section>
        )
    }
}

export default HomeThreeColumns;
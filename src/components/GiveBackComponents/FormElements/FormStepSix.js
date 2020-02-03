import React, {Component} from "react";
import decoration from '../../../assets/Decoration.svg';

class FormStepSix extends Component {

    render() {
        return (
            <div className='giveBackFinal flex-box'>
                <div className='flex-box'>
                    <h1>Dziękujemy za przesłanie formularza <br/> Na maila prześlemy wszelkie informacje o odbiorze.</h1>
                    <img src={decoration}/>
                </div>
            </div>
        )

    }
}

export default FormStepSix;
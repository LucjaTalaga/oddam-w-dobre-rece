import React, {Component} from "react";

class FormStepOne extends Component {

    render(){
        return(
            <div className='giveBackSteps'>
                <p>Krok 1/4 </p>
                <h1>Zaznacz, co chcesz oddać</h1>
                <form>
                    <label className='containerStepOne'>
                        <input type='radio'name='whatAreYouGiving' value='clothesToWear' onChange={this.props.handleChange}/>
                        <span className="checkmarkStepOne"></span>
                        Ubrania, które nadają się do ponownego użycia
                    </label>
                    <label className='containerStepOne'>
                        <input type='radio'name='whatAreYouGiving' value='clothesNotToWear' onChange={this.props.handleChange}/>
                        <span className="checkmarkStepOne"></span>
                        Ubrania, do wyrzucenia
                    </label>
                    <label className='containerStepOne'>
                        <input type='radio'name='whatAreYouGiving' value='toys' onChange={this.props.handleChange}/>
                        <span className="checkmarkStepOne"></span>
                        Zabawki
                    </label>
                    <label className='containerStepOne'>
                        <input type='radio'name='whatAreYouGiving' value='books' onChange={this.props.handleChange}/>
                        <span className="checkmarkStepOne"></span>
                        Książki
                    </label>
                    <label className='containerStepOne'>
                        <input type='radio'name='whatAreYouGiving' value='other' onChange={this.props.handleChange}/>
                        <span className="checkmarkStepOne"></span>
                        Inne
                    </label>
                </form>
            </div>
        )
    }
}

export default FormStepOne;
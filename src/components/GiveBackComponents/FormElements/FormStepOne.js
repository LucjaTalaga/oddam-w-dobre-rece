import React, {Component} from "react";

class FormStepOne extends Component {

    render(){
        return(
            <div className='giveBackSteps'>
                <p>Krok 1/4 </p>
                <h1>Zaznacz, co chcesz oddać</h1>
                <form>
                    <label className='containerStepOne'>
                        <input type='radio'name='whatAreYouGiving' value='ubrania, które nadają się do ponownego użycia' onChange={this.props.handleChange}/>
                        <span className="checkmarkStepOne"></span>
                        Ubrania, które nadają się do ponownego użycia
                    </label>
                    <label className='containerStepOne'>
                        <input type='radio'name='whatAreYouGiving' value='ubrania, do wyrzucenia' onChange={this.props.handleChange}/>
                        <span className="checkmarkStepOne"></span>
                        Ubrania, do wyrzucenia
                    </label>
                    <label className='containerStepOne'>
                        <input type='radio'name='whatAreYouGiving' value='zabawki' onChange={this.props.handleChange}/>
                        <span className="checkmarkStepOne"></span>
                        Zabawki
                    </label>
                    <label className='containerStepOne'>
                        <input type='radio'name='whatAreYouGiving' value='książki' onChange={this.props.handleChange}/>
                        <span className="checkmarkStepOne"></span>
                        Książki
                    </label>
                    <label className='containerStepOne'>
                        <input type='radio'name='whatAreYouGiving' value='inne' onChange={this.props.handleChange}/>
                        <span className="checkmarkStepOne"></span>
                        Inne
                    </label>
                </form>
            </div>
        )
    }
}

export default FormStepOne;
import React, {Component} from "react";

class FormStepFour extends Component {

    render() {
        return (
            <div className='giveBackSteps'>
                <p>Krok 4/4 </p>
                <h1>Podaj adres oraz termin odbioru rzecz przez kuriera </h1>
                <form className='flex-box formStepFour'>
                    <div>
                        <legend>Adres odbioru:</legend>
                        <label className='flex-box' > <span>Ulica</span>
                            <input type='text' name='street' onChange={this.props.handleChange}></input>
                        </label>
                        <label className='flex-box' > <span>Miasto</span>
                            <input type='text' name='city' onChange={this.props.handleChange}></input>
                        </label>
                        <label className='flex-box'> <span> Kod pocztowy </span>
                            <input type='text' name='postCode' onChange={this.props.handleChange}></input>
                        </label>
                        <label className='flex-box'> <span> Numer telefonu </span>
                            <input type='text' name='phoneNumber' onChange={this.props.handleChange}></input>
                        </label>
                    </div>
                    <div>
                        <legend>Termin odbioru:</legend>
                        <label className='flex-box' > <span> Data </span>
                            <input type='text' name='date' onChange={this.props.handleChange}></input>
                        </label>
                        <label className='flex-box' > <span> Godzina </span>
                            <input type='text' name='hour' onChange={this.props.handleChange}></input>
                        </label>
                        <label className='flex-box notesForCourier' > <span> Uwagi dla kuriera </span>
                            <textarea type='text' name='notes' onChange={this.props.handleChange}></textarea>
                        </label>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormStepFour;
import React, {Component} from "react";

class FormStepTwo extends Component {

    render() {
        return (
            <div className='giveBackSteps'>
                <p>Krok 2/4 </p>
                <h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
                <label htmlFor="bag-select">Liczba 60l worków: </label>
                <select name="howManyBags" id="bag-select" onChange={this.props.handleChange}>
                    <option className='menuOption' value="">— wybierz —</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

            </div>
            )
    }
}

export default FormStepTwo;
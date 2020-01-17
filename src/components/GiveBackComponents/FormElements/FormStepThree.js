import React, {Component} from "react";

class FormStepThree extends Component {

    render() {
        return (
            <div className='giveBackSteps'>
                <p>Krok 3/4 </p>
                <h1>Lokalizacja: </h1>
                <form>
                    <select name="localization" id="localization-select" onChange={this.props.whatCityHandle}>
                        <option value="">— wybierz —</option>
                        <option value="Poznań">Poznań</option>
                        <option value="Warszawa">Warszawa</option>
                        <option value="Kraków">Kraków</option>
                        <option value="Wrocław">Wrocław</option>
                        <option value="Katowice">Katowice</option>
                    </select>
                    <legend>Komu chcesz pomóc?</legend>
                    <label className='containerStepThree'>
                        <input type='checkbox' name='dzieciom' value='dzieciom' onChange={this.props.whoYouHelpHandle}/>
                        <span>dzieciom</span>
                    </label>
                    <label className='containerStepThree'>
                        <input type='checkbox' name='samotnym matkom' value='samotnym matkom' onChange={this.props.whoYouHelpHandle}/>
                        <span>samotnym matkom</span>
                    </label>
                    <label className='containerStepThree'>
                        <input type='checkbox' name='bezdomnym' value='bezdomnym' onChange={this.props.whoYouHelpHandle}/>
                        <span>bezdomnym</span>
                    </label>
                    <label className='containerStepThree'>
                        <input type='checkbox' name='niepełnosprawnym' value='niepełnosprawnym' onChange={this.props.whoYouHelpHandle}/>
                        <span>niepełnosprawnym</span>
                    </label>
                    <label className='containerStepThree'>
                        <input type='checkbox' name='osobom starszym' value='osobom starszym' onChange={this.props.whoYouHelpHandle}/>
                        <span>osobom starszym</span>
                    </label>
                    <label className='organizationStepThree'> Wpisz nazwę konkretnej organizacji (opcjonalne)
                        <input type='text'></input>
                    </label>
                </form>
            </div>
        )
    }
}

export default FormStepThree;
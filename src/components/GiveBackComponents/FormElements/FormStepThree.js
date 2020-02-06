import React, {Component} from "react";

class FormStepThree extends Component {

    render() {
        return (
            <div className='giveBackSteps'>
                <p>Krok 3/4 </p>
                <h1>Lokalizacja: </h1>
                <form>
                    <select name="whatCity" id="localization-select" onChange={this.props.handleChange}>
                        <option value="">— wybierz —</option>
                        <option value="Poznań">Poznań</option>
                        <option value="Warszawa">Warszawa</option>
                        <option value="Kraków">Kraków</option>
                        <option value="Wrocław">Wrocław</option>
                        <option value="Katowice">Katowice</option>
                    </select>
                    <legend>Komu chcesz pomóc?</legend>
                    <label className='containerStepThree'>
                        <input type='checkbox' name='dzieciom' value='dzieciom' onChange={this.props.whoYouHelpHandle} checked={this.props.whoYouHelp['dzieciom']}/>
                        <span className='checkmarkStepThree'>dzieciom</span>
                    </label>
                    <label className='containerStepThree'>
                        <input type='checkbox' name='samotnym matkom' value='samotnym matkom' onChange={this.props.whoYouHelpHandle} checked={this.props.whoYouHelp['samotnym matkom']}/>
                        <span className='checkmarkStepThree'>samotnym matkom</span>
                    </label>
                    <label className='containerStepThree'>
                        <input type='checkbox' name='bezdomnym' value='bezdomnym' onChange={this.props.whoYouHelpHandle} checked={this.props.whoYouHelp['bezdomnym']}/>
                        <span className='checkmarkStepThree'>bezdomnym</span>
                    </label>
                    <br/>
                    <label className='containerStepThree'>
                        <input type='checkbox' name='niepełnosprawnym' value='niepełnosprawnym' onChange={this.props.whoYouHelpHandle} checked={this.props.whoYouHelp['niepełnosprawnym']}/>
                        <span className='checkmarkStepThree'>niepełnosprawnym</span>
                    </label>
                    <label className='containerStepThree'>
                        <input type='checkbox' name='osobom starszym' value='osobom starszym' onChange={this.props.whoYouHelpHandle} checked={this.props.whoYouHelp['osobom starszym']}/>
                        <span className='checkmarkStepThree'>osobom starszym</span>
                    </label>
                    <br/>
                    <label className='organizationStepThree'> Wpisz nazwę konkretnej organizacji (opcjonalne) <br/>
                        <input type='text' name='additionalOrganization' value={this.props.addOrg} onChange={this.props.handleChange}></input>
                    </label>
                </form>
            </div>
        )
    }
}

export default FormStepThree;
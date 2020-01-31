import React, {Component} from "react";

class FormStepFive extends Component {

    render() {
        const {data, list} = this.props;
        return (
            <div className='giveBackSteps'>
                <h1>Podsumowanie Twojej darowizny</h1>
                <h2>Oddajesz:</h2>
                <p>{data.howManyBags>1 ? data.howManyBags+' worki' : data.howManyBags+' worek'}, {data.whatAreYouGiving}, {list}, {data.additionalOrganization} </p>
            </div>
        )
    }
}

export default FormStepFive;
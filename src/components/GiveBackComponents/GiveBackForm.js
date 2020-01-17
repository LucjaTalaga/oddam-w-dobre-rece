import React, {Component} from "react";
import FormStepOne from "./FormElements/FormStepOne";
import FormStepTwo from "./FormElements/FormStepTwo";
import FormStepThree from "./FormElements/FormStepThree";

class GiveBackForm extends Component {

    state = {
        whatAreYouGiving: null,
        howManyBags: null,
        whatCity: null,
        whoYouHelp: {},
        additionalOrganization: ""
    };
    // metoda, zmieniająca krok postępowania
    formButtonHandler = (e, val) => {
        this.props.stepChanger(val);
    };
    // metoda, dzięki której użytkownik określa, co oddaje
    handleChange = e => {
      this.setState({
          [e.target.name]: e.target.value
      })
    };
    //metoda, która określa, komu pomagamy
    whoYouHelpHandle = e => {
        let newWhoYouHelp = {...this.state.whoYouHelp};
        let name = e.target.name;
        newWhoYouHelp[name] = e.target.checked;
        this.setState({
            whoYouHelp: newWhoYouHelp
        });
    };
    //metoda, która tworzy listę podmiotów, zaznaczonych jako te, którym pomagamy
    whoYouHelpList = () => {
     let {whoYouHelp} = this.state;
     let whoWeHelpArr = [];
     Object.getOwnPropertyNames(whoYouHelp).forEach(function(val) {
         if(whoYouHelp[val]){
             whoWeHelpArr.push(val+', ');
         }
     });
     return whoWeHelpArr;
    };

    isNextButtonDisabled = () => {
        let {step} = this.props;
        let isStepThreeProper = (this.whoYouHelpList().length>0 && this.state.whatCity) ? true : false;
        let areStepsFinishedArr = [this.state.whatAreYouGiving, this.state.howManyBags, isStepThreeProper, true];
        for(let i=1; i<5;i++){
            if(step === i){
                if(!areStepsFinishedArr[i-1]){
                    return true;
                }
                else
                    return false;
            }
        }
        return false;
    };
    render() {
        let {step} = this.props;
        let form;
        //w zależności od tego, w którym kroku jesteśmy, ładuje nam się odpowiedni formularz
        if(step === 1){
            form = <FormStepOne handleChange={this.handleChange}/>
        }
        if(step === 2){
            form = <FormStepTwo handleChange={this.handleChange}/>
        }
        if(step === 3){
            form = <FormStepThree handleChange={this.handleChange} whoYouHelpHandle={this.whoYouHelpHandle} whoYouHelp={this.state.whoYouHelp}/>
        }
        if(step === 4){
            form =
                <div>
                    <p>Pomagamy:{this.whoYouHelpList()}</p>
                </div>
        }
        if(step ===5){
            form =
                <div>
                    <p>5 </p>
                </div>
        }
        if(step === 6){
            form =
                <div>
                    <p>6 </p>
                </div>
        }
        return (
            <section className='giveBackForm'>
                {form}
                <p>Pomagasz, w {this.state.whatCity}, {this.whoYouHelpList()}, {this.state.additionalOrganization}, dajesz {this.state.howManyBags} worków </p>
                {(this.props.step<=5 && this.props.step >1) ? <button className='stepButtons' onClick={e => this.formButtonHandler(e, -1)}> Wstecz</button> : null}
                {this.props.step<=5 ? <button className='stepButtons' onClick={e => this.formButtonHandler(e, 1)} disabled={this.isNextButtonDisabled()}>{this.props.step === 5 ? "Potwierdź" : "Dalej"} </button> : null}
            </section>
        )
    }
}

export default GiveBackForm;
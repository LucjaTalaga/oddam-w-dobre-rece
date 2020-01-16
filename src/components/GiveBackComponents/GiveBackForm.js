import React, {Component} from "react";
import FormStepOne from "./FormElements/FormStepOne";
import FormStepTwo from "./FormElements/FormStepTwo";

class GiveBackForm extends Component {

    state = {
        whatAreYouGiving: null,
        howManyBags: null
    };
    // metoda, zmieniająca krok postępowania
    formButtonHandler = (e, val) => {
        this.props.stepChanger(val);
    };
    // metoda, dzięki której użytkownik określa, co oddaje
    handleChange = e => {
      this.setState({
          whatAreYouGiving: e.target.value
      })
    };
    //metoda, dzięki której użytkownik określa ile worków oddaje
    howManyBagsHandle = e => {
        this.setState({
            howManyBags: e.target.value
        })
    };
    render() {
        let {step} = this.props;
        let form;
        if(step == 1){
            form = <FormStepOne handleChange={this.handleChange}/>
        }
        if(step == 2){
            form = <FormStepTwo howManyBagsHandle={this.howManyBagsHandle}/>
        }
        if(step == 3){
            form =
                <div>
                    <p>Krok 3/4 </p>
                </div>
        }
        if(step == 4){
            form =
                <div>
                    <p>Krok 4/4 </p>
                </div>
        }
        if(step == 5){
            form =
                <div>
                    <p>5 </p>
                </div>
        }
        if(step == 6){
            form =
                <div>
                    <p>6 </p>
                </div>
        }
        return (
            <section className='giveBackForm'>
                {form}
                <p>oddajesz {this.state.howManyBags} woreczków </p>
                {(this.props.step<=5 && this.props.step >1) ? <button className='stepButtons' onClick={e => this.formButtonHandler(e, -1)}> Wstecz</button> : null}
                {this.props.step<=5 ? <button className='stepButtons' onClick={e => this.formButtonHandler(e, 1)}>{this.props.step === 5 ? "Potwierdź" : "Dalej"} </button> : null}
            </section>
        )
    }
}

export default GiveBackForm;
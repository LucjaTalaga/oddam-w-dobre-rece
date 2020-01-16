import React, {Component} from "react";
import GiveBackHeader from "./GiveBackComponents/GiveBackHeader";
import GiveBackInformation from "./GiveBackComponents/GiveBackInformation";
import GiveBackForm from "./GiveBackComponents/GiveBackForm";


class GiveBack extends Component {
    state = {
        step: 1
    };
    stepChanger = (value) => {
        this.setState({
            step: this.state.step + value
        })
    };
    render() {
        return (
            <>
                <GiveBackHeader/>
                <GiveBackInformation step={this.state.step}/>
                <GiveBackForm step={this.state.step} stepChanger={this.stepChanger}/>
            </>
        )
    }
}

export default GiveBack;
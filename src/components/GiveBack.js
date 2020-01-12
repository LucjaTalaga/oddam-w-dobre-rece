import React, {Component} from "react";
import GiveBackHeader from "./GiveBackComponents/GiveBackHeader";
import GiveBackInformation from "./GiveBackComponents/GiveBackInformation";
import GiveBackForm from "./GiveBackComponents/GiveBackForm";


class GiveBack extends Component {
    state = {
        step: 1
    };
    render() {
        return (
            <>
                <GiveBackHeader/>
                <GiveBackInformation step={this.state.step}/>
                <GiveBackForm step={this.state.step}/>
            </>
        )
    }
}

export default GiveBack;
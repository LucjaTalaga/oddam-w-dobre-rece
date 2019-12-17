import React, {Component} from "react";
import decoration from '../../assets/Decoration.svg';
import Foundations from "./WhoWeHelp/Foundations";
import Organizations from "./WhoWeHelp/Organizations";
import Locals from "./WhoWeHelp/Locals";

class HomeWhoWeHelp extends Component {
    state = {
        isFoundationsSelected: true,
        isOrganisationsSelected: false,
        isLocalsSelected: false,
        page1: 'show',
        page2: 'hidden',
        page3: 'hidden'
    };
    foundationButtonHandler = () => {
        this.setState({
            isFoundationsSelected: true,
            isOrganisationsSelected: false,
            isLocalsSelected: false
        });
    };
    organizationButtonHandler = () => {
        this.setState({
            isFoundationsSelected: false,
            isOrganisationsSelected: true,
            isLocalsSelected: false
        });
    };
    localsButtonHandler = () => {
        this.setState({
            isFoundationsSelected: false,
            isOrganisationsSelected: false,
            isLocalsSelected: true
        });
    };

    render() {
        if (this.state.isFoundationsSelected) {
            return (
                <Foundations foundation={this.foundationButtonHandler} organization={this.organizationButtonHandler} local={this.localsButtonHandler}/>
            );
        }
        if (this.state.isOrganisationsSelected) {
            return (
                <Organizations foundation={this.foundationButtonHandler} organization={this.organizationButtonHandler} local={this.localsButtonHandler}/>
            );
        }
        if (this.state.isLocalsSelected) {
            return (
                <Locals foundation={this.foundationButtonHandler} organization={this.organizationButtonHandler} local={this.localsButtonHandler}/>
            );
        }
    }
}

export default HomeWhoWeHelp;
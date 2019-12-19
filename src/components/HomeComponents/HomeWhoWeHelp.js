import React, {Component} from "react";
import decoration from '../../assets/Decoration.svg';
import Foundations from "./WhoWeHelp/Foundations";
import Organizations from "./WhoWeHelp/Organizations";
import Locals from "./WhoWeHelp/Locals";
import data from '../../fundacje';

let organizacje = data.organizations;

class HomeWhoWeHelp extends Component {
    state = {
        typeOfOrganization: 0,
        page: 1
    };

    organizationButtonHandler = (e, num) => {
        this.setState({
            typeOfOrganization: num
        });
    };
    pagesButtonHandler = (e, num) => {
        this.setState({
            page: num
        });
    }

    render() {
        let actualOrganizations = organizacje[this.state.typeOfOrganization];
        let foundations = actualOrganizations.foundations;
        let actualFoundations = [];
        let numberOfPages = (foundations.length%3===0) ? foundations.length/3 : (Math.floor(foundations.length/3))+1;
        let pages = [];
        if(numberOfPages>1) {
            for (let i = 0; i < numberOfPages; i++) {
                pages[i] = i + 1;
            }
        }
        for(let i=0; i<3; i++){
            actualFoundations[i] = foundations[(this.state.page - 1)+i];
        }
        return (
            <div className='flex-box whoWeHelp_Container'>
                <section className='whoWeHelp flex-box' id='HomeWhoWeHelp'>
                    <h1>Komu pomagamy?</h1>
                    <img src={decoration}/>
                    <div className='typesOfSupports flex-box'>
                        {organizacje.map((el, i) => (
                            <button onClick={e => this.organizationButtonHandler(e, i)}>{el.navName}</button>))}
                    </div>
                    <p>{actualOrganizations.description}</p>
                    <div className='organizations'>
                        {actualFoundations.map((el, i) => (
                        <div className='organization flex-box'>
                            <div>
                                <h2>{el.name}</h2>
                                <p>{el.mission}</p>
                            </div>
                            <div>
                                <p>{el.things}</p>
                            </div>
                        </div>
                            ))}
                    </div>
                    <div className='pageNumbers'>
                        {pages.map(el => <button onClick={e => this.pagesButtonHandler(e, el)}>{el}</button>)}
                    </div>
                </section>
            </div>
        );
    }
}

export default HomeWhoWeHelp;
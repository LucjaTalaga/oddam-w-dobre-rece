import React, {Component} from "react";
import icon1 from '../../../assets/Icon-1.svg';
import icon4 from '../../../assets/Icon-4.svg';

class FormStepFive extends Component {

    render() {
        const {data, list} = this.props;
        const listSorted = [];
        for (let i = 0; i < list.length; i++) {
            if (i < list.length - 1) {
                listSorted.push(list[i] + ', ');
            } else {
                listSorted.push(list[i]);
            }
        }
        return (
            <div className='giveBackSteps'>
                <h1>Podsumowanie Twojej darowizny</h1>
                <h2>Oddajesz:</h2>
                <div className='stepFiveBox flex-box'>
                    <img src={icon1} className='icon'/>
                    <p>{data.howManyBags > 1 ? data.howManyBags + ' worki' : data.howManyBags + ' worek'}, {data.whatAreYouGiving}, {listSorted}{data.additionalOrganization.length > 1 ? ', ' + data.additionalOrganization : ''} </p>
                </div>
                <div className='stepFiveBox flex-box'>
                    <img src={icon4} className='icon'/>
                    <p>dla lokalizacji: {data.whatCity}</p>
                </div>
                <div className='stepFiveAdress flex-box'>
                    <div>
                        <h2>Adres odbioru:</h2>
                        <div className='stepFiveLabel flex-box'>
                            <span>Ulica</span>
                            <span>{data.street}</span>
                        </div>
                        <div className='stepFiveLabel flex-box'>
                            <span>Miasto</span>
                            <span>{data.city}</span>
                        </div>
                        <div className='stepFiveLabel flex-box'>
                            <span>Kod pocztowy</span>
                            <span>{data.postCode}</span>
                        </div>
                        <div className='stepFiveLabel flex-box'>
                            <span>Numer telefonu</span>
                            <span>{data.phoneNumber}</span>
                        </div>
                    </div>
                    <div>
                        <h2>Termin odbioru:</h2>
                        <div className='stepFiveLabel flex-box'>
                            <span>Data</span>
                            <span>{data.date}</span>
                        </div>
                        <div className='stepFiveLabel flex-box'>
                            <span>Godzina</span>
                            <span>{data.hour}</span>
                        </div>
                        <div className='stepFiveLabel flex-box'>
                            <span>Uwagi dla kuriera</span>
                            <span>{data.notes}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormStepFive;
import React, {Component} from "react";

class GiveBackInformation extends Component {


    render() {
        if(this.props.step>4) {
            return null;
        }
        const infoTexts =
            ['Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.',
                'Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.',
                'Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.',
                'Podaj adres oraz termin odbioru rzeczy.'];
        return (
            <section className='information flex-box'>
                <h1>Ważne!</h1>
                <p>{infoTexts[this.props.step-1]}</p>
            </section>
        )
    }
}

export default GiveBackInformation;
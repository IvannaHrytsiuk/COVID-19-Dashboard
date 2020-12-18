import { Table } from '../view/tablePaint';
import { countriesData, covidData } from '../../state';

const table = new Table();

// eslint-disable-next-line import/prefer-default-export
export class TableModel {
    // eslint-disable-next-line class-methods-use-this
    getMoodTable(elemVal) {
        console.log(covidData);
        if (sessionStorage.getItem('country')) {
            const country = covidData.Countries.find((element) => element.Country === sessionStorage.getItem('country'));
            console.log(country);
            // eslint-disable-next-line default-case
            switch (elemVal) {
            case 'Total Confirmed':
                table.paintTableTotalCountry(country.TotalConfirmed, country.TotalDeaths, country.TotalRecovered);
                break;
            case 'New Confirmed':
                table.paintTableTotalCountry(country.NewConfirmed, country.NewDeaths, country.NewRecovered);
                break;
            case 'Total confirmed 100K':
                this.calculate100(country.TotalConfirmed, country.TotalDeaths, country.TotalRecovered);
                break;
            case 'New Confirmed 100K':
                this.calculate100(country.NewConfirmed, country.NewDeaths, country.NewRecovered);
                break;
            }
        } else {
            // eslint-disable-next-line no-lonely-if
            if (elemVal === 'Total Confirmed') {
                table.paintTableTotal(covidData.Global.TotalConfirmed, covidData.Global.TotalDeaths, covidData.Global.TotalRecovered);
            } else if (elemVal === 'New Confirmed') {
                table.paintTableTotal(covidData.Global.NewConfirmed, covidData.Global.NewDeaths, covidData.Global.NewRecovered);
            }
        }
    }

    // eslint-disable-next-line class-methods-use-this
    calculate100(conf, death, recov) {
        const population = countriesData.find((element) => element.name === sessionStorage.getItem('country'));
        const cases100 = conf / (population.population / 100000);
        const death100 = death / (population.population / 100000);
        const recovered100 = recov / (population.population / 100000);
        table.paintTable100(cases100.toFixed(2), death100.toFixed(2), recovered100.toFixed(2));
    }
}

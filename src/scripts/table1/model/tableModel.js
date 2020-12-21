import { Table } from '../view/tablePaint';
import { countriesData, covidData, countriesCovidData } from '../../state';

const table = new Table();

// eslint-disable-next-line import/prefer-default-export
export class TableModel {
    // eslint-disable-next-line class-methods-use-this
    getMoodTable(elemVal) {
        if (sessionStorage.getItem('country')) {
            const country = countriesCovidData.find((element) => element.countryInfo.iso2 === sessionStorage.getItem('country'));
            // eslint-disable-next-line default-case
            switch (elemVal) {
            case 'Total':
                table.paintTableTotalCountry(country.cases, country.deaths, country.recovered);
                break;
            case 'New':
                table.paintTableTotalCountry(country.todayCases, country.todayDeaths, country.todayRecovered);
                break;
            case 'Total per 100K population':
                this.calculate100(country.cases, country.deaths, country.recovered);
                break;
            case 'New per 100K population':
                this.calculate100(country.todayCases, country.todayDeaths, country.todayRecovered);
                break;
            }
        } else {
            // eslint-disable-next-line no-lonely-if
            if (elemVal === 'Total') {
                table.paintTableTotal(covidData.cases, covidData.deaths, covidData.recovered);
            } else if (elemVal === 'New') {
                table.paintTableTotal(covidData.todayCases, covidData.todayDeaths, covidData.todayRecovered);
            } else if (elemVal === 'Total per 100K population') {
                table.paintTableTotal(covidData.TotalConfirmed100K, covidData.TotalDeaths100K, covidData.TotalRecovered100K);
            } else if (elemVal === 'New per 100K population') {
                table.paintTableTotal(covidData.NewConfirmed100K, covidData.NewDeaths100K, covidData.NewRecovered100K);
            }
        }
    }

    // eslint-disable-next-line class-methods-use-this
    calculate100(conf, death, recov) {
        const population = countriesCovidData.find((element) => element.countryInfo.iso2 === sessionStorage.getItem('country'));
        const cases100 = conf / (population.population / 100000);
        const death100 = death / (population.population / 100000);
        const recovered100 = recov / (population.population / 100000);
        table.paintTable100(cases100.toFixed(2), death100.toFixed(2), recovered100.toFixed(2));
    }
}
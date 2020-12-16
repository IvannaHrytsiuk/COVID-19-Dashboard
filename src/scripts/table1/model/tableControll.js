import { TableMood } from '../controller/tableMood';
import { Table } from '../view/tablePaint';
import { countriesData, covidData } from '../../state';

const table = new Table();

// eslint-disable-next-line import/prefer-default-export
export class TableControll {
    // eslint-disable-next-line class-methods-use-this
    getMoodTable(elemVal) {
        if (elemVal === 'Total') {
            const tableMood = new TableMood(table.switcher);
            tableMood.changeMood();
        } else if (elemVal === 'Per 100K population') {
            let cases100;
            let death100;
            let recovered100;
            const population = countriesData.find((element) => element.name === sessionStorage.getItem('country'));
            const covid = covidData.Countries.find((element) => element.Country === sessionStorage.getItem('country'));
            if (table.switcher === 0) {
                cases100 = covid.NewConfirmed / (population.population / 100000);
                death100 = covid.NewDeaths / (population.population / 100000);
                recovered100 = covid.NewRecovered / (population.population / 100000);
                table.paintTable100(cases100.toFixed(2), death100.toFixed(2), recovered100.toFixed(2));
            } else {
                cases100 = covid.TotalConfirmed / (population.population / 100000);
                death100 = covid.TotalDeaths / (population.population / 100000);
                recovered100 = covid.TotalRecovered / (population.population / 100000);
                table.paintTable100(cases100.toFixed(2), death100.toFixed(2), recovered100.toFixed(2));
            }
        }
    }
}

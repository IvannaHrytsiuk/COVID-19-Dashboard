import { Table } from './tablePaint';
import { getData } from './apis/apiCovid';
import { getFlags } from './apis/apiFlags';

// eslint-disable-next-line import/prefer-default-export
export class TableMood {
    constructor(mood) {
        this.mood = mood;
    }

    // eslint-disable-next-line class-methods-use-this
    changeMood() {
        const table = new Table();
        if (sessionStorage.getItem('country')) {
            let population;
            getFlags('https://restcountries.eu/rest/v2/all?fields=name;population;flag').then((data) => {
                for (let i = 0; i < data.length; i += 1) {
                    if (data[i].name === sessionStorage.getItem('country')) {
                        population = data[i].population;
                    }
                }
            });
            getData('https://api.covid19api.com/summary').then((data) => {
                for (let i = 0; i < data.Countries.length; i += 1) {
                    if (data.Countries[i].Country === sessionStorage.getItem('country')) {
                        let cases100;
                        let death100;
                        let recovered100;
                        if (this.mood === 0) {
                            cases100 = data.Countries[i].NewConfirmed / (population / 100000);
                            death100 = data.Countries[i].NewDeaths / (population / 100000);
                            recovered100 = data.Countries[i].NewRecovered / (population / 100000);
                            table.paintTableTotalCountry(data.Countries[i].NewConfirmed, data.Countries[i].NewDeaths, data.Countries[i].NewRecovered, cases100.toFixed(2), death100.toFixed(2), recovered100.toFixed(2));
                        } else {
                            cases100 = data.Countries[i].TotalConfirmed / (population / 100000);
                            death100 = data.Countries[i].TotalDeaths / (population / 100000);
                            recovered100 = data.Countries[i].TotalRecovered / (population / 100000);
                            table.paintTableTotalCountry(data.Countries[i].TotalConfirmed, data.Countries[i].TotalDeaths, data.Countries[i].TotalRecovered, cases100.toFixed(2), death100.toFixed(2), recovered100.toFixed(2));
                        }
                    }
                }
            });
        } else {
            getData('https://api.covid19api.com/summary').then((data) => {
                if (this.mood === 0) {
                    table.paintTableTotal(data.Global.NewConfirmed, data.Global.NewDeaths, data.Global.NewRecovered);
                } else {
                    table.paintTableTotal(data.Global.TotalConfirmed, data.Global.TotalDeaths, data.Global.TotalRecovered);
                }
            });
        }
    }
}

import { Table } from './tablePaint';
import { covidData } from '../state';

// eslint-disable-next-line import/prefer-default-export
export class TableMood {
    constructor(mood) {
        this.mood = mood;
    }

    // eslint-disable-next-line class-methods-use-this
    changeMood() {
        const table = new Table();
        if (sessionStorage.getItem('country')) {
            document.getElementById('selectMoodShow').style.display = 'block';
            // for (let i = 0; i < countriesData.length; i += 1) {
            //     if (countriesData[i].name === sessionStorage.getItem('country')) {
            //         population = countriesData[i].population;
            //     }
            // }
            for (let i = 0; i < covidData.Countries.length; i += 1) {
                if (covidData.Countries[i].Country === sessionStorage.getItem('country')) {
                    // let cases100;
                    // let death100;
                    // let recovered100;
                    if (this.mood === 0) {
                        // cases100 = covidData.Countries[i].NewConfirmed / (population / 100000);
                        // death100 = covidData.Countries[i].NewDeaths / (population / 100000);
                        // recovered100 = covidData.Countries[i].NewRecovered / (population / 100000); cases100.toFixed(2), death100.toFixed(2), recovered100.toFixed(2)
                        table.paintTableTotalCountry(covidData.Countries[i].NewConfirmed, covidData.Countries[i].NewDeaths, covidData.Countries[i].NewRecovered);
                    } else {
                        // cases100 = covidData.Countries[i].TotalConfirmed / (population / 100000);
                        // death100 = covidData.Countries[i].TotalDeaths / (population / 100000);
                        // recovered100 = covidData.Countries[i].TotalRecovered / (population / 100000);cases100.toFixed(2), death100.toFixed(2), recovered100.toFixed(2)
                        table.paintTableTotalCountry(covidData.Countries[i].TotalConfirmed, covidData.Countries[i].TotalDeaths, covidData.Countries[i].TotalRecovered);
                    }
                }
            }
        } else {
            // eslint-disable-next-line no-lonely-if
            if (this.mood === 0) {
                table.paintTableTotal(covidData.Global.NewConfirmed, covidData.Global.NewDeaths, covidData.Global.NewRecovered);
            } else {
                table.paintTableTotal(covidData.Global.TotalConfirmed, covidData.Global.TotalDeaths, covidData.Global.TotalRecovered);
            }
        }
    }

    // eslint-disable-next-line class-methods-use-this
    changeShow100orTotal() {

    }
}

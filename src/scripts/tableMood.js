import { Table } from './tablePaint';
import { getData } from './apis/apiCovid';

// eslint-disable-next-line import/prefer-default-export
export class TableMood {
    constructor(mood) {
        this.mood = mood;
    }

    // eslint-disable-next-line class-methods-use-this
    changeMood() {
        const table = new Table();
        if (sessionStorage.getItem('country')) {
            getData('https://api.covid19api.com/summary').then((data) => {
                for (let i = 0; i < data.Countries.length; i += 1) {
                    if (data.Countries[i].Country === sessionStorage.getItem('country')) {
                        if (this.mood === 0) {
                            table.paintTableTotalCountry(data.Countries[i].NewConfirmed, data.Countries[i].NewDeaths, data.Countries[i].NewRecovered);
                        } else {
                            table.paintTableTotalCountry(data.Countries[i].TotalConfirmed, data.Countries[i].TotalDeaths, data.Countries[i].TotalRecovered);
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

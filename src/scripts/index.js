import { getData } from './apis/apiCovid';
import { Table } from './tablePaint';
import './search';

getData('https://api.covid19api.com/summary').then((data) => {
    const table = new Table();
    // console.log(data);
    if (localStorage.getItem('country')) {
        for (let i = 0; i < data.Countries.length; i += 1) {
            // eslint-disable-next-line max-len
            table.paintTableIfCountry(data.Countries[i].Country, data.Countries[i].TotalConfirmed, data.Countries[i].TotalDeaths, data.Countries[i].TotalRecovered);
        }
    } else {
        // eslint-disable-next-line max-len
        table.paintTableTotal(data.Global.TotalConfirmed, data.Global.TotalDeaths, data.Global.TotalRecovered);
    }
});

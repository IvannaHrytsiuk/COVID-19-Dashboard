import { covidData } from '../state';

// eslint-disable-next-line import/prefer-default-export
export class CountryTable {
// eslint-disable-next-line class-methods-use-this
    paintTable() {
        document.querySelector('.countryTbody').innerHTML = '';
        for (let i = 0; i < covidData.Countries.length; i += 1) {
            document.querySelector('.countryTbody').innerHTML += `<tr><td>${covidData.Countries[i].Country}</td><td>${covidData.Countries[i].TotalConfirmed}</td></tr>`;
        }
    }
}

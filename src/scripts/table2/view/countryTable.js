import { covidData, countriesData } from '../../state';
// import { }
// eslint-disable-next-line import/prefer-default-export
export class CountryTable {
// eslint-disable-next-line class-methods-use-this
    paintTable(value) {
        document.querySelector('.countryTbody').innerHTML = '';
        let popul100;
        // eslint-disable-next-line default-case
        switch (value) {
        case 'Total confirmed':
            for (let i = 0; i < covidData.Countries.length; i += 1) {
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td>${covidData.Countries[i].Country}</td><td>${covidData.Countries[i].TotalConfirmed}</td></tr>`;
            }
            break;
        case 'Total death':
            for (let i = 0; i < covidData.Countries.length; i += 1) {
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td>${covidData.Countries[i].Country}</td><td>${covidData.Countries[i].TotalDeaths}</td></tr>`;
            }
            break;
        case 'Total recovered':
            for (let i = 0; i < covidData.Countries.length; i += 1) {
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td>${covidData.Countries[i].Country}</td><td>${covidData.Countries[i].TotalRecovered}</td></tr>`;
            }
            break;
        case 'New confirmed':
            for (let i = 0; i < covidData.Countries.length; i += 1) {
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td>${covidData.Countries[i].Country}</td><td>${covidData.Countries[i].NewConfirmed}</td></tr>`;
            }
            break;
        case 'New death':
            for (let i = 0; i < covidData.Countries.length; i += 1) {
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td>${covidData.Countries[i].Country}</td><td>${covidData.Countries[i].NewDeaths}</td></tr>`;
            }
            break;
        case 'New recovered':
            for (let i = 0; i < covidData.Countries.length; i += 1) {
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td>${covidData.Countries[i].Country}</td><td>${covidData.Countries[i].NewRecovered}</td></tr>`;
            }
            break;
        case 'Total confirmed 100K':
            for (let i = 0; i < covidData.Countries.length; i += 1) {
                const found = countriesData.find((element) => element.alpha2Code === covidData.Countries[i].CountryCode);
                popul100 = covidData.Countries[i].TotalConfirmed / (found.population / 100000);
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td>${covidData.Countries[i].Country}</td><td>${popul100.toFixed(2)}</td></tr>`;
            }
            break;
        case 'Total death 100K':
            for (let i = 0; i < covidData.Countries.length; i += 1) {
                const found = countriesData.find((element) => element.alpha2Code === covidData.Countries[i].CountryCode);
                popul100 = covidData.Countries[i].TotalDeaths / (found.population / 100000);
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td>${covidData.Countries[i].Country}</td><td>${popul100.toFixed(2)}</td></tr>`;
            }
            break;
        case 'Total recovered 100K':
            for (let i = 0; i < covidData.Countries.length; i += 1) {
                const found = countriesData.find((element) => element.alpha2Code === covidData.Countries[i].CountryCode);
                popul100 = covidData.Countries[i].TotalRecovered / (found.population / 100000);
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td>${covidData.Countries[i].Country}</td><td>${popul100.toFixed(2)}</td></tr>`;
            }
            break;
        case 'New confirmed 100K':
            for (let i = 0; i < covidData.Countries.length; i += 1) {
                const found = countriesData.find((element) => element.alpha2Code === covidData.Countries[i].CountryCode);
                popul100 = covidData.Countries[i].NewConfirmed / (found.population / 100000);
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td>${covidData.Countries[i].Country}</td><td>${popul100.toFixed(2)}</td></tr>`;
            }
            break;
        case 'New death 100K':
            for (let i = 0; i < covidData.Countries.length; i += 1) {
                const found = countriesData.find((element) => element.alpha2Code === covidData.Countries[i].CountryCode);
                popul100 = covidData.Countries[i].NewDeaths / (found.population / 100000);
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td>${covidData.Countries[i].Country}</td><td>${popul100.toFixed(2)}</td></tr>`;
            }
            break;
        case 'New recovered 100K':
            for (let i = 0; i < covidData.Countries.length; i += 1) {
                const found = countriesData.find((element) => element.alpha2Code === covidData.Countries[i].CountryCode);
                popul100 = covidData.Countries[i].NewRecovered / (found.population / 100000);
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td>${covidData.Countries[i].Country}</td><td>${popul100.toFixed(2)}</td></tr>`;
            }
            break;
        }
    }
}

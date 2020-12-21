import { covidData, countriesData, countriesCovidData } from '../../state';
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
            for (let i = 0; i < countriesCovidData.length; i += 1) {
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td>${countriesCovidData[i].country}</td><td>${countriesCovidData[i].cases}</td></tr>`;
            }
            break;
        case 'Total death':
            for (let i = 0; i < countriesCovidData.length; i += 1) {
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td>${countriesCovidData[i].country}</td><td>${countriesCovidData[i].deaths}</td></tr>`;
            }
            break;
        case 'Total recovered':
            for (let i = 0; i < countriesCovidData.length; i += 1) {
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td>${countriesCovidData[i].country}</td><td>${countriesCovidData[i].recovered}</td></tr>`;
            }
            break;
        case 'New confirmed':
            for (let i = 0; i < countriesCovidData.length; i += 1) {
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td>${countriesCovidData[i].country}</td><td>${countriesCovidData[i].todayCases}</td></tr>`;
            }
            break;
        case 'New death':
            for (let i = 0; i < countriesCovidData.length; i += 1) {
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td>${countriesCovidData[i].country}</td><td>${countriesCovidData[i].todayDeaths}</td></tr>`;
            }
            break;
        case 'New recovered':
            for (let i = 0; i < countriesCovidData.length; i += 1) {
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td>${countriesCovidData[i].country}</td><td>${countriesCovidData[i].todayRecovered}</td></tr>`;
            }
            break;
        case 'Total confirmed 100K':
            for (let i = 0; i < countriesCovidData.length; i += 1) {
                // const found = countriesData.find((element) => element.alpha2Code === covidData.Countries[i].CountryCode);
                // popul100 = covidData.Countries[i].TotalConfirmed / (found.population / 100000);
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td>${countriesCovidData[i].country}</td><td>${countriesCovidData[i].TotalConfirmed100K}</td></tr>`;
            }
            break;
        case 'Total death 100K':
            for (let i = 0; i < countriesCovidData.length; i += 1) {
                // const found = countriesData.find((element) => element.alpha2Code === covidData.Countries[i].CountryCode);
                // popul100 = covidData.Countries[i].TotalDeaths / (found.population / 100000);
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td>${countriesCovidData[i].country}</td><td>${countriesCovidData[i].TotalDeaths100K}</td></tr>`;
            }
            break;
        case 'Total recovered 100K':
            for (let i = 0; i < countriesCovidData.length; i += 1) {
                // const found = countriesData.find((element) => element.alpha2Code === covidData.Countries[i].CountryCode);
                // popul100 = covidData.Countries[i].TotalRecovered / (found.population / 100000);
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td>${countriesCovidData[i].country}</td><td>${countriesCovidData[i].TotalRecovered100K}</td></tr>`;
            }
            break;
        case 'New confirmed 100K':
            for (let i = 0; i < countriesCovidData.length; i += 1) {
                // const found = countriesData.find((element) => element.alpha2Code === covidData.Countries[i].CountryCode);
                // popul100 = covidData.Countries[i].NewConfirmed / (found.population / 100000);
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td>${countriesCovidData[i].country}</td><td>${countriesCovidData[i].NewConfirmed100K}</td></tr>`;
            }
            break;
        case 'New death 100K':
            for (let i = 0; i < countriesCovidData.length; i += 1) {
                // const found = countriesData.find((element) => element.alpha2Code === covidData.Countries[i].CountryCode);
                // popul100 = covidData.Countries[i].NewDeaths / (found.population / 100000);
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td>${countriesCovidData[i].country}</td><td>${covidData.Countries[i].NewDeaths100K}</td></tr>`;
            }
            break;
        case 'New recovered 100K':
            for (let i = 0; i < countriesCovidData.length; i += 1) {
                // const found = countriesData.find((element) => element.alpha2Code === covidData.Countries[i].CountryCode);
                // popul100 = covidData.Countries[i].NewRecovered / (found.population / 100000);
                document.querySelector('.countryTbody').innerHTML += `<tr class="countryRow"><td>${countriesCovidData[i].country}</td><td>${covidData.Countries[i].NewRecovered100K}</td></tr>`;
            }
            break;
        }
    }
}
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-await-in-loop */
import regeneratorRuntime from 'regenerator-runtime';

export let covidData;
export let countriesData;
export let countriesCovidData;
export let allDayCases;
export let allDayDeaths;
export let allDayRecovered;
export let sumPopualtion = 0;
export let dataFromCountry;
export let populationCountry;
export let country100K;
export let coordinatesCountry;
export const StateClass = class {
    async getCovidData() {
        try {
            this.url = 'https://disease.sh/v3/covid-19/all';
            this.res = await fetch(this.url);
            this.data = await this.res.json();
            covidData = this.data;
        } catch (error) {
            console.log(error);
        }
    }

    async getCovidDataCountries() {
        try {
            this.url = 'https://disease.sh/v3/covid-19/countries';
            this.res = await fetch(this.url);
            this.data = await this.res.json();
            countriesCovidData = this.data;
            this.getCalculatePopulation();
        } catch (error) {
            console.log(error);
        }
    }

    async getCountriesData() {
        try {
            this.url = 'https://restcountries.eu/rest/v2/all?fields=name;population;flag;alpha2Code';
            this.res = await fetch(this.url);
            this.data = await this.res.json();
            countriesData = this.data;
            for (let i = 0; i < countriesData.length; i += 1) {
                sumPopualtion += countriesData[i].population;
            }
        } catch (error) {
            console.log(error);
        }
    }

    getCalculatePopulation() {
        for (this.i = 0; this.i < countriesCovidData.length; this.i += 1) {
            if (countriesCovidData[this.i].population === 0) {
                countriesCovidData[this.i].TotalConfirmed100K = 0;
                countriesCovidData[this.i].TotalDeaths100K = 0;
                countriesCovidData[this.i].TotalRecovered100K = 0;
                countriesCovidData[this.i].NewConfirmed100K = 0;
                countriesCovidData[this.i].NewDeaths100K = 0;
                countriesCovidData[this.i].NewRecovered100K = 0;
            } else {
                countriesCovidData[this.i].TotalConfirmed100K = +(countriesCovidData[this.i].cases / (countriesCovidData[this.i].population / 100000)).toFixed(2);
                countriesCovidData[this.i].TotalDeaths100K = +(countriesCovidData[this.i].deaths / (countriesCovidData[this.i].population / 100000)).toFixed(2);
                countriesCovidData[this.i].TotalRecovered100K = +(countriesCovidData[this.i].recovered / (countriesCovidData[this.i].population / 100000)).toFixed(2);
                countriesCovidData[this.i].NewConfirmed100K = +(countriesCovidData[this.i].todayCases / (countriesCovidData[this.i].population / 100000)).toFixed(2);
                countriesCovidData[this.i].NewDeaths100K = +(countriesCovidData[this.i].todayDeaths / (countriesCovidData[this.i].population / 100000)).toFixed(2);
                countriesCovidData[this.i].NewRecovered100K = +(countriesCovidData[this.i].todayRecovered / (countriesCovidData[this.i].population / 100000)).toFixed(2);
            }
        }
        covidData.TotalConfirmed100K = +(covidData.cases / (covidData.population / 100000)).toFixed(2);
        covidData.TotalDeaths100K = +(covidData.deaths / (covidData.population / 100000)).toFixed(2);
        covidData.TotalRecovered100K = +(covidData.recovered / (covidData.population / 100000)).toFixed(2);
        covidData.NewConfirmed100K = +(covidData.todayCases / (covidData.population / 100000)).toFixed(2);
        covidData.NewDeaths100K = +(covidData.todayDeaths / (covidData.population / 100000)).toFixed(2);
        covidData.NewRecovered100K = +(covidData.todayRecovered / (covidData.population / 100000)).toFixed(2);
    }

    async getTotalEveryDayData() {
        try {
            this.url = 'https://disease.sh/v3/covid-19/historical/all?lastdays=366';
            this.res = await fetch(this.url);
            this.data = await this.res.json();
            allDayCases = this.data.cases;
            allDayDeaths = this.data.deaths;
            allDayRecovered = this.data.recovered;
        } catch (error) {
            console.log(error);
        }
    }

    async getDataFromCountry(nameCountry) {
        try {
            this.url = `https://disease.sh/v3/covid-19/historical/${nameCountry}?lastdays=all`;
            this.res = await fetch(this.url);
            this.data = await this.res.json();
            dataFromCountry = this.data;
            populationCountry = countriesCovidData.find((e) => e.countryInfo.iso2 === sessionStorage.getItem('country')).population;
            allDayCases = dataFromCountry.timeline.cases;
            allDayDeaths = dataFromCountry.timeline.deaths;
            allDayRecovered = dataFromCountry.timeline.recovered;
        } catch (error) {
            console.log(error);
        }
    }

    getNewEveryDayData(newDay, data) {
        newDay.push(Object.values(data)[0]);
        for (this.i = 0; this.i < Object.values(data).length - 1; this.i += 1) {
            newDay.push(Object.values(data)[this.i + 1] - Object.values(data)[this.i]);
        }
        return Object.assign(...Object.keys(data).map((n, i) => ({ [n]: newDay.map((e) => (e < 0 ? e = 0 : e))[i] })));
    }
};

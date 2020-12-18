/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-await-in-loop */
import regeneratorRuntime from 'regenerator-runtime';

export let covidData;
export let countriesData;
export let allDayCases;
export let allDaydDeaths;
export let allDayRecovered;
export let sumPopualtion = 0;
export const StateClass = class {
    async getCovidData() {
        try {
            // https://cors-anywhere.herokuapp.com/
            this.url = 'https://api.covid19api.com/summary';
            this.res = await fetch(this.url);
            this.data = await this.res.json();
            if (this.data.Message === '') {
                covidData = this.data;
                for (this.i = 0; this.i < covidData.Countries.length; this.i += 1) {
                    this.urlMapCenter = `https://api.mapbox.com/geocoding/v5/mapbox.places/${covidData.Countries[this.i].Slug}.json?types=country&access_token=pk.eyJ1IjoibXlmZW5peDkyIiwiYSI6ImNrYXBpdXhwMTF5NTYzMXA2emY0M3pnd24ifQ.I73eBezMUvPr3OAN-aF1Cg`;
                    this.resMapCenter = await fetch(this.urlMapCenter);
                    this.dataMapCenter = await this.resMapCenter.json();
                    covidData.Countries[this.i].centerCountry = this.dataMapCenter.features[0].center.reverse();
                    // доделать
                    // p = new Promise((resolve, reject) => {
                    //   resolve(fetch(urlMapCenter));
                    // });
                }
                // await Promise.all(Array.from(p)).then((val) => {
                //   console.log(val);
                // });
            } else {
                throw Error(this.data.Message);
            }
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

    async getTotalEveryDayData() {
        try {
            this.url = 'https://disease.sh/v3/covid-19/historical/all?lastdays=366';
            this.res = await fetch(this.url);
            this.data = await this.res.json();
            allDayCases = this.data.cases;
            allDaydDeaths = this.data.deaths;
            allDayRecovered = this.data.recovered;
        } catch (error) {
            console.log(error);
        }
    }

    getNewEveryDayData(newDay, data) {
        newDay.push(Object.values(data)[0]);
        for (this.i = 0; this.i < Object.values(data).length - 1; this.i += 1) {
            newDay.push(Object.values(data)[this.i + 1] - Object.values(data)[this.i]);
        }
        return Object.assign(...Object.keys(data).map((n, i) => ({ [n]: newDay[i] })));
    }
};

/* eslint-disable no-await-in-loop */
import regeneratorRuntime from 'regenerator-runtime';
// eslint-disable-next-line import/no-mutable-exports
export let covidData;
// eslint-disable-next-line import/no-mutable-exports
export let countriesData;
export const StateClass = class {
    async getCovidData() {
        try {
            this.url = 'https://api.covid19api.com/summary';
            this.res = await fetch(this.url);
            this.data = await this.res.json();
            if (this.data.Message === '') {
                covidData = this.data;
                for (this.i = 0; this.i < covidData.Countries.length; this.i += 1) {
                    this.urlMapCenter = `https://api.mapbox.com/geocoding/v5/mapbox.places/${covidData.Countries[this.i].Country},${covidData.Countries[this.i].CountryCode}.json?types=country&access_token=pk.eyJ1IjoibXlmZW5peDkyIiwiYSI6ImNrYXBpdXhwMTF5NTYzMXA2emY0M3pnd24ifQ.I73eBezMUvPr3OAN-aF1Cg`;
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
                return;
                // throw Error(this.data.Message);
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
        } catch (error) {
            console.log(error);
        }
    }
};

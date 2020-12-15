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
            covidData = this.data;
        } catch (error) {
            console.log(error);
        }
    }

    async getCountriesData() {
        try {
            this.url = 'https://restcountries.eu/rest/v2/all?fields=name;population;flag';
            this.res = await fetch(this.url);
            this.data = await this.res.json();
            countriesData = this.data;
        } catch (error) {
            console.log(error);
        }
    }
};

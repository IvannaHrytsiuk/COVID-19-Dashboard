/* eslint-disable import/prefer-default-export */
export let dataAll;
export const StoreClass = class {
  async sendCountry() {
    try {
      this.url = `https://api.covid19api.com/summary`;
      this.res = await fetch(this.url);
      this.data = await this.res.json();
      // this.url2 = `https://restcountries.eu/rest/v2/all?fields=name;population`;
      // this.res2 = await fetch(this.url2);
      // this.data2 = await this.res2.json();
      dataAll = this.data;

      if (this.data.Message === '') {
        for (let i = 0; i < dataAll.Countries.length; i += 1) {
          this.urlMapCenter = `https://api.mapbox.com/geocoding/v5/mapbox.places/${dataAll.Countries[i].Country},${dataAll.Countries[i].CountryCode}.json?types=country&access_token=pk.eyJ1IjoibXlmZW5peDkyIiwiYSI6ImNrYXBpdXhwMTF5NTYzMXA2emY0M3pnd24ifQ.I73eBezMUvPr3OAN-aF1Cg`;
          this.resMapCenter = await fetch(this.urlMapCenter);
          this.dataMapCenter = await this.resMapCenter.json();
          dataAll.Countries[i].centerCountry = this.dataMapCenter.features[0].center.reverse();
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
};

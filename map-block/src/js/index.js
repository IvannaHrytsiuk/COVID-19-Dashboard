import '../styles/style.css';
// import 'leaflet/dist/leaflet';
// import 'leaflet/dist/leaflet.css';
import regeneratorRuntime from "regenerator-runtime";
import { countryData } from './Country';
import {
  map, grayscale, info, legend,
} from './constants/constants';
import { ViewMapClass } from './View/index';
import { ControllerClass } from './Controller/index';

let cases = [];
let countryName = [];
let codeName = [];
let dataAll;
let nameCountry;
let p;
const countryUrl = [];

async function sendCountry() {
  try {
    const url = `https://api.covid19api.com/summary`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.Message === '') {
      countryName = data.Countries.map((e) => e.Country);
      codeName = data.Countries.map((e) => e.CountryCode);
      cases = data.Countries.map((e) => e.TotalConfirmed);

      for (let i = 0; i < countryName.length; i += 1) {
        const urlMapCenter = `https://api.mapbox.com/geocoding/v5/mapbox.places/${countryName[i]},${codeName[i]}.json?types=country&access_token=pk.eyJ1IjoibXlmZW5peDkyIiwiYSI6ImNrYXBpdXhwMTF5NTYzMXA2emY0M3pnd24ifQ.I73eBezMUvPr3OAN-aF1Cg`;
        const resMapCenter = await fetch(urlMapCenter);
        const dataMapCenter = await resMapCenter.json();
        countryUrl.push(dataMapCenter.features[0].center);
        // доделать
        // p = new Promise((resolve, reject) => {
        //   resolve(fetch(urlMapCenter));
        // });
      }
      // await Promise.all(Array.from(p)).then((val) => {
      //   console.log(val);
      // });
      ViewMap.addCircle();
    } else {
      throw Error(data.Message);
    }
  } catch (error) {
    console.log(error);
  } finally {
    dataAll = Object.assign(...codeName.map((n, i) => ({ [n]: cases[i] })));
  }
}

const ViewMap = new ViewMapClass();

grayscale.addTo(map);
info.onAdd = ViewMap.addInfo;
info.update = ViewMap.updateInfo;
info.addTo(map);

// get color depending on population density value
// function getColor(d) {
//   return d > 1000 ? '#800026'
//     : d > 500 ? '#BD0026'
//       : d > 200 ? '#E31A1C'
//         : d > 100 ? '#FC4E2A'
//           : d > 50 ? '#FD8D3C'
//             : d > 20 ? '#FEB24C'
//               : d > 10 ? '#FED976'
//                 : '#FFEDA0';
// }

function style() {
  return {
    weight: 1,
    opacity: 1,
    color: '#666',
    dashArray: '',
    fillColor: '#555',
  };
}

function onEachFeature(feature, layer) {
  layer.on({
    mouseover: ViewMap.highlightFeature,
    mouseout: ControllerClass.resetHighlight,
    click: (e) => {
      const layers = e.target;
      nameCountry = layers.feature.properties.name;
    },
  //  click: zoomToFeature,
  });
}

const geojson = L.geoJson(countryData, {
  style,
  onEachFeature,
}).addTo(map);

legend.onAdd = ViewMap.addLegend;
legend.addTo(map);

document.addEventListener('DOMContentLoaded', () => {
  ViewMap.init();
  sendCountry();
});

export {
  dataAll, geojson, countryUrl, cases,
};

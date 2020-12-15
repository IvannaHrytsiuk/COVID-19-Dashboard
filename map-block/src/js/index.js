import '../styles/style.css';
import regeneratorRuntime from "regenerator-runtime";
import { countryData } from './Country';
import {
  map, grayscale, info, legend, Store, ViewMap, Model,
} from './constants/index';
import { ControllerClass } from './Controller/index';

let nameCountry;

grayscale.addTo(map);
info.onAdd = ViewMap.addInfo;
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
  });
}

const geojson = L.geoJson(countryData, {
  style,
  onEachFeature,
}).addTo(map);

legend.onAdd = ViewMap.addLegend;
legend.addTo(map);

// document.querySelector('body').addEventListener('click', () => {
//   console.log(nameCountry);
// //  Store.sendCountry()
// })

document.querySelector('#chooseOptions').addEventListener('change', Model.changeColorCircle);

document.addEventListener('DOMContentLoaded', () => {
  Store.sendCountry();
  ViewMap.init();
  setTimeout(() => {
    ViewMap.addCircle('TotalConfirmed', 'red', 40);
  }, 1000);
});

export { geojson, ViewMap, Model };

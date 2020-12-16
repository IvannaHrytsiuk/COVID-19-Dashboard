import '../style/style.css';
import regeneratorRuntime from "regenerator-runtime";
import { countryData } from './constants/Country';
import { map, Store, ViewMap, Model, } from './constants/index';
import { ControllerClass } from './Controller/index';

let nameCountry;

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

document.querySelector('#chooseOptions').addEventListener('change', Model.changeColorCircle);

document.addEventListener('DOMContentLoaded', () => {
  Store.sendCountry();
  ViewMap.init();
  setTimeout(() => {
    ViewMap.addCircle('TotalConfirmed', 'red', 40);
  }, 1000);
});

export { geojson, ViewMap, Model };

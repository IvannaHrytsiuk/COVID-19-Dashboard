/* eslint-disable import/prefer-default-export */
import { Table } from './table1/view/tablePaint';
import { CountryTable } from './table2/view/countryTable';
import { StateClass } from './state';
import '../style/style.css';
import regeneratorRuntime from 'regenerator-runtime';
import { countryData } from './map/constants/Country';
import {
    map, ViewMap, Model,
} from './map/constants/index';
import { ControllerClass } from './map/Controller/index';

import './general/search';
import './keyBoard';
import './table1/controller/table';

const State = new StateClass();
const countryTable = new CountryTable();
const table = new Table();

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
    State.getCovidData();
    State.getCountriesData();
});

window.addEventListener('load', () => {
    countryTable.paintTable();
    table.checkSwitcher();
    table.paintTableHeader();
    ViewMap.init();
    setTimeout(() => {
        ViewMap.addCircle('TotalConfirmed', 'red', 40);
    }, 1000);
});

export { geojson, State };

/* eslint-disable import/prefer-default-export */
import { Table } from './scripts/table1/view/tablePaint';
import { CountryTable } from './scripts/table2/view/countryTable';
import { StateClass, covidData } from './scripts/state';
import './style/style.css';
import './style/keyBoard.css';
import { countryData } from './scripts/map/constants/Country';
import {
    map, ViewMap, Model,
} from './scripts/map/constants/index';
import { ControllerClass } from './scripts/map/Controller/index';
import { TableControll } from './scripts/table1/model/tableControll';
import { IfError } from './scripts/general/ifError';

import './scripts/general/search';
import './scripts/keyBoard';
import './scripts/table1/controller/table';

const State = new StateClass();
const countryTable = new CountryTable();
const table = new Table();
const tableControll = new TableControll();

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

// function loader() {
window.addEventListener('load', () => {
    setTimeout(()=> {
        if (!covidData || covidData === 'undefined') {
            const error = new IfError();
            error.ifErrorView();
            setTimeout(() => {
                State.getCovidData();
                window.location.reload();
                console.log('work');
            }, 1000);
        } else {
            countryTable.paintTable();
            table.paintTableSelect();
            table.paintTableHeader();
            tableControll.getMoodTable('Total Confirmed');
            ViewMap.init();
            setTimeout(() => {
                ViewMap.addCircle('TotalConfirmed', 'red', 40);
            }, 1000);
        }
    }, 1000);
});
// }
// loader();

export { geojson, State };

/* eslint-disable import/prefer-default-export */
import { Table } from './scripts/table1/view/tablePaint';
import { CountryTable } from './scripts/table2/view/countryTable';
import {
    StateClass, allDayCases, covidData, coordinatesCountry,
} from './scripts/state';
// import rememberCountry from './scripts/general/search';
import './style/style.css';
import './style/keyBoard.css';
import { countryData } from './scripts/map/constants/Country';
import {
    map, ViewMap, Model,
} from './scripts/map/constants/index';
import { ControllerClass } from './scripts/map/Controller/index';
import { ControllerGraphicClass } from './scripts/graphic-block/Controller/index';
import rememberCountry from './scripts/general/search';
import './scripts/keyBoard';
// import './scripts/table1/controller/table';
import { TableModel } from './scripts/table1/model/tableModel';
import { IfError } from './scripts/general/ifError';
import { ViewGraphicClass } from './scripts/graphic-block/View/index';
import { ModelClass } from './scripts/graphic-block/Model/index';
import { CountriesTableModel } from './scripts/table2/model/countiesTableModel';

import './scripts/table1/controller/table';
import './scripts/table2/controller/countriesControll';

const ViewGraphic = new ViewGraphicClass();
const State = new StateClass();
const countryTable = new CountryTable();
const table = new Table();
const ModelGraphic = new ModelClass();
const tableModel = new TableModel();
const Control = new ControllerClass();
let geojson;
const countriesTableModel = new CountriesTableModel();

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
            rememberCountry(layers.feature.properties.id);
            document.querySelector('.nameCountry').textContent = layers.feature.properties.name;
            State.getDataFromCountry(layers.feature.properties.id);
            setTimeout(() => {
                ModelGraphic.changeColorGraphic();
                tableModel.getMoodTable('Total');
            }, 1000);
        },
    });
}

function eventChange(select) {
    document.querySelector('.mapSelect').options.selectedIndex = select;
    document.querySelector('.graphic').options.selectedIndex = select;
    document.querySelector('#chooseView').options.selectedIndex = select;
    ModelGraphic.changeColorGraphic();
    Model.changeColorCircle();
    countryTable.paintTable(document.querySelector('.table2select').options[select].value);
    countriesTableModel.tableConnect(document.getElementById('chooseView').value);
}

document.querySelector('.mapSelect').addEventListener('change', () => {
    eventChange(document.querySelector('.mapSelect').options.selectedIndex);
});
document.querySelector('.graphic').addEventListener('change', () => {
    eventChange(document.querySelector('.graphic').options.selectedIndex);
});
document.querySelector('.table2select').addEventListener('change', () => {
    eventChange(document.querySelector('.table2select').options.selectedIndex);
});

// document.querySelector('#chooseOptions').addEventListener('change', Model.changeColorCircle);
document.addEventListener('DOMContentLoaded', () => {
    State.getCovidData();
    State.getCountriesData();
    State.getTotalEveryDayData();
});
let a;
window.addEventListener('load', () => {
    setTimeout(() => {
        if (!covidData || covidData === 'undefined') {
            const error = new IfError();
            error.ifErrorView();
            a = setInterval(() => {
                State.getCovidData();
                window.location.reload();
                console.log('work');
            }, 5000);
        } else {
            console.log('done');
            clearInterval(a);
            document.getElementById('chooseView').value = 'Total confirmed';
            countryTable.paintTable(document.getElementById('chooseView').value);
            table.paintTableSelect();
            table.paintTableHeader();
            tableModel.getMoodTable('Total');
            ViewMap.init();
            setTimeout(() => {
                ViewMap.addCircle('TotalConfirmed', 'red', 40);
                ViewGraphic.init('Total Cases', allDayCases, 'red');
                geojson = L.geoJson(countryData, {
                    style,
                    onEachFeature,
                }).addTo(map);
            }, 1000);
        }
    }, 1000);
});

export {
    geojson, State, ModelGraphic, Model,
};

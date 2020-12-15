import { Table } from './view/tablePaint';
import { CountryTable } from './view/countryTable';
import { StateClass } from './state';

import './controller/search';
import './keyBoard';
import './controller/table';

const State = new StateClass();
const countryTable = new CountryTable();
const table = new Table();

document.addEventListener('DOMContentLoaded', () => {
    State.getCovidData();
    State.getCountriesData();
});

window.addEventListener('load', () => {
    countryTable.paintTable();
    table.checkSwitcher();
    table.paintTableHeader();
});

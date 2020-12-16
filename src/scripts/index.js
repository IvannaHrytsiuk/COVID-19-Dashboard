import { Table } from './table1/view/tablePaint';
import { CountryTable } from './table2/view/countryTable';
import { StateClass } from './state';

import './general/search';
import './keyBoard';
import './table1/controller/table';

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

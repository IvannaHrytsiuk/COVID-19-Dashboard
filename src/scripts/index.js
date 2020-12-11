// import { getData } from './apis/apiCovid';
import { Table } from './tablePaint';
import './search';

const table = new Table();
table.checkSwitcher();
table.paintTableHeader();

document.querySelector('.switcher').addEventListener('click', () => {
    table.checkSwitcher();
});

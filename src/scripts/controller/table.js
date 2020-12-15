import { Table } from '../view/tablePaint';

const table = new Table();
document.querySelector('.switcher').addEventListener('click', () => {
    table.checkSwitcher();
});

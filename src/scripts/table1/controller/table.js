import { Table } from '../view/tablePaint';
import { TableControll } from '../model/tableControll';

const table = new Table();
document.querySelector('.switcher').addEventListener('click', () => {
    table.checkSwitcher();
});

document.getElementById('selectMoodShow').addEventListener('click', () => {
    const tableControll = new TableControll();
    tableControll.getMoodTable(document.getElementById('selectMoodShow').value);
});

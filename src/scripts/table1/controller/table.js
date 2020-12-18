import { TableModel } from '../model/tableModel';
import { CountryTable } from '../../table2/view/countryTable';

document.getElementById('selectMoodShow').addEventListener('change', () => {
    const tableModel = new TableModel();
    const countryTable = new CountryTable();
    tableModel.getMoodTable(document.getElementById('selectMoodShow').value);
    if (document.getElementById('selectMoodShow').value === 'Total') {
        document.getElementById('chooseView').value = 'Total confirmed';
        countryTable.paintTable('Total confirmed');
    } else if (document.getElementById('selectMoodShow').value === 'New') {
        document.getElementById('chooseView').value = 'New confirmed';
        countryTable.paintTable('New confirmed');
    } else if (document.getElementById('selectMoodShow').value === 'Total per 100K population') {
        document.getElementById('chooseView').value = 'Total confirmed 100K';
        countryTable.paintTable('Total confirmed 100K');
    }
    if (document.getElementById('selectMoodShow').value === 'New confirmed 100K') {
        document.getElementById('chooseView').value = 'New confirmed 100K';
        countryTable.paintTable('New confirmed 100K');
    }
});

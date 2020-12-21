import { TableModel } from '../model/tableModel';
import { CountryTable } from '../../table2/view/countryTable';
import { ModelGraphic, Model } from '../../../index';

document.getElementById('selectMoodShow').addEventListener('change', () => {
    const tableModel = new TableModel();
    const countryTable = new CountryTable();
    tableModel.getMoodTable(document.getElementById('selectMoodShow').value);
    if (document.getElementById('selectMoodShow').value === 'Total') {
        document.getElementById('chooseView').value = 'Total confirmed';
        countryTable.paintTable('Total confirmed');

        document.querySelector('.mapSelect').options.selectedIndex = 0;
        document.querySelector('.graphic').options.selectedIndex = 0;
        ModelGraphic.changeColorGraphic();
        Model.changeColorCircle();
    } else if (document.getElementById('selectMoodShow').value === 'New') {
        document.getElementById('chooseView').value = 'New confirmed';
        countryTable.paintTable('New confirmed');

        document.querySelector('.mapSelect').options.selectedIndex = 3;
        document.querySelector('.graphic').options.selectedIndex = 3;
        ModelGraphic.changeColorGraphic();
        Model.changeColorCircle();
    } else if (document.getElementById('selectMoodShow').value === 'Total per 100K population') {
        document.getElementById('chooseView').value = 'Total confirmed 100K';
        countryTable.paintTable('Total confirmed 100K');

        document.querySelector('.mapSelect').options.selectedIndex = 6;
        document.querySelector('.graphic').options.selectedIndex = 6;
        ModelGraphic.changeColorGraphic();
        Model.changeColorCircle();
    }
    if (document.getElementById('selectMoodShow').value === 'New per 100K population') {
        document.getElementById('chooseView').value = 'New confirmed 100K';
        countryTable.paintTable('New confirmed 100K');

        document.querySelector('.mapSelect').options.selectedIndex = 9;
        document.querySelector('.graphic').options.selectedIndex = 9;
        ModelGraphic.changeColorGraphic();
        Model.changeColorCircle();
    }
});
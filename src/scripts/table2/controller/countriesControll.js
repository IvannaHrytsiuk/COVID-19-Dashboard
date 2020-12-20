import { CountryTable } from '../view/countryTable';
import { CountriesTableModel } from '../model/countiesTableModel';

document.getElementById('chooseView').addEventListener('change', () => {
    const countryTable = new CountryTable();
    const countriesTableModel = new CountriesTableModel();
    countryTable.paintTable(document.getElementById('chooseView').value);
    countriesTableModel.tableConnect(document.getElementById('chooseView').value);
});
let countLetter = 0;
document.getElementById('letter').addEventListener('click', () => {
    if (countLetter === 0) {
        countLetter = 1;
    } else {
        countLetter = 0;
    }
});

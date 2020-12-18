import { CountryTable } from '../view/countryTable';

document.getElementById('chooseView').addEventListener('change', () => {
    const countryTable = new CountryTable();
    countryTable.paintTable(document.getElementById('chooseView').value);
});

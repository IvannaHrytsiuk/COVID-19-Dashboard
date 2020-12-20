import { countriesData } from '../state';
import { Table } from '../table1/view/tablePaint';
import { TableModel } from '../table1/model/tableModel';
// import { clickedElement } from '../keyBoard';

document.querySelector('.searchCountry').addEventListener('focus', () => {
    paintSearch(countriesData, document.querySelector('.countryList'));
});
document.querySelector('.searchCountryTable').addEventListener('focus', () => {
    paintSearch(countriesData, document.querySelector('.countryListTable2'));
});

function paintSearch(arr, elem) {
    elem.innerHTML = '';
    for (let i = 0; arr.length > 15 ? i < 15 : i < arr.length; i += 1) {
        elem.innerHTML += `<li class="country"><img src="${arr[i].flag}">${arr[i].name}</li>`;
    }
    for (let i = 0; i < document.querySelectorAll('.country').length; i += 1) {
        // eslint-disable-next-line no-loop-func
        document.querySelectorAll('.country')[i].addEventListener('click', (e) => {
            // eslint-disable-next-line no-use-before-define
            rememberCountry(e.target.textContent);
            elem.innerHTML = '';
            document.querySelector('.searchCountry').value = '';
            document.querySelector('.searchCountryTable').value = '';
            const table = new Table();
            table.paintTableHeader();
            const tableModel = new TableModel();
            if (document.getElementById('selectMoodShow').value) {
                tableModel.getMoodTable(document.getElementById('selectMoodShow').value);
            } else {
                tableModel.getMoodTable('Total');
            }
        });
    }
}

document.querySelector('.searchCountry').addEventListener('keyup', (e) => {
    // eslint-disable-next-line prefer-destructuring
    const value = e.target.value.toUpperCase();
    const newArr = [];
    for (let i = 0; i < countriesData.length; i += 1) {
        if (countriesData[i].name.toUpperCase().indexOf(value) > -1) {
            newArr.push(countriesData[i]);
        }
    }
    paintSearch(newArr, document.querySelector('.countryList'));
});
document.querySelector('.searchCountryTable').addEventListener('keyup', (e) => {
    // eslint-disable-next-line prefer-destructuring
    const value = e.target.value.toUpperCase();
    const newArr = [];
    for (let i = 0; i < countriesData.length; i += 1) {
        if (countriesData[i].name.toUpperCase().indexOf(value) > -1) {
            newArr.push(countriesData[i]);
        }
    }
    paintSearch(newArr, document.querySelector('.countryListTable2'));
});

function rememberCountry(country) {
    sessionStorage.setItem('country', country);
}

document.body.addEventListener('click', (e) => {
    if (e.target.dataset.keycode) {
        document.querySelector('.searchCountryTable').dispatchEvent(new KeyboardEvent('keyup', { keyCode: e.target.dataset.keycode }));
    }
});

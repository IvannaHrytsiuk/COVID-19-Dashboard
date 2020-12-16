import { countriesData } from '../state';
import { Table } from '../table1/view/tablePaint';

document.querySelector('.searchCountry').addEventListener('focus', () => {
    paintSearch(countriesData);
});

function paintSearch(arr) {
    document.querySelector('.countryList').innerHTML = '';
    for (let i = 0; arr.length > 15 ? i < 15 : i < arr.length; i += 1) {
        document.querySelector('.countryList').innerHTML += `<li class="country"><img src="${arr[i].flag}">${arr[i].name}</li>`;
    }
    for (let i = 0; i < document.querySelectorAll('.country').length; i += 1) {
        // eslint-disable-next-line no-loop-func
        document.querySelectorAll('.country')[i].addEventListener('click', (e) => {
            // eslint-disable-next-line no-use-before-define
            rememberCountry(e.target.textContent);
            document.querySelector('.countryList').innerHTML = '';
            document.querySelector('.searchCountry').value = '';
            const table = new Table();
            table.checkSwitcher();
            table.paintTableHeader();
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
    paintSearch(newArr);
});

function rememberCountry(country) {
    sessionStorage.setItem('country', country);
}

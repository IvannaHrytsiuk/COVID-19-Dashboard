import { getFlags } from './apis/apiFlags';
import { Table } from './tablePaint';

let mainArr;

document.getElementById('searchCountry').addEventListener('focus', () => {
    getFlags('https://restcountries.eu/rest/v2/all?fields=name;population;flag').then((data) => {
        mainArr = data;
        // eslint-disable-next-line no-use-before-define
        paintSearch(data);
    });
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
            document.getElementById('searchCountry').value = '';
            const table = new Table();
            table.checkSwitcher();
            table.paintTableHeader();
        });
    }
}

document.getElementById('searchCountry').addEventListener('keyup', (e) => {
    // eslint-disable-next-line prefer-destructuring
    const value = e.target.value.toUpperCase();
    const newArr = [];
    for (let i = 0; i < mainArr.length; i += 1) {
        if (mainArr[i].name.toUpperCase().indexOf(value) > -1) {
            newArr.push(mainArr[i]);
        }
    }
    paintSearch(newArr);
});

function rememberCountry(country) {
    sessionStorage.setItem('country', country);
}

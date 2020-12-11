import { TableMood } from './tableMood';

// eslint-disable-next-line import/prefer-default-export
export class Table {
    constructor() {
        this.switcher = 0;
    }

    checkSwitcher() {
        if (this.switcher === 0) {
            this.switcher = 1;
        } else {
            this.switcher = 0;
        }
        const mood = new TableMood(this.switcher);
        return mood.changeMood();
    }

    // eslint-disable-next-line class-methods-use-this
    paintTableHeader() {
        document.querySelector('thead').innerHTML = '';
        if (sessionStorage.getItem('country')) {
            document.querySelector('thead').innerHTML = '<tr><th>Cases/Per 100K Population</th><th>Death/Per 100K Population</th><th>Recovered/Per 100K Population</th></tr>';
        } else {
            document.querySelector('thead').innerHTML = '<tr><th>Cases</th><th>Death</th><th>Recovered</th></tr>';
        }
    }

    // eslint-disable-next-line class-methods-use-this
    paintTableTotalCountry(cases, death, recovered, cases100, death100, recovered100) {
        document.querySelector('tbody').innerHTML = '';
        document.querySelector('tbody').innerHTML += `<tr> <th>${cases} / ${cases100}</th><th>${death} / ${death100}</th><th>${recovered} / ${recovered100}</th></tr>`;
    }

    // eslint-disable-next-line class-methods-use-this
    paintTableTotal(cases, death, recovered) {
        document.querySelector('tbody').innerHTML = '';
        document.querySelector('tbody').innerHTML += `<tr> <th>${cases}</th><th>${death}</th><th>${recovered}</th></tr>`;
    }
}

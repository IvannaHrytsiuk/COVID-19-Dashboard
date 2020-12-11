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
    paintTableTotalCountry(cases, death, recovered) {
        document.querySelector('tbody').innerHTML = '';
        document.querySelector('tbody').innerHTML += `<tr> <th>${cases}</th><th>${death}</th><th>${recovered}</th></tr>`;
    }

    // eslint-disable-next-line class-methods-use-this
    paintTableTotal(cases, death, recovered) {
        document.querySelector('tbody').innerHTML = '';
        document.querySelector('tbody').innerHTML += `<tr> <th>${cases}</th><th>${death}</th><th>${recovered}</th></tr>`;
    }
}

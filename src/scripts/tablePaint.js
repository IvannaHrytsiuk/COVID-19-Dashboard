// eslint-disable-next-line import/prefer-default-export
export class Table {
    // eslint-disable-next-line class-methods-use-this
    paintTableTotalCountry(cases, death, recovered) {
        document.querySelector('thead').innerHTML += `<tr> <th>${death}</th><th>${cases}</th><th>${recovered}</th></tr>`;
    }

    // eslint-disable-next-line class-methods-use-this
    paintTableTotal(cases, death, recovered) {
        document.querySelector('thead').innerHTML += `<tr> <th>${death}</th><th>${cases}</th><th>${recovered}</th></tr>`;
    }
}

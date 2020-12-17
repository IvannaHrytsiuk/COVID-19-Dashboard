// import { Table } from '../view/tablePaint';
// import { covidData } from '../../state';

// // eslint-disable-next-line import/prefer-default-export
// export class TableMood {
//     constructor(mood) {
//         this.mood = mood;
//     }

//     // eslint-disable-next-line class-methods-use-this
//     changeMood() {
//         const table = new Table();
//         if (sessionStorage.getItem('country')) {
//             for (let i = 0; i < covidData.Countries.length; i += 1) {
//                 if (covidData.Countries[i].Country === sessionStorage.getItem('country')) {
//                     if (this.mood === 0) {
//                         table.paintTableTotalCountry(covidData.Countries[i].NewConfirmed, covidData.Countries[i].NewDeaths, covidData.Countries[i].NewRecovered);
//                     } else {
//                         table.paintTableTotalCountry(covidData.Countries[i].TotalConfirmed, covidData.Countries[i].TotalDeaths, covidData.Countries[i].TotalRecovered);
//                     }
//                 }
//             }
//         } else {
//             // eslint-disable-next-line no-lonely-if
//             if (this.mood === 0) {
//                 table.paintTableTotal(covidData.Global.NewConfirmed, covidData.Global.NewDeaths, covidData.Global.NewRecovered);
//             } else {
//                 table.paintTableTotal(covidData.Global.TotalConfirmed, covidData.Global.TotalDeaths, covidData.Global.TotalRecovered);
//             }
//         }
//     }

//     // eslint-disable-next-line class-methods-use-this
//     changeShow100orTotal() {

//     }
// }

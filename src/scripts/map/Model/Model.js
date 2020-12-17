/* eslint-disable import/prefer-default-export */
import { ViewMap, Controller } from '../constants/index';

export const ModelClass = class {
    constructor() {
        this.apiName = 'TotalConfirmed';
    }

    changeColorCircle() {
        this.select = Controller.changeSelect();
        switch (this.select) {
        case 'total_death':
            this.apiName = 'TotalDeaths';
            ViewMap.addCircle(this.apiName, 'yellow', 1);
            break;
        case 'total_case':
            this.apiName = 'TotalConfirmed';
            ViewMap.addCircle(this.apiName, 'red', 40);
            break;
        case 'total_recovery':
            this.apiName = 'TotalRecovered';
            ViewMap.addCircle(this.apiName, 'lightblue', 25);
            break;
        case 'new_case':
            this.apiName = 'NewConfirmed';
            ViewMap.addCircle(this.apiName, 'red', 0.4);
            break;
        case 'new_death':
            this.apiName = 'NewDeaths';
            ViewMap.addCircle(this.apiName, 'yellow', 0.005);
            break;
        case 'new_recovery':
            this.apiName = 'NewRecovered';
            ViewMap.addCircle(this.apiName, 'lightblue', 0.3);
            break;
        default:
            break;
        }
        return this.apiName;
    }
};

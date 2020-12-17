/* eslint-disable import/prefer-default-export */
import { ControllerClass } from '../Controller/index';
import { ViewGraphicClass } from '../View/index';
import { allDayCases, allDaydDeaths, allDayRecovered } from '../../state';

const Controller = new ControllerClass();
const ViewGraphic = new ViewGraphicClass();

export const ModelClass = class {
    constructor() {
        this.apiName = 'Total Cases';
    }

    changeColorCircle() {
        this.select = Controller.changeSelect();
        switch (this.select) {
        case 'total_case':
            this.apiName = 'Total Cases';
            ViewGraphic.init(this.apiName, allDayCases, 'red');
            break;
        case 'total_death':
            this.apiName = 'Total Death';
            ViewGraphic.init('Total Death', allDaydDeaths, 'yellow');
            break;
        case 'total_recovery':
            this.apiName = 'Total Recodeved';
            ViewGraphic.init(this.apiName, allDayRecovered, 'lightblue');
            break;
        // case 'new_case':
        //     this.apiName = 'NewConfirmed';
        //     ViewGraphic.init(this.apiName, 'red', 0.4);
        //     break;
        // case 'new_death':
        //     this.apiName = 'NewDeaths';
        //     ViewGraphic.init(this.apiName, 'yellow', 0.005);
        //     break;
        // case 'new_recovery':
        //     this.apiName = 'NewRecovered';
        //     ViewGraphic.init(this.apiName, 'lightblue', 0.3);
        //     break;
        default:
            break;
        }
        return this.apiName;
    }
};
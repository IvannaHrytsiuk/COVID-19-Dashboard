/* eslint-disable import/prefer-default-export */
import { ControllerGraphicClass } from '../Controller/index';
import { ViewGraphicClass } from '../View/index';
import {
    allDayCases, allDaydDeaths, allDayRecovered, newDay,
} from '../../state';
import { State } from '../../../index';

const Controller = new ControllerGraphicClass();
const ViewGraphic = new ViewGraphicClass();

export const ModelClass = class {
    constructor() {
        this.apiName = 'Total confirmed';
    }

    changeColorCircle() {
        this.select = Controller.changeSelect();
        switch (this.select) {
        case 'Total confirmed':
            this.apiName = 'Total confirmed';
            ViewGraphic.init(this.apiName, allDayCases, 'red');
            break;
        case 'Total death':
            this.apiName = 'Total death';
            ViewGraphic.init('Total death', allDaydDeaths, 'yellow');
            break;
        case 'Total recovered':
            this.apiName = 'Total recodeved';
            ViewGraphic.init(this.apiName, allDayRecovered, 'lightblue');
            break;
        case 'New confirmed':
            this.apiName = 'New confirmed';
            ViewGraphic.init(this.apiName, State.getNewEveryDayData([], allDayCases), 'red');
            break;
        case 'New death':
            this.apiName = 'New death';
            ViewGraphic.init(this.apiName, State.getNewEveryDayData([], allDaydDeaths), 'yellow');
            break;
        case 'New recovered':
            this.apiName = 'New recovered';
            ViewGraphic.init(this.apiName, State.getNewEveryDayData([], allDayRecovered), 'lightblue');
            break;
        case 'Total confirmed 100K':
            this.apiName = 'Total confirmed 100K';
            ViewGraphic.init('Total confirmed 100K', allDayCases, 'red');
            break;
        case 'Total death 100K':
            this.apiName = 'Total death 100K';
            ViewGraphic.init('Total Death  100K', allDaydDeaths, 'yellow');
            break;
        case 'Total recovered 100K':
            this.apiName = 'Total recodeved 100K';
            ViewGraphic.init(this.apiName, allDayRecovered, 'lightblue');
            break;
        case 'New confirmed 100K':
            this.apiName = 'New confirmed 100K';
            ViewGraphic.init(this.apiName, State.getNewEveryDayData([], allDayCases), 'red');
            break;
        case 'New death 100K':
            this.apiName = 'New death 100K';
            ViewGraphic.init(this.apiName, State.getNewEveryDayData([], allDaydDeaths), 'yellow');
            break;
        case 'New recovered 100K':
            this.apiName = 'New recovered 100K';
            ViewGraphic.init(this.apiName, State.getNewEveryDayData([], allDayRecovered), 'lightblue');
            break;
        default:
            break;
        }
        return this.apiName;
    }
};

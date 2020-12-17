/* eslint-disable import/prefer-default-export */
import { geojson } from '../../../index';
import { info } from '../constants/index';

export const ControllerClass = class {
    constructor() {
        this.chooseValue;
    }

    static resetHighlight(e) {
        geojson.resetStyle(e.target);
        info.update();
    }

    changeSelect() {
        this.index = document.querySelector('#chooseOptions').options.selectedIndex;
        this.chooseValue = document.querySelector('#chooseOptions').options[this.index].value;
        return this.chooseValue;
    }
};

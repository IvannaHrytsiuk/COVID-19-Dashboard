/* eslint-disable import/prefer-default-export */
export const ControllerClass = class {
    constructor() {
        this.chooseValue;
    }

    changeSelect() {
        this.index = document.querySelector('#chooseOptionsGraphic').options.selectedIndex;
        this.chooseValue = document.querySelector('#chooseOptionsGraphic').options[this.index].value;
        return this.chooseValue;
    }
};

/* eslint-disable import/prefer-default-export */
import { geojson } from '../index';
import { info } from '../constants/constants';

export const ControllerClass = class {
  static resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
  }
};

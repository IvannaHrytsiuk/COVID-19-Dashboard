/* eslint-disable import/prefer-default-export */
import 'leaflet/dist/leaflet';
import 'leaflet/dist/leaflet.css';
import {
  map, grayscale, info, legend,
} from '../constants/constants';
import {
  dataAll, geojson, countryUrl, cases,
} from '../index';

export const ViewMapClass = class {
  init() {
    grayscale.addTo(map);
    info.addTo(map);
    legend.addTo(map);
  }

  addCircle() {
    for (this.i = 0; this.i < countryUrl.length; this.i += 1) {
      const circleOptions = {
        color: 'red',
        fillColor: 'red',
        fillOpacity: 1,
      };
      const circle = L.circle(countryUrl[this.i].reverse(), (Math.trunc(
        cases[this.i] / 40,
      )), circleOptions);
      circle.addTo(map);
    }
  }

  addInfo() {
    this.div = L.DomUtil.create('div', 'info');
    this.update();
    return this.div;
  }

  updateInfo(props) {
    this.div.innerHTML = `<h4>Statistic</h4>${props
      ? `<b class="name_country">${props.name}</b><br />${typeof (dataAll[props.id]) === 'number' ? dataAll[props.id] : 'No data'} cases`
      : 'Hover over a country'}`;
  }

  static style() {
    return {
      weight: 1,
      opacity: 1,
      color: '#666',
      dashArray: '',
      //  fillOpacity: 0.7,
      fillColor: '#555',
    };
  }

  highlightFeature(e) {
    this.layer = e.target;
    this.layer.setStyle({
      weight: 2,
      color: 'white',
      dashArray: '3',
    });
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      this.layer.bringToFront();
    }
    info.update(this.layer.feature.properties);
    // console.log(this.layer.feature.properties.name);
  }

  addLegend() {
    this.div = L.DomUtil.create('div', 'info legend');
    this.grades = [0, 10, 20, 50, 100, 200, 500, 1000];
    this.labels = [];
    for (let i = 0; i < this.grades.length; i += 1) {
      this.from = this.grades[i];
      this.to = this.grades[i + 1];
      this.labels.push(
        `<i style="background:${this.from + 1}"></i> ${this.from}${this.to ? `&ndash;${this.to}` : '+'}`,
      );
    }
    this.div.innerHTML = this.labels.join('<br>');
    return this.div;
  }
};

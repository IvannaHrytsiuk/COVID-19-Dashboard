import 'leaflet/dist/leaflet';
import 'leaflet/dist/leaflet.css';

const mapboxAccessToken = `pk.eyJ1IjoibXlmZW5peDkyIiwiYSI6ImNrYXBpdXhwMTF5NTYzMXA2emY0M3pnd24ifQ.I73eBezMUvPr3OAN-aF1Cg`;
const map = L.map('map', {
  center: [52.4345, 30.9754],
  zoom: 3,
  layers: grayscale,
});
const grayscale = L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`, {
  id: 'mapbox/dark-v9',
  tileSize: 512,
  zoomOffset: -1,
});
const info = L.control();
const legend = L.control({ position: 'bottomright' });

export { map, grayscale, info, legend };

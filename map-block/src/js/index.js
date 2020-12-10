import '../styles/style.css';
import regeneratorRuntime from "regenerator-runtime";

async function sendCountry() {
  const countryUrl = [];
  let circle;
  let popup;
  let item = 0;

  try {
    const url = `https://api.covid19api.com/summary`;
    const res = await fetch(url);
    const data = await res.json();
    const countryName = data.Countries.map((e) => e.Country);
    const cases = data.Countries.map((e) => e.TotalConfirmed);

    for (let i = 0; i < countryName.length; i += 1) {
      const urlMapCenter = `https://api.mapbox.com/geocoding/v5/mapbox.places/${countryName[i]}.json?types=country&access_token=pk.eyJ1IjoibXlmZW5peDkyIiwiYSI6ImNrYXBpdXhwMTF5NTYzMXA2emY0M3pnd24ifQ.I73eBezMUvPr3OAN-aF1Cg`;
      const resMapCenter = await fetch(urlMapCenter);
      const dataMapCenter = await resMapCenter.json();
      countryUrl.push(dataMapCenter.features[0].center);
    }

    for (let i = 0; i < countryUrl.length; i += 1) {
      const circleOptions = {
        color: 'red',
        fillColor: 'red',
        fillOpacity: 1,
      };
      popup = L.popup()
        .setLatLng(countryUrl[i].reverse())
        .setContent(`Cases: ${cases[i]}`);
      circle = L.circle(countryUrl[i], (Math.trunc(cases[i] / 40)), circleOptions);
      circle.addTo(map);
      popup.addTo(map);
    }

    document.querySelectorAll('.leaflet-popup-pane > div').forEach((e) => {
      e.style.display = 'none';
      // e.classList.add(`${countryName[item]}`);
      item += 1;
    });
  } catch (error) {
    console.log('Rate Limit Exceeded.');
  }
}

sendCountry();
const mapboxAccessToken = `pk.eyJ1IjoibXlmZW5peDkyIiwiYSI6ImNrYXBpdXhwMTF5NTYzMXA2emY0M3pnd24ifQ.I73eBezMUvPr3OAN-aF1Cg`;

const grayscale = L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`, {
  id: 'mapbox/dark-v9',
  tileSize: 512,
  zoomOffset: -1,
});

const map = L.map('map', {
  center: [52.4345, 30.9754],
  zoom: 3,
  layers: grayscale,
});
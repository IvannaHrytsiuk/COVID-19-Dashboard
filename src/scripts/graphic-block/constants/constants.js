import 'chart.js/dist/Chart';
import 'chart.js/dist/Chart.css';

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback: (value) => `${value / 10e6}M`,
                },
            }],
        },
    },
});

export { ctx, myChart };

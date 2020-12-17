/* eslint-disable import/prefer-default-export */
import 'chart.js/dist/Chart';
import 'chart.js/dist/Chart.css';

export const ViewGraphicClass = class {
    constructor() {
        this.ctx = document.getElementById('myChart').getContext('2d');
        this.myChart = new Chart(this.ctx, {
            type: 'bar',
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                        },
                    }],
                },
            },
        });
    }

    init(label, data, color) {
        this.graphicData = {
            labels: Object.keys(data),
            datasets: [{
                label,
                data: Object.values(data),
                backgroundColor: color,
                borderWidth: 1,
            }],
        };
        this.myChart.data = this.graphicData;
        this.myChart.update();
    }
};

function Dynamics(data) {
    this._data = data;
    this._dynamicSell = $("#dynamic-sell");
    this._dynamicRent = $("#dynamic-rent");
}

Dynamics.prototype._applyCharts = function () {
    var months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    var options = {
        responsive: true,
        hover: {
            mode: 'index',
            intersect: true
        },
        tooltips: {
            mode: 'index',
            intersect: true,
            backgroundColor: '#FFF',
            titleFontFamily: "'Roboto Slab', 'Helvetica Neue', sans-serif",
            titleFontColor: '#212529',
            titleFontSize: 16,
            titleSpacing: 5,
            titleMarginBottom: 10,
            bodyFontFamily: "'Roboto Slab', 'Helvetica Neue', sans-serif",
            bodyFontColor: '#212529',
            bodyFontSize: 16,
            bodySpacing: 10,
            xPadding: 10,
            yPadding: 20,
            borderColor: 'rgba(0, 0, 0, 0.2)',
            borderWidth: 1,
            caretSize: 6,
            displayColors: false,
            callbacks: {
                title: function (tooltipItem, data) {
                    var title = data['datasets'][0]['data'][tooltipItem[0]['index']]['y'] + ' РУБ';
                    return title;
                },
                label: function (tooltipItem, data) {

                    var timestamp = data['datasets'][0]['data'][tooltipItem['index']]['x'];
                    var date = new Date(timestamp * 1000);
                    var time = months[date.getMonth()] + ', ' + date.getFullYear();

                    return time;

                }
            },
        },
        legend: {
            display: false
        },
        elements: {
            point: {
                pointStyle: 'circle',
                radius: 6,
                borderWidth: 0,
                backgroundColor: '#FFFFFF'
            },
            line: {
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                borderColor: '#FFFFFF',
                borderWidth: 2,
                tension: 0,
            }
        },
        scales: {
            yAxes: [{
                display: false,
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    beginAtZero: true,
                }
            }],
            xAxes: [{
                position: 'top',
                gridLines: {
                    display: false,
                    drawBorder: false,
                },
                ticks: {
                    beginAtZero: true,
                    mirror: true,
                    fontFamily: "'Roboto Slab', 'Helvetica Neue', sans-serif",
                    fontSize: 12,
                    fontColor: '#FFFFFF',
                    lineHeight: '1.67',
                }
            }]
        }
    };
    var chartSell = new Chart(this._dynamicSell, {
        type: 'line',
        data: {
            labels: this._data.months,
            datasets: [{
                data: this._data.dynamic_sell,
            }]
        },
        options: options
    });
    var chartRent = new Chart(this._dynamicRent, {
        type: 'line',
        data: {
            labels: this._data.months,
            datasets: [{
                data: this._data.dynamic_rent,
            }]
        },
        options: options
    });
};
Dynamics.prototype.apply = function () {
    this._applyCharts();
};
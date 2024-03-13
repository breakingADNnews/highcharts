Highcharts.chart('container', {
    title: {
        text: 'Global temperature mean anomalies from 1880 to 2016'
    },
    accessibility: {
        description: `
            A chart of monthly mean temperature anomalies from 1880 to 2016.
            It employs two series, one column and one line,
            to convey the same data at different resolutions.
            There is only one column per thirty years,
            but the line series have a datapoint per year.
        `
    },
    series: [{
        type: 'column',
        pointWidth: 30,
        name: 'Column Series',
        data: JSON.parse(document.getElementById('columnData').textContent)
    }, {
        name: 'Line Series',
        data: JSON.parse(document.getElementById('lineData').textContent),
        description: `
            A data series illustrating the same data as the first,
            but at different time intervals
        `
    }],
    tooltip: {
        valueSuffix: '°C'
    },
    yAxis: {
        description: 'temperature',
        max: 1,
        min: -0.5,
        name: 'Temperature anomalies',
        title: {
            enabled: false
        }
    },
    xAxis: {
        description: 'time',
        endOnTick: true,
        min: Date.UTC(1880, 0, 0),
        type: 'datetime'
    }
});
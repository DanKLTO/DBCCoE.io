/*ckeditor*/
CKEDITOR.replace('editor1');

/* ChartJS Global Options

Chart.defaults.global.plugins.datalabels.align = 'center';
Chart.defaults.global.plugins.datalabels.anchor = 'center';*/
Chart.defaults.global.plugins.datalabels.display = true;



// DBC Portfolio Delivery Schedule

//VERSION1

var myChart = document.getElementById('myChart').getContext('2d');

var sampleChart = new Chart(myChart,
{
    type:"horizontalBar",
    data:{
        labels:["January","February","March","April","May","June","July"],
        datasets:[{
            label:"My First Dataset",
            data:[65,59,80,81,56,55,40],
            fill:false,
            backgroundColor:[
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(201, 203, 207, 0.2)"],
            borderColor:[
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)",
                "rgb(201, 203, 207)"],
            borderWidth:1}]},
    options:{
        scales:{
            xAxes:[{
                ticks:{
                    beginAtZero:true
                       }
                   }]
                },
             }
});

/*VERSION 2
var myChart = document.getElementById('myChart').getContext('2d');
var myPortfolioChart = new Chart(myChart,
{
    type: 'horizontalBar',
    data: {
        labels: ["MY Project1", "MY Project2", "SG Project1", "SG Project 2", "TH Project1", "TH Project 2"],

        datasets: [{
            data: [0, 3, 2, 4, 5, 6],
            backgroundColor: "rgba(255, 99, 132, 0)",
            datalabels: display = false,
        },{
            data: [2, 3, 4, 2, 3, 4],
            backgroundColor: "rgba(255, 159, 64, 0.2)",
            borderColor: "rgba(255, 159, 64, 1)"
        },{
            data: [7, 8, 9, 8, 6, 5],
            backgroundColor: "rgba(255, 205, 86, 0.4)",
            borderColor: "rgba(255, 205, 86, 1)"
        },{
            data: [7, 8, 9, 8, 6, 5],
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)"
        },{
            data: [7, 8, 9, 8, 6, 5],
            backgroundColor: "rgba(153, 102, 255, 0.7)",
            borderColor:"rgba(153, 102, 255, 1)"
        },{
            data: [7, 8, 9, 8, 6, 5],
            backgroundColor: "rgba(201, 203, 207, 0.9)",
            borderColor: "rgba(201, 203, 207, 1)"
        }]
    },
    options: {
                tooltips: {
                    enabled: false
                },
                hover :{
                    animationDuration:0
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero:true,
                            fontFamily: "'Open Sans Bold', sans-serif",
                            fontSize:11
                        },
                        scaleLabel:{
                            display:false
                        },
                        gridLines: {
                        },
                        stacked: true
                    }],
                    yAxes: [{
                        barPercentage: 0.8,
                        categoryPercentage: 1,
                        gridLines: {
                            display:false,
                            color: "#fff",
                            zeroLineColor: "#fff",
                            zeroLineWidth: 0
                        },
                        ticks: {
                            fontFamily: "'Open Sans Bold', sans-serif",
                            fontSize:11
                        },
                        stacked: true
                    }]
                },
                legend:{
                    display:false
                },

                animation: {
                    onComplete: function () {
                        var chartInstance = this.chart;
                        var ctx = chartInstance.ctx;
                        ctx.textAlign = "left";
                        ctx.font = "10px Lato";
                        ctx.fillStyle = "#fff";

                        Chart.helpers.each(this.data.datasets.forEach(function (dataset, i) {
                            var meta = chartInstance.controller.getDatasetMeta(i);
                            Chart.helpers.each(meta.data.forEach(function (bar, index) {
                                data = dataset.data[index];
                                if(i==0){
                                    //ctx.fillText(data, 50, bar._model.y+4);
                                } else {
                                    ctx.fillText(data, bar._model.x-25, bar._model.y+4);
                                }
                            }),this)
                        }),this);
                    }
                },
                pointLabelFontFamily : "Quadon Extra Bold",
                scaleFontFamily : "Quadon Extra Bold",
            }
});*/
/*version 3

//version 3 colors

window.chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(231,233,237)'
};

//Function
Chart.defaults.timeline = Chart.defaults.horizontalBar;
Chart.controllers.timeline = Chart.controllers.horizontalBar.extend({
  initialize: function() {
    return Chart.controllers.bar.prototype.initialize.apply(this, arguments);
  }
});

Chart.pluginService.register({
  beforeInit: function(chart) {
    if (chart.config.type === 'timeline') {
    	var config = chart.config;

      var data = config.data.datasets[0].data;

      var min = new Date(data[0][0].getFullYear(), data[0][0].getMonth(), data[0][0].getDate());
      var max = new Date(data[0][0].getFullYear(), data[0][0].getMonth(), data[0][0].getDate() + 1);

      function toDate(date) {
        var date = new Date(date);
        var hour = date.getHours();
        var tt = ' AM';
        if (hour === 0)
        	hour = 12;
        else if (hour === 12)
        	tt = ' PM';
        else if (hour > 12)
        	hour = hour - 12, tt = ' PM';
      	return hour + ':' + ('0' + date.getMinutes()).replace(/.*(.{2})$/, '$1') + tt;
      }

      config.options.scales.xAxes[0].ticks.callback = toDate;
      config.options.scales.xAxes[0].ticks.min = min;
      config.options.scales.xAxes[0].ticks.max = max;
      config.options.scales.xAxes[0].ticks.fixedStepSize = 1000 * 60 * 60;
      config.options.scales.xAxes[0].ticks.minRotation = 90

      // create a dummy dataset with background color transparent ending at the start time
      config.data.datasets.unshift({
        backgroundColor: 'rgba(0, 0, 0, 0)',
        data: data.map(function(e) {
          return e[0];
        })
      });

      config.data.datasets[1].data = data.map(function(e) {
        return e[1] - e[0];
      });
    }
  }
});

//version 3 chart
var config = {
  type: 'timeline',
  data: {
    labels: ["Joe", "Jane", "Eve", "Adam", "Alice", "Bob"],
    datasets: [{
      backgroundColor: [
        window.chartColors.blue,
        window.chartColors.red,
        window.chartColors.green,
        window.chartColors.yellow,
        window.chartColors.orange,
        window.chartColors.purple
      ],
      data: [
        [new Date(2016, 0, 1, 0, 0), new Date(2016, 0, 1, 8, 30)],
        [new Date(2016, 0, 1, 4, 0), new Date(2016, 0, 1, 10, 30)],
        [new Date(2016, 0, 1, 14, 0), new Date(2016, 0, 1, 16, 30)],
        [new Date(2016, 0, 1, 8, 0), new Date(2016, 0, 1, 23, 45)],
        [new Date(2016, 0, 1, 14, 0), new Date(2016, 0, 1, 14, 30)],
        [new Date(2016, 0, 1, 16, 0), new Date(2016, 0, 1, 18, 30)],
      ]
    }]
  },
  options: {
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        stacked: true,
        categoryPercentage: 0.5,
        barPercentage: 1
      }]
    }
  }
};

var ctx = document.getElementById("myChart").getContext("2d");
new Chart(ctx, config);
*/

/*Version 4 Chart

var myChart = document.getElementById('myChart').getContext('2d');
var myPortfolioChart = new Chart(myChart,
{
    type: 'horizontalBar',
    data: {
        labels: ["MY Project1", "MY Project2", "SG Project1", "SG Project 2", "TH Project1", "TH Project 2"],

        datasets: [{
            data: [[], [], [], [], [], [new Date(2017, 7, 24, 0), new Date(2017, 7, 31, 0)]],
            backgroundColor: "rgba(255, 99, 132, 0)",
            datalabels: display = true,
        },{
            data: [[], [], [], [], [], [new Date(2017, 7, 24, 0), new Date(2017, 7, 31, 0)]],
            backgroundColor: "rgba(255, 159, 64, 0.2)",
            borderColor: "rgba(255, 159, 64, 1)"
        },{
            data: [[], [], [], [], [], [new Date(2017, 7, 24, 0), new Date(2017, 7, 31, 0)]],
            backgroundColor: "rgba(255, 205, 86, 0.4)",
            borderColor: "rgba(255, 205, 86, 1)"
        },{
            data: [[], [], [], [], [], [new Date(2017, 7, 24, 0), new Date(2017, 7, 31, 0)]],
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)"
        },{
            data: [[], [], [], [], [], [new Date(2017, 7, 24, 0), new Date(2017, 7, 31, 0)]],
            backgroundColor: "rgba(153, 102, 255, 0.7)",
            borderColor:"rgba(153, 102, 255, 1)"
        },{
            data: [[new Date(2017, 7, 25, 0), new Date(2017, 7, 27, 0)], [], [], [], [], [new Date(2017, 7, 24, 0), new Date(2017, 7, 31, 0)]],
            backgroundColor: "rgba(201, 203, 207, 0.9)",
            borderColor: "rgba(201, 203, 207, 1)"
        }]
    },
    options: {
                tooltips: {
                    enabled: false
                },
                hover :{
                    animationDuration:0
                },
                scales: {
                        xAxes: [{
                                type: 'time',
                                time: {
                                  unit: 'day',
                                  min: new Date(2017, 7, 24, 0),
                                  max: new Date(2017, 7, 31)
                                },
                        ticks: {
                            beginAtZero:true,
                            fontFamily: "'Open Sans Bold', sans-serif",
                            fontSize:11
                        },
                        scaleLabel:{
                            display:false
                        },
                        gridLines: {
                        },
                        stacked: true
                    }],
                    yAxes: [{
                        barPercentage: 0.8,
                        categoryPercentage: 1,
                        gridLines: {
                            display:false,
                            color: "#fff",
                            zeroLineColor: "#fff",
                            zeroLineWidth: 0
                        },
                        ticks: {
                            fontFamily: "'Open Sans Bold', sans-serif",
                            fontSize:11
                        },
                        stacked: true
                    }]
                },
                legend:{
                    display:false,
                    position: 'bottom'
                },

                //animation: {
                    onComplete: function () {
                        var chartInstance = this.chart;
                        var ctx = chartInstance.ctx;
                        ctx.textAlign = "left";
                        ctx.font = "10px Lato";
                        ctx.fillStyle = "#fff";

                        Chart.helpers.each(this.data.datasets.forEach(function (dataset, i) {
                            var meta = chartInstance.controller.getDatasetMeta(i);
                            Chart.helpers.each(meta.data.forEach(function (bar, index) {
                                data = dataset.data[index];
                                if(i==0){
                                    //ctx.fillText(data, 50, bar._model.y+4);
                                } else {
                                    ctx.fillText(data, bar._model.x-25, bar._model.y+4);
                                }
                            }),this)
                        }),this);
                    }
                },//
                pointLabelFontFamily : "Quadon Extra Bold",
                scaleFontFamily : "Quadon Extra Bold",
            }
});*/

//VERSION 5
/*
var myChart = document.getElementById('myChart').getContext('2d');
var myPortfolioChart = new Chart(myChart,
{
    type: 'bar',
    data: {
        labels: ["MY Project1", "MY Project2", "SG Project1", "SG Project 2", "TH Project1", "TH Project 2"],

        datasets: [{
            data: [{x:20, y:'2017-7-24'}, {x:10, y:'2017-7-25'}],
            backgroundColor: "rgba(255, 99, 132, 0)",
        },{
            data: [{x:20, y:'2017-7-24'}, {x:10, y:'2017-7-25'}],
            backgroundColor: "rgba(255, 159, 64, 0.2)",
            borderColor: "rgba(255, 159, 64, 1)"
        }]
    },
    options: {
                tooltips: {
                    enabled: false
                },
                hover :{
                    animationDuration:0
                },
                scales: {
                        xAxes: [{
                                type: 'time',
                                time: {
                                  unit: 'day',
                                  min: new Date(2017, 7, 24, 0),
                                  max: new Date(2017, 7, 31, 0)
                                },
                        ticks: {
                            beginAtZero:true,
                            fontFamily: "'Open Sans Bold', sans-serif",
                            fontSize:11
                        },
                        scaleLabel:{
                            display:false
                        },
                        gridLines: {
                        },
                        stacked: false
                    }],
                    yAxes: [{
                        barPercentage: 0.8,
                        categoryPercentage: 1,
                        gridLines: {
                            display:false,
                            color: "#fff",
                            zeroLineColor: "#fff",
                            zeroLineWidth: 0
                        },
                        ticks: {
                            fontFamily: "'Open Sans Bold', sans-serif",
                            fontSize:11
                        },
                        stacked: false
                    }]
                },
                legend:{
                    display:false,
                    position: 'bottom'
                },

                //animation: {
                    onComplete: function () {
                        var chartInstance = this.chart;
                        var ctx = chartInstance.ctx;
                        ctx.textAlign = "left";
                        ctx.font = "10px Lato";
                        ctx.fillStyle = "#fff";

                        Chart.helpers.each(this.data.datasets.forEach(function (dataset, i) {
                            var meta = chartInstance.controller.getDatasetMeta(i);
                            Chart.helpers.each(meta.data.forEach(function (bar, index) {
                                data = dataset.data[index];
                                if(i==0){
                                    //ctx.fillText(data, 50, bar._model.y+4);
                                } else {
                                    ctx.fillText(data, bar._model.x-25, bar._model.y+4);
                                }
                            }),this)
                        }),this);
                    }
                },//
                pointLabelFontFamily : "Quadon Extra Bold",
                scaleFontFamily : "Quadon Extra Bold",
            }
});
*/


//------------------------------------------------------------------------------------------------------
// DBC Portfolio Health Status
    //1. Portfolio Schedule Status

    //1.a Barchart data
     /*   var barChartData = {
            labels: ["High", "Medium", "Low"],
            datasets: [{
                        label: 'Malaysia',
                        backgroundColor: [rgba(255, 7, 7, 0.34),rgba(255, 7, 7, 0.34),rgba(255, 7, 7, 0.34)]
                        data: [ '1','1', '1 ]
                        }, {
                        label: 'Singapore',
                        backgroundColor: [rgba(255, 7, 7, 0.49),rgba(255, 7, 7, 0.49),rgba(255, 7, 7, 0.49)]
                        data: [
                            2,
                            3,
                            1
                        ]
                        }, {
                            label: 'Thailand',
                            backgroundColor: [rgba(255, 7, 7, 0.65),rgba(255, 7, 7, 0.65),rgba(255, 7, 7, 0.65)]
                            data: [
                            4,
                            2,
                            3,
                            ]
                        }]

                            };*/

//VERSION 6 GOOGLE Charts
google.charts.load('current', {'packages':['timeline']});
google.charts.setOnLoadCallback(drawChart);
      function drawChart() {

    var container = document.getElementById('myGoogleChart');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({ type: 'string', id: 'Project' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows([
                            [ 'Test1', new Date (2018, 01, 01), new Date (2018, 04, 30) ],
                            [ 'Test2', new Date (2018, 03, 01), new Date (2018, 08, 31) ],
                            [ 'Test3', new Date (2017, 12, 01), new Date (2018, 08, 31) ],
                            [ 'Test4', new Date (2018, 02, 01), new Date (2018, 05, 31) ],
                            [ 'Test5', new Date (2018, 02, 01), new Date (2018, 06, 30) ],
                            [ 'Test6', new Date (2017, 12, 01), new Date (2018, 03, 31) ],
                            [ 'Test7', new Date (2017, 12, 01), new Date (2018, 02, 28) ],
                            [ 'Test8', new Date (2018, 02, 01), new Date (2018, 09, 30) ],
                            [ 'Test9', new Date (2018, 06, 01), new Date (2018, 11, 30) ],
                            [ 'Test10', new Date (2018, 03, 01), new Date (2018, 11, 30) ],
                            [ 'Test11', new Date (2018, 09, 01), new Date (2018, 11, 30) ],
                            [ 'Test12', new Date (2018, 05, 01), new Date (2018, 10, 31) ],
                            [ 'Test13', new Date (2018, 06, 01), new Date (2018, 11, 30) ],
                            [ 'Test14 ', new Date (2018, 06, 01), new Date (2018, 11, 30) ],
                            [ 'Test15', new Date (2018, 06, 01), new Date (2018, 10, 31) ],
                            [ 'Test16', new Date (2018, 06, 01), new Date (2018, 11, 30) ],
                            [ 'Test17', new Date (2018, 03, 01), new Date (2018, 11, 30) ],
                            [ 'Test18', new Date (2017, 12, 01), new Date (2018, 05, 31) ],
                            [ 'Test19', new Date (2018, 03, 01), new Date (2018, 11, 30) ]
                        ]);

    var options = {
      colors: ['#EE768C','#EE768C', '#892034', '#EE768C','#EE768C','#892034','#892034','#EE768C','#EE768C','#EE768C','#EE768C','#EE768C','#EE768C','#EE768C','#EE768C','#EE768C','#EE768C','#892034','#EE768C' ],
      timeline: {
          rowLabelStyle: { fontSize: 11 },
          barLabelStyle: { fontSize: 6 }
      }
    };

    chart.draw(dataTable, options);
  }

    //1.a Resourece Capacity Utilization and Forecast

var utilizationChart = document.getElementById('utilizationchart').getContext('2d');
var myUtilizationChart = new Chart(utilizationChart, {
      type: 'bar',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
            label: 'PM',
            data: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
            stack: '0',
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)'
            ],
            borderWidth: 0.5
          },
          {
            label: 'SA',
            data: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
            stack: '0',
            backgroundColor: [
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0.5
          },
          {
            label: 'Dev',
            data: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80],
            stack: '0',
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 0.5
          },
          {
            label: 'PM',
            data: [40, 40, 40, 40, 20, 20, 20, 20, 20, 20, 20, 20],
            stack: '1',
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)'
            ],
            borderWidth: 0.5
          },
          {
            label: 'SA',
            data: [60, 60, 40, 40, 20, 20, 20, 20, 20, 20, 20, 20],
            stack: '1',
            backgroundColor: [
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0.5
          },
          {
            label: 'Dev',
            data: [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
            stack: '1',
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 0.5
          },{
            label: 'PM',
            data: [25, 27, 48, 70, 72, 67, 60, 49, 49, 51, 48, 43],
            stack: '2',
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)'
            ],
            borderWidth: 0.5
          },
          {
            label: 'SA',
            data: [56, 73, 114, 188, 188, 171, 145, 115, 115, 115, 115, 115],
            stack: '2',
            backgroundColor: [
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0.5
          },
          {
            label: 'Dev',
            data: [44, 44, 59, 80, 61, 66, 72, 72, 72, 72, 57, 46],
            stack: '2',
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 0.5
          }
        ]
      },
      options: {
        scales: {
                  yAxes: [{
                    stacked: true,
                    ticks: {
                      beginAtZero: true
                    }
                  }],
                  xAxes: [{
                    stacked: true,
                    ticks: {
                      beginAtZero: true
                    }
                  }]

                },
        layout:{
                padding:{
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                    }
                },
        legend: {
                display: true,
                position: 'bottom',
                label:{
                    boxWidth: 1
                        }
                },
       plugins: {
                datalabels: {
                         display: true,
                         align: 'center',
                         anchor: 'center'
                            }
                }
              }
    });

    //Resourece Capacity Utilization and Forecast 1-5

var utilizationChartOne = document.getElementById('utilizationchart1').getContext('2d');
var myutilizationChartOne = new Chart(utilizationChartOne, {
      type: 'bar',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
            label: 'PM',
            data: [60, 60,60,60,60,60,60,60,60,60,60,60],
            stack: '1',
            backgroundColor: [
              'rgba(137, 32, 52, 0.2)',
              'rgba(137, 32, 52, 0.2)',
              'rgba(137, 32, 52, 0.2)',
              'rgba(137, 32, 52, 0.2)',
              'rgba(137, 32, 52, 0.2)',
              'rgba(137, 32, 52, 0.2)',
              'rgba(137, 32, 52, 0.2)',
              'rgba(137, 32, 52, 0.2)',
              'rgba(137, 32, 52, 0.2)',
              'rgba(137, 32, 52, 0.2)',
              'rgba(137, 32, 52, 0.2)',
              'rgba(137, 32, 52, 0.2)'
            ],
            borderColor: [
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)'
            ],
            borderWidth: 0.5
          },
          {
            label: 'SA',
            data: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
            stack: '1',
            backgroundColor: [
              'rgba(137, 32, 52, 0.4)',
              'rgba(137, 32, 52, 0.4)',
              'rgba(137, 32, 52, 0.4)',
              'rgba(137, 32, 52, 0.4)',
              'rgba(137, 32, 52, 0.4)',
              'rgba(137, 32, 52, 0.4)',
              'rgba(137, 32, 52, 0.4)',
              'rgba(137, 32, 52, 0.4)',
              'rgba(137, 32, 52, 0.4)',
              'rgba(137, 32, 52, 0.4)',
              'rgba(137, 32, 52, 0.4)',
              'rgba(137, 32, 52, 0.4)'
            ],
            borderColor: [
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)'
            ],
            borderWidth: 0.5
          },
          {
            label: 'Dev CURRENT CAPACITY           ',
            data: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80],
            stack: '1',
            backgroundColor: [
              'rgba(137, 32, 52, 0.5',
              'rgba(137, 32, 52, 0.5',
              'rgba(137, 32, 52, 0.5',
              'rgba(137, 32, 52, 0.5',
              'rgba(137, 32, 52, 0.5',
              'rgba(137, 32, 52, 0.5',
              'rgba(137, 32, 52, 0.5',
              'rgba(137, 32, 52, 0.5',
              'rgba(137, 32, 52, 0.5',
              'rgba(137, 32, 52, 0.5',
              'rgba(137, 32, 52, 0.5',
              'rgba(137, 32, 52, 0.5'
            ],
            borderColor: [
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)',
              'rgba(137, 32, 52, 1)'
            ],
            borderWidth: 0.5
          },/*
          {
            label: 'PM',
            data: [40, 40, 40, 40, 20, 20, 20, 20, 20, 20, 20, 20],
            stack: '1',
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)'
            ],
            borderWidth: 0.5
          },
          {
            label: 'SA',
            data: [60, 60, 40, 40, 20, 20, 20, 20, 20, 20, 20, 20],
            stack: '1',
            backgroundColor: [
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0.5
          },
          {
            label: 'Dev',
            data: [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
            stack: '1',
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 0.5
          },*/
          {
            label: 'PM',
            data: [34, 36, 44, 57, 59, 54, 55, 44, 44, 42, 39, 34],
            stack: '0',
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)'
            ],
            borderWidth: 0.5
          },
          {
            label: 'SA',
            data: [86, 103, 86, 106, 106, 89, 115, 100, 100, 85, 85, 85],
            stack: '0',
            backgroundColor: [
              'rgba(255, 99, 132, 0.4)',
              'rgba(255, 99, 132, 0.4)',
              'rgba(255, 99, 132, 0.4)',
              'rgba(255, 99, 132, 0.4)',
              'rgba(255, 99, 132, 0.4)',
              'rgba(255, 99, 132, 0.4)',
              'rgba(255, 99, 132, 0.4)',
              'rgba(255, 99, 132, 0.4)',
              'rgba(255, 99, 132, 0.4)',
              'rgba(255, 99, 132, 0.4)',
              'rgba(255, 99, 132, 0.4)',
              'rgba(255, 99, 132, 0.4)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)'
            ],
            borderWidth: 0.5
          },
          {
            label: 'Dev  2018 FORECAST',
            data: [44, 44, 59, 80, 61, 66, 72, 72, 72, 72, 57, 46],
            stack: '0',
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(255, 99, 132, 0.5)',
              'rgba(255, 99, 132, 0.5)',
              'rgba(255, 99, 132, 0.5)',
              'rgba(255, 99, 132, 0.5)',
              'rgba(255, 99, 132, 0.5)',
              'rgba(255, 99, 132, 0.5)',
              'rgba(255, 99, 132, 0.5)',
              'rgba(255, 99, 132, 0.5)',
              'rgba(255, 99, 132, 0.5)',
              'rgba(255, 99, 132, 0.5)',
              'rgba(255, 99, 132, 0.5)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)'
            ],
            borderWidth: 0.5
          }
        ]
      },
      options: {
        scales: {
                  yAxes: [{
                    stacked: true,
                    ticks: {
                      beginAtZero: true
                    }
                  }],
                  xAxes: [{
                    stacked: true,
                    ticks: {
                      beginAtZero: true
                    }
                  }]

                },
        layout:{
                padding:{
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                    }
                },
        legend: {
                display: true,
                position: 'bottom',
                label:{
                    boxWidth: 1
                        }
                },
       plugins: {
                datalabels: {
                         display: true,
                         align: 'center',
                         anchor: 'center'
                            }
                }
              }
    });

    //1.a Schedule ChartJS

var myPortFolioSchedule = document.getElementById('portfolioschedule').getContext('2d');
var myScheduleChart = new Chart(myPortFolioSchedule, {
      type: 'bar',
      data: {
        labels: ["High", "Medium", "Low"],
        datasets: [{
            label: 'MY',
            data: [1, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)'
            ],
            borderWidth: 0.5
          },
          {
            label: 'SG',
            data: [3, 2, 3],
            backgroundColor: [
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0.5
          },
          {
            label: 'TH',
            data: [3, 2, 3],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 0.5
          },
          {
            label: 'KH',
            data: [3, 2, 3],
            backgroundColor: [
              'rgba(153, 102, 255, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 0.5
          }
        ]
      },
      options: {
        scales: {
                  yAxes: [{
                    stacked: true,
                    ticks: {
                      beginAtZero: true
                    }
                  }],
                  xAxes: [{
                    stacked: true,
                    ticks: {
                      beginAtZero: true
                    }
                  }]

                },
        layout:{
                padding:{
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                    }
                },
        legend: {
                display: true,
                position: 'bottom',
                label:{
                    boxWidth: 1
                        }
                },
       plugins: {
                datalabels: {
                         display: true,
                         align: 'center',
                         anchor: 'center'
                            }
                }
              }
    });

    //1.b Budget ChartJS

var budgetChart= document.getElementById('budgetchart').getContext('2d');
var myBudgetChart = new Chart(budgetChart, {
      type: 'bar',
      data: {
        labels: ["High", "Medium", "Low"],
        datasets: [{
            label: 'MY',
            data: [1, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)'
            ],
            borderWidth: 0.5
          },
          {
            label: 'SG',
            data: [3, 2, 3],
            backgroundColor: [
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0.5
          },
          {
            label: 'TH',
            data: [3, 2, 3],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 0.5
          },
          {
            label: 'KH',
            data: [3, 2, 3],
            backgroundColor: [
              'rgba(153, 102, 255, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 0.5
          }
        ]
      },
      options: {
        scales: {
                  yAxes: [{
                    stacked: true,
                    ticks: {
                      beginAtZero: true
                    }
                  }],
                  xAxes: [{
                    stacked: true,
                    ticks: {
                      beginAtZero: true
                    }
                  }]

                },
        layout:{
                padding:{
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                    }
                },
        legend: {
                display: true,
                position: 'bottom',
                label:{
                    boxWidth: 1
                        }
                },
       plugins: {
                datalabels: {
                         display: true,
                         align: 'center',
                         anchor: 'center'
                            }
                }
              }
    });

//1.c Issue ChartJS

var issueChart = document.getElementById('issuechart').getContext('2d');
var myIssueChart = new Chart(issueChart, {
      type: 'bar',
      data: {
        labels: ["High", "Medium", "Low"],
        datasets: [{
            label: 'MY',
            data: [1, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)'
            ],
            borderWidth: 0.5
          },
          {
            label: 'SG',
            data: [3, 2, 3],
            backgroundColor: [
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0.5
          },
          {
            label: 'TH',
            data: [3, 2, 3],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 0.5
          },
          {
            label: 'KH',
            data: [3, 2, 3],
            backgroundColor: [
              'rgba(153, 102, 255, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 0.5
          }
        ]
      },
      options: {
        scales: {
                  yAxes: [{
                    stacked: true,
                    ticks: {
                      beginAtZero: true
                    }
                  }],
                  xAxes: [{
                    stacked: true,
                    ticks: {
                      beginAtZero: true
                    }
                  }]

                },
        layout:{
                padding:{
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                    }
                },
        legend: {
                display: true,
                position: 'bottom',
                label:{
                    boxWidth: 1
                        }
                },
       plugins: {
                datalabels: {
                         display: true,
                         align: 'center',
                         anchor: 'center'
                            }
                }
              }
    });
//1.D Task ChartJS

var taskChart = document.getElementById('taskchart').getContext('2d');
var myTaskChart = new Chart(taskChart, {
      type: 'bar',
      data: {
        labels: ["High", "Medium", "Low"],
        datasets: [{
            label: 'MY',
            data: [1, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)',
              'rgba(255,99,132,1)'
            ],
            borderWidth: 0.5
          },
          {
            label: 'SG',
            data: [3, 2, 3],
            backgroundColor: [
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0.5
          },
          {
            label: 'TH',
            data: [3, 2, 3],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 0.5
          },
          {
            label: 'KH',
            data: [3, 2, 3],
            backgroundColor: [
              'rgba(153, 102, 255, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 0.5
          }
        ]
      },
      options: {
        scales: {
                  yAxes: [{
                    stacked: true,
                    ticks: {
                      beginAtZero: true
                    }
                  }],
                  xAxes: [{
                    stacked: true,
                    ticks: {
                      beginAtZero: true
                    }
                  }]

                },
        layout:{
                padding:{
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                    }
                },
        legend: {
                display: true,
                position: 'bottom',
                label:{
                    boxWidth: 1
                        }
                },
       plugins: {
                datalabels: {
                         display: true,
                         align: 'center',
                         anchor: 'center'
                            }
                }
              }
    });


/*
var myChart = document.getElementById('myChart').getContext('2d');

 // Global Options
            Chart.defaults.global.defaultFontFamily = 'Lato';
            Chart.defaults.global.defaultFontSize = 18;
            Chart.defaults.global.defaultFontColor = '#777';


        var sampleChart = new Chart(myChart, {
            type: 'horizontalBar', //bar, horizontal bar, pie, line, doughnut, radar, polarArea
            data: {
                labels:['project1', 'project2', 'project3', 'project4', 'project5', 'project6'],
                datasets:[{
                    label: 'Budget',
                    data: [
                        123456,
                        654321,
                        987654,
                        456789,
                        548721,
                        785463
                        ],
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)'
                        ],
                    borderWidth:1,
                    borderColor:'#777',
                    hoverBorderWidth:2,
                    hoverBorderColor:'#000'

                }]
            },
            options: {
                title:{
                display:true,
                text:'Project Budgets',
                fontSize:25},
                legend:{
                  display:true,
                  position:'right',
                  labels:{
                    fontColor:'#000'
                  }
                },
                /*animation: {
                    onProgress: function(animation) {
                        progress.value = animation.currentStep / animation.numSteps;
                    },
                    onComplete: function(animation) {
                        window.setTimeout(function() {
                            progress.value = 500;
                        }, 2000);

                }},

                layout:{
                  padding:{
                    left:50,
                    right:0,
                    bottom:0,
                    top:0
                  }
                },
                tooltips:{
                  enabled:true
                }
            }

});
*/
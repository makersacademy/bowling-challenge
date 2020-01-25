// Chart.js code to format the barchart.
var frameScoreChart = document.getElementById('frameScoreChart').getContext('2d');
Chart.defaults.global.defaultFontSize= 15;
Chart.defaults.global.defaultFontColor = '#071414';
Chart.defaults.global.defaultFontFamily = "'Verdana', 'Geneva', sans-serif"

var barChart = new Chart(frameScoreChart, {
  type:'bar',
  data:{
    labels:['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10'],
    datasets:[{
      label:'Frame Score',
      data:[],
      backgroundColor: [
            '#4CAF50',
            '#4CAF50',
            '#4CAF50',
            '#4CAF50',
            '#4CAF50',
            '#4CAF50',
            '#4CAF50',
            '#4CAF50',
            '#4CAF50',
            '#4CAF50'
      ],
      borderWidth: 1,
      borderColor: '#777',
      hoverBorderWidth: 3,
      hoverBorderColor: '#071414'
    }]
  },
  options: {
    legend:{
      display: false,
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          precision:0
        }
      }]
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutElastic'
    }
  }
});

function updateChart(updatedData) {
    barChart.data.datasets[0].data = updatedData
    barChart.update();
};

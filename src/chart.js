var frameScoreChart = document.getElementById('frameScoreChart').getContext('2d');
Chart.defaults.global.defaultFontSize=20;

var barChart = new Chart(frameScoreChart, {
  type:'bar',
  data:{
    labels:['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10'],
    datasets:[{
      label:'Frame Score',
      data:[],
      backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)'
      ],
      borderWidth: 1,
      borderColor: '#777',
      hoverBorderWidth: 3,
      hoverBorderColor: '#000'
    }]
  },
  options: {
    legend:{
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          userCallback: function(label, index, labels) {
              if (Math.floor(label) === label) {
                return label;
              }

            },
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

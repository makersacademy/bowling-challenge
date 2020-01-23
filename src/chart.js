var myChart = document.getElementById('myChart').getContext('2d');
Chart.defaults.global.defaultFontSize=20;
var barChart = new Chart(myChart, {
  type:'bar',
  data:{
    labels:['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10'],
    datasets:[{
      label:'Frame Score',
      data:[4, 3, 6, 1, 2, 3, 4, 5, 6],
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
      borderWidth:1,
      borderColor:'#777',
      hoverBorderWidth:3,
      hoverBorderColor:'#000'
    }]
  },
  options: {
    legend:{
      display: false
    },
    title: {
        display: true,
        text: 'Frame Scores',
        fontSize:28
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
  }
});

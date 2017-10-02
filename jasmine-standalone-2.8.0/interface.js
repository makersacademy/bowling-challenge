$(document).ready(function(){
  var bowling = new Bowling();

  updateScore();

  $('#roll1').click(function(){
    bowling.roll1();
    updateScore();
  })

  $('#roll2').click(function(){

  })

  $('#roll3').click(function(){

  })

  $('#roll4').click(function(){

  })

  $('#roll5').click(function(){

  })

  $('#roll6').click(function(){

  })

  $('#roll7').click(function(){

  })

  $('#roll8').click(function(){

  })

  $('#roll9').click(function(){

  })

  $('#rollStrike').click(function(){

  })

  function updateScore() {
  $('#score').text(bowling.score);
  // $('#score').attr('class', thermostat.energyUsage());
  }

});

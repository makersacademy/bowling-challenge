$(document).ready(function(){
  var bowling = new Bowling();

  updateScore();

  $('#roll1').click(function(){
    bowling.roll1();
    updateScore();
  })

  $('#roll2').click(function(){
    bowling.roll2();
    updateScore();
  })

  $('#roll3').click(function(){
    bowling.roll3();
    updateScore();
  })

  $('#roll4').click(function(){
    bowling.roll4();
    updateScore();
  })

  $('#roll5').click(function(){
    bowling.roll5();
    updateScore();
  })

  $('#roll6').click(function(){
    bowling.roll6();
    updateScore();
  })

  $('#roll7').click(function(){
    bowling.roll7();
    updateScore();
  })

  $('#roll8').click(function(){
    bowling.roll8();
    updateScore();
  })

  $('#roll9').click(function(){
    bowling.roll9();
    updateScore();
  })

  $('#rollStrike').click(function(){
    bowling.rollStrike();
    updateScore();
  })

  function updateScore() {
  $('#score').text(bowling.score);
  }

});

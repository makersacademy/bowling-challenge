var bowling = new Bowling();

$(document).ready(function(){

  $('#btn0').click(function(){
    bowling.roll(0);
    $('#finalScore').text(bowling.cumulativeScore());
  });

  $('#btn1').click(function(){
    bowling.roll(1);
    $('#finalScore').text(bowling.cumulativeScore());
  });

  $('#btn2').click(function(){
    bowling.roll(2);
    $('#finalScore').text(bowling.cumulativeScore());
  });

  $('#btn3').click(function(){
    bowling.roll(3);
    $('#finalScore').text(bowling.cumulativeScore());
  });

  $('#btn4').click(function(){
    bowling.roll(4);
    $('#finalScore').text(bowling.cumulativeScore());
  });

  $('#btn5').click(function(){
    bowling.roll(5);
    $('#finalScore').text(bowling.cumulativeScore());
  });

  $('#btn6').click(function(){
    bowling.roll(6);
    $('#finalScore').text(bowling.cumulativeScore());
  });

  $('#btn7').click(function(){
    bowling.roll(7);
    $('#finalScore').text(bowling.cumulativeScore());
  });

  $('#btn8').click(function(){
    bowling.roll(8);
    $('#finalScore').text(bowling.cumulativeScore());
  });

  $('#btn9').click(function(){
    bowling.roll(9);
    $('#finalScore').text(bowling.cumulativeScore());
  });

  $('#btn10').click(function(){
    bowling.roll(10);
    $('#finalScore').text(bowling.cumulativeScore());
  });

});

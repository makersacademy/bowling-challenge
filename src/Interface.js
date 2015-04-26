var bowling = new Bowling();

$(document).ready(function(){

  var afterRoll = function(){
    for (var i = 1; i <= 10; i ++){
      $('#f' + i + 'score').text(bowling.cumulativeScore(i));
    };
    for (var i = 1; i <= 21; i ++){
      $('.box' + i).text(bowling.scoresArray[i - 1]);
    };
  };

  $('#newgame').click(function() {
    location.reload();
  });

  $('#btn0').click(function(){
    bowling.roll(0);
      afterRoll();
  });

  $('#btn1').click(function(){
    bowling.roll(1);
      afterRoll();
  });

  $('#btn2').click(function(){
    bowling.roll(2);
      afterRoll();
  });

  $('#btn3').click(function(){
    bowling.roll(3);
      afterRoll();
  });

  $('#btn4').click(function(){
    bowling.roll(4);
      afterRoll();
  });

  $('#btn5').click(function(){
    bowling.roll(5);
      afterRoll();
  });

  $('#btn6').click(function(){
    bowling.roll(6);
      afterRoll();
  });

  $('#btn7').click(function(){
    bowling.roll(7);
      afterRoll();
  });

  $('#btn8').click(function(){
    bowling.roll(8);
      afterRoll();
  });

  $('#btn9').click(function(){
    bowling.roll(9);
      afterRoll();
  });

  $('#btn10').click(function(){
    bowling.roll(10);
      afterRoll();
  });
});

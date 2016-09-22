$(document).ready(function() {
  var bowlingGame = new BowlingGame();

  var afterRoll = function() {
    for(var i = 1; i <= 10; i ++) {
      $('#f' + i + 'score').text(bowlingGame.score(i));
    }
    for(var i = 1; i <= 21; i ++) {
      $('.box' + i).text(bowlingGame.scoresArray[i - 1]);
    };
  };

  $('#newgame').click(function() {
    location.reload();
  });

  $('#btn0').click(function() {
    bowlingGame.roll(0);
    afterRoll();
  });

  $('#btn1').click(function() {
    bowlingGame.roll(1);
    afterRoll();
  });

  $('#btn2').click(function() {
    bowlingGame.roll(2);
    afterRoll();
  });

  $('#btn3').click(function() {
    bowlingGame.roll(3);
    afterRoll();
  });

  $('#btn4').click(function() {
    bowlingGame.roll(4);
    afterRoll();
  });

  $('#btn5').click(function() {
    bowlingGame.roll(5);
    afterRoll();
  });

  $('#btn6').click(function() {
    bowlingGame.roll(6);
    afterRoll();
  });

  $('#btn7').click(function() {
    bowlingGame.roll(7);
    afterRoll();
  });

  $('#btn8').click(function() {
    bowlingGame.roll(8);
    afterRoll();
  });

  $('#btn9').click(function() {
    bowlingGame.roll(9);
    afterRoll();
  });

  $('#btn10').click(function() {
    bowlingGame.roll(10);
    afterRoll();
  });
});

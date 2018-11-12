$(document).ready(function() {
  var frame = new Frame();

  $('#0').click(function() {
    frame.roll(0);
    updateScores();
    updateTotalScore();
  });

  $('#1').click(function() {
    frame.roll(1);
    updateScores();
    updateTotalScore();
  });

  $('#2').click(function() {
    frame.roll(2);
    updateScores();
    updateTotalScore();
  });

  $('#3').click(function() {
    frame.roll(3);
    updateScores();
    updateTotalScore();
  });

  $('#4').click(function() {
    frame.roll(4);
    updateScores();
    updateTotalScore();
  });

  $('#5').click(function() {
    frame.roll(5);
    updateScores();
    updateTotalScore();
  });

  $('#6').click(function() {
    frame.roll(6);
    updateScores();
    updateTotalScore();
  });

  $('#7').click(function() {
    frame.roll(7);
    updateScores();
    updateTotalScore();
  });

  $('#8').click(function() {
    frame.roll(8);
    updateScores();
    updateTotalScore();
  });

  $('#9').click(function() {
    frame.roll(9);
    updateScores();
    updateTotalScore();
  });

  $('#10').click(function() {
    frame.roll(10);
    updateScores();
    updateTotalScore();
  });

  function updateScores() {
   $('#frame0roll0').text(game.rolls[0])
   $('#frame0roll1').text(game.rolls[1])
   $('#frame1roll0').text(game.rolls[2])
   $('#frame1roll1').text(game.rolls[3])
   $('#frame2roll0').text(game.rolls[4])
   $('#frame2roll1').text(game.rolls[5])
   $('#frame3roll0').text(game.rolls[6])
   $('#frame3roll1').text(game.rolls[7])
   $('#frame4roll0').text(game.rolls[8])
   $('#frame4roll1').text(game.rolls[9])
   $('#frame5roll0').text(game.rolls[10])
   $('#frame5roll1').text(game.rolls[11])
   $('#frame6roll0').text(game.rolls[12])
   $('#frame6roll1').text(game.rolls[13])
   $('#frame7roll0').text(game.rolls[14])
   $('#frame7roll1').text(game.rolls[15])
   $('#frame8roll0').text(game.rolls[16])
   $('#frame8roll1').text(game.rolls[17])
   $('#frame9roll0').text(game.rolls[18])
   $('#frame9roll1').text(game.rolls[19])
   $('#frame9roll2').text(game.rolls[20])
 };

 function updateTotalScore() {
   $('#total').text(game.score());
 };

 $('#new-game').click(function() {
   location.reload();
 });

});

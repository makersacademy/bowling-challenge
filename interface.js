$(document).ready(function() {
  var game = new BowlingGame();

  $('#1').click(function() {
    game.roll(1);
    updateScores();
  });

  $('#2').click(function() {
    game.roll(2);
    updateScores();
  });

  $('#3').click(function() {
    game.roll(3);
    updateScores();
  });

  $('#4').click(function() {
    game.roll(4);
    updateScores();
  });

  $('#5').click(function() {
    game.roll(5);
    updateScores();
  });

  $('#6').click(function() {
    game.roll(6);
    updateScores();
  });

  $('#7').click(function() {
    game.roll(7);
    updateScores();
  });

  $('#8').click(function() {
    game.roll(8);
    updateScores();
  });

  $('#9').click(function() {
    game.roll(9);
    updateScores();
  });

  $('#10').click(function() {
    game.roll(10);
    updateScores();
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
  };

});

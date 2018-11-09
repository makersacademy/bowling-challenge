$(document).ready(function() {
  game = new Game();
  updateScore();


  $('#record-roll').submit(function(event) {
    event.preventDefault();
    var numberOfPins = $('#number-of-pins').val();
    game.recordRoll(parseInt(numberOfPins));
    updateScore();
    showPreviousRolls();
  });

  $('#btn0').click(function() {
    game.recordRoll(0)
    updateScore();
    showPreviousRolls();
  });

  $('#btn1').click(function() {
    game.recordRoll(1)
    updateScore();
    showPreviousRolls();
  });

  $('#btn2').click(function() {
    game.recordRoll(2)
    updateScore();
    showPreviousRolls();
  });

  $('#btn3').click(function() {
    game.recordRoll(3)
    updateScore();
    showPreviousRolls();
  });

  $('#btn4').click(function() {
    game.recordRoll(4)
    updateScore();
    showPreviousRolls();
  });

  $('#btn5').click(function() {
    game.recordRoll(5)
    updateScore();
    showPreviousRolls();
  });

  $('#btn6').click(function() {
    game.recordRoll(6)
    updateScore();
    showPreviousRolls();
  });

  $('#btn7').click(function() {
    game.recordRoll(7)
    updateScore();
    showPreviousRolls();
  });

  $('#btn8').click(function() {
    game.recordRoll(8)
    updateScore();
    showPreviousRolls();
  });

  $('#btn9').click(function() {
    game.recordRoll(9)
    updateScore();
    showPreviousRolls();
  });

  $('#btn10').click(function() {
    game.recordRoll(10)
    updateScore();
    showPreviousRolls();
  });

  function updateScore() {
    $('#score').text(game._totalScore);
  };

  function showPreviousRolls() {
    $('#previous-rolls').text(game._allRolls.join(' '));
  };

});

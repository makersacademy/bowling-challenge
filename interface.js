$(document).ready(function() {

  var bowl = new Bowl();
  var game = new Game();

  function updateRoll() {
    var i = 0;
    for (i = 0; i < bowl.rolls.length; i++) {
      $('#roll' + i).text(bowl.rolls[i]);
    };
  };

  function updateScore() {
    $('#total').text(game.score());
  };

  updateRoll();
  updateScore();

  $('#reset').on('click', function() {
    game.reset();
    $('.rolls').text('');
  });

  $('#zero').on('click', function() {
    bowl.roll0();
    updateRoll();
    updateScore();
  });

  $('#one').on('click', function() {
    bowl.roll1();
    updateRoll();
    updateScore();
  });

  $('#two').on('click', function() {
    bowl.roll2();
    updateRoll();
    updateScore();
  });

  $('#three').on('click', function() {
    bowl.roll3();
    updateRoll();
    updateScore();;
  });

  $('#four').on('click', function() {
    bowl.roll4();
    updateRoll();
    updateScore();
  });

  $('#five').on('click', function() {
    bowl.roll5();
    updateRoll();
    updateScore();
  });

  $('#six').on('click', function() {
    bowl.roll6();
    updateRoll();
    updateScore();
  });

  $('#seven').on('click', function() {
    bowl.roll7();
    updateRoll();
    updateScore();
  });

  $('#eight').on('click', function() {
    bowl.roll8();
    updateRoll();
    updateScore();
  });

  $('#nine').on('click', function() {
    bowl.roll9();
    updateRoll();
    updateScore();
  });

  $('#ten').on('click', function() {
    bowl.roll10();
    updateRoll();
    updateScore();
  });

});

$(document).ready(function() {

  var bowl = new Bowl();
  var game = new Game();

  $('#reset').on('click', function() {
    game.reset();
    $('.rolls').text('');
  });

  $('#zero').on('click', function() {
    bowl.roll(0);
    updateRoll();
  });

  $('#one').on('click', function() {
    bowl.roll(1);
    updateRoll();
  });

  $('#two').on('click', function() {
    bowl.roll(2);
    updateRoll();
  });

  $('#three').on('click', function() {
    bowl.roll(3);
    updateRoll();
  });

  $('#four').on('click', function() {
    bowl.roll(4);
    updateRoll();
  });

  $('#five').on('click', function() {
    bowl.roll(5);
    updateRoll();
  });

  $('#six').on('click', function() {
    bowl.roll(6);
    updateRoll();
  });

  $('#seven').on('click', function() {
    bowl.roll(7);
    updateRoll();
  });

  $('#eight').on('click', function() {
    bowl.roll(8);
    updateRoll();
  });

  $('#nine').on('click', function() {
    bowl.roll(9);
    updateRoll();
  });

  $('#ten').on('click', function() {
    bowl.roll(10);
    updateRoll();
  });

  function updateScore() {
    $('#total').text(game.score());
  };

  function updateRoll() {
    var i = 0;
    var j = 0;
    for (i = 0; i < bowl.rolls.length; i++) {
      $('#roll' + i).text(bowl.rolls[i]);
    };

  };

});

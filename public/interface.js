$(document).ready(function(){
  var game = new Game();
  updateResult();

  function updateResult() {
    $('#score').text(game.pinTally);
  };

    // $('#pinsdown').text(game.pinsDown(1));

  $('#one').click(function() {
    game.roll(1);
    game.tally(1);
    updateResult();
  })

  $('#two').click(function() {
    game.roll(2);
    game.tally(2);
    updateResult();
  })

  $('#three').click(function() {
    game.roll(3);
    game.tally(3);
    game.pinsDown(3);
    updateResult();
  })

  $('#four').click(function() {
    game.roll(4);
    game.tally(4);
    game.pinsDown(4);
    updateResult();
  })

  $('#five').click(function() {
    game.roll(5);
    game.tally(5);
    game.pinsDown(5);
    updateResult();
  })

  $('#six').click(function() {
    game.roll(6);
    game.tally(6);
    game.pinsDown(6);
    updateResult();
  })

  $('#seven').click(function() {
    game.roll(7);
    game.tally(7);
    game.pinsDown(7);
    updateResult();
  })

  $('#eight').click(function() {
    game.roll(8);
    game.tally(8);
    game.pinsDown(8);
    updateResult();
  })

  $('#nine').click(function() {
    game.roll(9);
    game.tally(9);
    game.pinsDown(9);
    updateResult();
  })

  $('#ten').click(function() {
    game.roll(10);
    game.tally(10);
    game.pinsDown(10);
    updateResult();
  })


})

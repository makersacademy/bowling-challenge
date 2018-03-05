$(document).ready(function(){
  var game = new Game();
  updateResult();

  function updateResult() {
    $('#score').text(game.pinTally);
  };

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
    updateResult();
  })

  $('#four').click(function() {
    game.roll(4);
    game.tally(4);
    updateResult();
  })

  $('#five').click(function() {
    game.roll(5);
    game.tally(5);
    updateResult();
  })

  $('#six').click(function() {
    game.roll(6);
    game.tally(6);
    updateResult();
  })

  $('#seven').click(function() {
    game.roll(7);
    game.tally(7);
    updateResult();
  })

  $('#eight').click(function() {
    game.roll(8);
    game.tally(8);
    updateResult();
  })

  $('#nine').click(function() {
    game.roll(9);
    game.tally(9);
    updateResult();
  })

  $('#ten').click(function() {
    game.roll(10);
    game.tally(10);
    updateResult();
  })


})

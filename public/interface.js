$(document).ready(function(){
  var game = new Game();
  updateResult();

  function updateResult() {
    $('#score').text(game.currentScore);
  };

  $('#one').click(function() {
    game.roll(1);
    updateResult();
  })

  $('#two').click(function() {
    game.roll(2);
    updateResult();
  })

  $('#three').click(function() {
    game.roll(3);
    updateResult();
  })

  $('#four').click(function() {
    game.roll(4);
    updateResult();
  })

  $('#five').click(function() {
    game.roll(5);
    updateResult();
  })

  $('#six').click(function() {
    game.roll(6);
    updateResult();
  })

  $('#seven').click(function() {
    game.roll(7);
    updateResult();
  })

  $('#eight').click(function() {
    game.roll(8);
    updateResult();
  })

  $('#nine').click(function() {
    game.roll(9);
    updateResult();
  })

  $('#ten').click(function() {
    game.roll(10);
    updateResult();
  })


})

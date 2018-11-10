$(document).ready(function() {
  var game = new BowlingGame();

  $('#1').click(function() {
    game.roll(1);
  })

  $('#2').click(function() {
    game.roll(2);
  })

  $('#3').click(function() {
    game.roll(3);
  })

  $('#4').click(function() {
    game.roll(4);
  })

  $('#5').click(function() {
    game.roll(5);
  })

  $('#6').click(function() {
    game.roll(6);
  })

  $('#7').click(function() {
    game.roll(7);
  })

  $('#8').click(function() {
    game.roll(8);
  })

  $('#9').click(function() {
    game.roll(9);
  })

  $('#10').click(function() {
    game.roll(10);
  })

});

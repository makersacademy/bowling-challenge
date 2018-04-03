$(document).ready(function() {
  var game = new Game();

  $('#zero').click(function() {
    game.roll(0);
    $('#frameScore').text(game.frameScore());
  });

  $('#one').click(function() {
    game.roll(1);
    $('#frameScore').text(game.frameScore());
  });

  $('#two').click(function() {
    game.roll(2);
    $('#frameScore').text(game.frameScore());
  });

  $('#three').click(function() {
    game.roll(3);
    $('#frameScore').text(game.frameScore());
  });

  $('#four').click(function() {
    game.roll(4);
    $('#frameScore').text(game.frameScore());
  });

  $('#five').click(function() {
    game.roll(5);
    $('#frameScore').text(game.frameScore());
  });

  $('#six').click(function() {
    game.roll(6);
    $('#frameScore').text(game.frameScore());
  });

  $('#seven').click(function() {
    game.roll(7);
    $('#frameScore').text(game.frameScore());
  });

  $('#eight').click(function() {
    game.roll(8);
    $('#frameScore').text(game.frameScore());
  });

  $('#nine').click(function() {
    game.roll(9);
    $('#frameScore').text(game.frameScore());
  });

  $('#ten').click(function() {
    game.roll(10);
    $('#frameScore').text(game.frameScore());
  });

});

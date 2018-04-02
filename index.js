$(document).ready(function(){
  var game = new Game();

  $('#zero').click(function() {
    game.roll(0);
    $('#frameTotal').text(game.frameTotal());
  });

  $('#one').click(function() {
    game.roll(1);
    $('#frameTotal').text(game.frameTotal());
  });

  $('#two').click(function() {
    game.roll(2);
    $('#frameTotal').text(game.frameTotal());
  });

  $('#three').click(function() {
    game.roll(3);
    $('#frameTotal').text(game.frameTotal());
  });

  $('#four').click(function() {
    game.roll(4);
    $('#frameTotal').text(game.frameTotal());
  });

  $('#five').click(function() {
    game.roll(5);
    $('#frameTotal').text(game.frameTotal());
  });

  $('#six').click(function() {
    game.roll(6);
    $('#frameTotal').text(game.frameTotal());
  });

  $('#seven').click(function() {
    game.roll(7);
    $('#frameTotal').text(game.frameTotal());
  });

  $('#eight').click(function() {
    game.roll(8);
    $('#frameTotal').text(game.frameTotal());
  });

  $('#nine').click(function() {
    game.roll(9);
    $('#frameTotal').text(game.frameTotal());
  });

  $('#ten').click(function() {
    game.roll(10);
    $('#frameTotal').text(game.frameTotal());
  });

});

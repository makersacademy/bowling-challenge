$(document).ready(function(){
  var game = new Game();

  $('#zero').click(function() {
    game.roll(0);
    $('#tot').text(game.tot());
  });

  $('#one').click(function() {
    game.roll(1);
    $('#tot').text(game.tot());
  });

  $('#two').click(function() {
    game.roll(2);
    $('#tot').text(game.tot());
  });

  $('#three').click(function() {
    game.roll(3);
    $('#tot').text(game.tot());
  });

  $('#four').click(function() {
    game.roll(4);
    $('#tot').text(game.tot());
  });

  $('#five').click(function() {
    game.roll(5);
    $('#tot').text(game.tot());
  });

  $('#six').click(function() {
    game.roll(6);
    $('#tot').text(game.tot());
  });

  $('#seven').click(function() {
    game.roll(7);
    $('#tot').text(game.tot());
  });

  $('#eight').click(function() {
    game.roll(8);
    $('#tot').text(game.tot());
  });

  $('#nine').click(function() {
    game.roll(9);
    $('#tot').text(game.tot());
  });

  $('#ten').click(function() {
    game.roll(10);
    $('#tot').text(game.tot());
  });

});

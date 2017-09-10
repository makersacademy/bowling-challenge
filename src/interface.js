
$(document).ready(function() {
  var game = new BowlingGame();

  var changeScore = function(){
  for (var i = 0; i <= 20; i ++){
    $('.turn-' + i).text(game.frames[i - 1]);
  };
  // if strike
  // if spare
};

  $('#score').text(game.score);

  $('.total').text(game.score);
  // $(".roll").click(function( event ){
  //   $( this ).hide( 'fast' ).show( 'fast' ); // can also put a number in milliseconds instead of slow
  // });

  $('#roll0').click(function() {
    game.roll(0);
    changeScore();
    $('#score').text(game.score);
    $('.total').text(game.score);

  });

  $('#roll1').click(function() {
    game.roll(1);
    changeScore();
    $('#score').text(game.score);
    $('.total').text(game.score);

  });

  $('#roll2').click(function() {
    game.roll(2);
    changeScore();
    $('#score').text(game.score);
    $('.total').text(game.score);
  });

  $('#roll3').click(function() {
    game.roll(3);
    changeScore();
    $('#score').text(game.score);
    $('.total').text(game.score);
  });

  $('#roll4').click(function() {
    game.roll(4);
    changeScore();
    $('#score').text(game.score);
    $('.total').text(game.score);
  });

  $('#roll5').click(function() {
    game.roll(5);
    changeScore();
    $('#score').text(game.score);
    $('.total').text(game.score);
  });

  $('#roll6').click(function() {
    game.roll(6);
    changeScore();
    $('#score').text(game.score);
    $('.total').text(game.score);
  });

  $('#roll7').click(function() {
    game.roll(7);
    changeScore();
    $('#score').text(game.score);
    $('.total').text(game.score);
  });

  $('#roll8').click(function() {
    game.roll(8);
    changeScore();
    $('#score').text(game.score);
    $('.total').text(game.score);
  });

  $('#roll9').click(function() {
    game.roll(9);
    changeScore();
    $('#score').text(game.score);
    $('.total').text(game.score);
  });

  $('#roll10').click(function() {
    game.roll(10);
    changeScore();
    $('#score').text(game.score);
    $('.total').text(game.score);
  });

  $('#calculateScore').click(function() {
    game.calculateScore();
    $('#score').text(game.score);
    $('.total').text(game.score);
  });

  $('#reset').click(function() {
    game.resetGame();
    $('#score').text(game.score);
    $('.total').text(game.score);
  });

  $('#generate').click(function() {
    game.generateFrames(8,20);
    $('#score').text(game.score);
    $('.total').text(game.score);
  });


});

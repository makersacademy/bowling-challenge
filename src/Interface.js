$(document).ready(function() { 
  var game = new BowlingGame();
  updateScore();

  $('#pinHit_random').click(function() {
    game.roll(random());
    updateScore();
    console.log(game.rolls)
  });

  $('#pinHit_0').click(function() {
    game.roll(0);
    updateScore();
  });

  $('#pinHit_1').click(function() {
    game.roll(1);
    updateScore();
  });

  $('#pinHit_2').click(function() {
    game.roll(2);
    updateScore();
  });

  $('#pinHit_3').click(function() {
    game.roll(3);
    updateScore();
  });

  $('#pinHit_3').click(function() {
    game.roll(4);
    updateScore();
  });

  $('#pinHit_5').click(function() {
    game.roll(5);
    updateScore();
  });

  $('#pinHit_6').click(function() {
    game.roll(6)
    updateScore();
  });

  $('#pinHit_7').click(function() {
    game.roll(7);
    updateScore();
  });

  $('#pinHit_8').click(function() {
    game.roll(8);
    updateScore();
  });

  $('#pinHit_9').click(function() {
    game.roll(9);
    updateScore();
  });

  $('#pinHit_10').click(function() {
    game.roll(10);
    updateScore();
  });


  function random() {
    return Math.floor(Math.random() * 11); 
  };

  function updateScore() {
  }



});
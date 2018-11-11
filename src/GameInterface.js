$(document).ready(function(){

  var game = new Game();

  function updateScore() {
  $('#current-score').text(game.currentScore);
  $('#current-roll').text(game.currentRoll);
  }

  updateScore();

  $('#zero-pins').on('click', function(){
    game.roll(0);
    game.score();
    updateScore();
  })

  $('#one-pin').on('click', function(){
    game.roll(1);
    game.score();
    updateScore();
  })

  $('#two-pins').on('click', function(){
    game.roll(2);
    game.score();
    updateScore();
  })

  $('#three-pins').on('click', function(){
    game.roll(3);
    game.score();
    updateScore();
  })

  $('#four-pins').on('click', function(){
    game.roll(4);
    game.score();
    updateScore();
  })

  $('#five-pins').on('click', function(){
    game.roll(5);
    game.score();
    updateScore();
  })

  $('#six-pins').on('click', function(){
    game.roll(6);
    game.score();
    updateScore();
  })

  $('#seven-pins').on('click', function(){
    game.roll(7);
    game.score();
    updateScore();
  })

  $('#eight-pins').on('click', function(){
    game.roll(8);
    game.score();
    updateScore();
  })

  $('#nine-pins').on('click', function(){
    game.roll(9);
    game.score();
    updateScore();
  })

  $('#ten-pins').on('click', function(){
    game.roll(10);
    game.score();
    updateScore();
  })
})

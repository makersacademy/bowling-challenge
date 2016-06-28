$(document).ready(function(){

  var game = new BowlingGame();
  var score = game.score();

  $('#score1').on('click', function(){
    game.roll(1);

  });

});

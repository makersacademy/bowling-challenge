var game = new Game()

$(document).ready(function(){

$("#current_score").text(game.viewScore());

$("#gutter_game").click(function(){
  $(game.gutterGame());
  $("#current_score").text(game.viewScore());
});

$("#roll_strike").click(function(){
  $(game.playFrameStrike());
  $("#current_score").text(game.viewScore());
});

$("#perfect_game").click(function(){
  $(game.perfectGame());
  $("#current_score").text(game.viewScore());
});

});

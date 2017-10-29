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

$("#play_frame_roll").submit(function(event){
    var a = parseInt(document.getElementById("play_frame_input_1").value);
    var b = parseInt(document.getElementById("play_frame_input_2").value);
    $(game.playFrameRoll(a, b));
    event.preventDefault();
  $("#current_score").text(game.viewScore());
  });

  $("#perfect_game").click(function(){
    $(game.perfectGame());
    $("#current_score").text(game.viewScore());
  });

});

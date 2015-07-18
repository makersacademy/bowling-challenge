var game = new Bowling();

var framesTally = [];
var playing = true;
var framesNumber = 0;
var bowl1 = "";
var bowl2 = "";

$("#bowlsform").submit(function(e){
  e.preventDefault();

  bowl1 = parseInt($("#bowl_1").val());
  bowl2 = parseInt($("#bowl_2").val());

  game.roll(bowl1,bowl2);

  $("#score").html(game.total());

  $("#frames_played").html(game.framesNumber);

});

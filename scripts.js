game = new Game();

$("#perfectGameButton").click(function(){
  game.playFrame1(10,0);
  $("#f1roll1").text(game._frame1._roll1);
  $("#f1roll2").text(game._frame1._roll2);
  $("#f1Score").text(game._frame1._frameScore);
});

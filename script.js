$(document).ready(function() {

  var game = new Game();

  $("#roll").click(function() {
    game.roll();
    updateScore();
    pushToArray();
  });

  function updateScore(){
    $("#score").text(game.gameFrame);
  }

  function pushToArray(){
    $("#fullGame").text(game.arrayGame);
  }

});

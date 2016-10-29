
$( document ).ready(function () {
  var game = new Game();

  function update() {
    $(".frame").text(game.currentFrame);
    $(".roll").text(game.currentRoll);
    $(".score").text(game.scoreTotal);
    $(".hits").text(game.lastRollScore)
  };

  update();

  $('#roll').click(function() {
    game.roll();
    update();
    });

});

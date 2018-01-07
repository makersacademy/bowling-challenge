$(document).ready(function() {
  var game = new Game();

  $("#bowl").click(function() {
    var pins = parseInt($("#pinScore").val());
    updateBowlScore(pins);
    var index = game.frameIndex;
    game.bowl(pins);
    if(game.gameOver) {
      finalTotal()
    } else if (index < game.frameIndex) {
      updateRunningTotal();
    };
  });

  function updateBowlScore(pins) {
    $("#f" + game.frameIndex + "-" + game.currentFrame.bowlIndex).html(pins);
  };

  function updateRunningTotal() {
    $("#t" + (game.frameIndex-1)).html(game.score());
  };

  function finalTotal() {
    $("#tFinal").html(game.score());
  };
});

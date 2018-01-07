$(document).ready(function() {
  var game = new Game();

  $("#bowl").click(function() {
    pins = parseInt($("#pinScore").val());
    updateBowlScore(pins);
    game.bowl(pins);
    return false;
  });

  function updateBowlScore(pins) {
    // console.log(game.gameOver)
    if(game.gameOver) {
      displayTotal();
    } else {
      $("#f" + game.frameIndex + "-" + game.currentFrame.bowlIndex).html(pins);
    };
  };

  function displayTotal() {
    $("#tFinal").html(game.score());
  };
});

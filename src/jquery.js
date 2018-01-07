$(document).ready(function() {
  var game = new Game();

  $("#bowl").click(function() {
    pins = parseInt($("#pinscore").val());
    updateBowlScore(pins);
    game.bowl(pins);
    return false;
  });

  function updateBowlScore(pins) {
    $("#f" + game.frameIndex + "-" + game.currentFrame.bowlIndex).html(pins);
  };
});

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

// $(document).append(buildGameView(game));
// function buildGameView(game) {
//   $container = $("<div></div>");
//   $container.append(buildScoreTable(game));
//   return $container;
// }
// function buildScoreTable(game) {
//   $table = $("<div></div>");
//   return $table;
// }
// function buildTableHeader(game) {
//   var frameViews = [];
//   for (var index = 0; index < game.numberOfFrames) {
//     frameViews.push(buildFrame(game.frames[i]));
//   }
// }
// function buildRowForPlayer(player) {
// }

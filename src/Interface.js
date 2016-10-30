
$( document ).ready(function () {
  var game = new Game();

  $(".title").hide();

  function update() {
    $(".frame").text(game.currentFrame);
    $(".roll").text(game.currentRoll);
    $(".score").text(game.scoreTotal);
    $(".hits").text(game.lastRollScore);
    if (game.pins < 10) {
      for (var i = 1; i <= (10 - game.pins); i++) {
        $('#'+i.toString()).hide("slow");
      }
    } else {
      $(":hidden").show("slow");
    }
  };

  update();

  $('#roll').click(function() {
    game.roll();
    update();
    });

});

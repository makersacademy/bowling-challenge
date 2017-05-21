(function() {
  'use strict';
  $(document).ready(function() {
    var game = new Bowling();
    updateBowlingDisplay();

    $("input").click(function() {
      var pinsHit = $("select#bowl").val();
      game.throwBall(pinsHit);
      updateBowlingDisplay();
    });

    function updateBowlingDisplay() {
      $("#pins_left").text(game._pinsLeft);
    }
  });
}());

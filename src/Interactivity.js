(function() {
  'use strict';
  var game = new Bowling();
  $(document).ready(function() {
    $("span#pins_left").text(game._pinsLeft);

    $("input").click(function() {
      var pinsHit = $("select#bowl").val();
      game.throwBall(pinsHit);
      $("span#total_score").html(function() { return game.totalScore(); });
    });

    function updateBowlingDisplay() {
      $("span#pins_left").text(game._pinsLeft);
    }
  });
}());

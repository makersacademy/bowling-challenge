$(document).ready(function() {
  var game = new BowlingGame();
  var frame = 1;
  var lastRoll = "second";

  $("button").on('click', function(e) {
    var idClicked = e.target.id;
    var rollValue = Number(idClicked);
    if (lastRoll === 'second') {
      game.firstRoll(rollValue);
      $("#game-log").append("<p>Frame:" + frame + "First roll: " + rollValue +"</p>");
      if (rollValue === 10) {
        lastRoll = "second";
        frame ++;
      } else {
        lastRoll = "first";
      }
    } else {
      game.secondRoll(rollValue);
      $("#game-log").append(" Second roll: " + rollValue);
      lastRoll = "second";
      frame ++;
    }
    score = game.totalScore;
    $("#game-log").append(" Total score:" + score)
  });

});

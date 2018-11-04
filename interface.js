$(document).ready(function() {
  var game = new BowlingGame();
  var frame = 1;
  var lastRoll = "second";

  $("button").on('click', function(e) {
    if (frame <= 10) {
      var idClicked = e.target.id;
      var rollValue = Number(idClicked);
      if (lastRoll === 'second') {
        game.firstRoll(rollValue);
        $("#game-log").append("<p>Frame:" + frame + " First roll: " + rollValue + " Total score: " + game.totalScore + "</p>");
        if (rollValue === 10) {
          lastRoll = "second";
          frame ++;
        } else {
          lastRoll = "first";
          for (index = 11 - idClicked; index < 11; ++index) {
            $("#" + index).hide();
          }
        }
      } else {
        game.secondRoll(rollValue);
        $("#game-log").append("<p>Frame:" + frame + " Second roll: " + rollValue + " Total score: " + game.totalScore + "</p>");
        lastRoll = "second";
        frame ++;
        $("button").show();
      }
    } else if (frame === 11) {
          if (game.lastFrame().isSpare === true || game.lastFrame().isStrike === true) {
            var idClicked = e.target.id;
            var rollValue = Number(idClicked);
            game.firstRoll(rollValue);
            $("#game-log").append("<p>Bonus roll: " + rollValue + " Total score: " + game.totalScore +"</p>");
            frame ++;
          }
    } else if (frame === 12) {
          if (game.lastFrame().isStrike === true) {
            var idClicked = e.target.id;
            var rollValue = Number(idClicked);
            game.firstRoll(rollValue);
            $("#game-log").append("<p>Bonus roll: " + rollValue + " Total score: " + game.totalScore + "</p>");
            frame ++;
          }
      }
  });
});

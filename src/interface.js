$(document).ready(function () {
  var game = new Game(new Frame());

  createScoreTable();
  createPinButtons();
  if (!game.isOver()) {
    inputScores();
  } else {
    $("#game-over").text("Game Over!")
  }

  function createScoreTable() {
    for (var i = 1; i <= 10; i ++) {
      $("#score-table").append("<tr><td>" + i + "</td><td>" + 1 +
                               "</td><td id='frame" + i +
                               "-roll1'></td><td></td></tr>");
      $("#score-table").append("<tr><td>" + i + "</td><td>" + 2 +
                               "</td><td id='frame" + i +
                               "-roll2'></td><td id='frame" + i + "score'></td></tr>");
    }
    $("#score-table").append("<tr><td>" + 10 + "</td><td>" + 3 +
                             "</td><td id='frame" + 10 +
                             "-roll3'></td><td><td></tr>");
  }

  function createPinButtons() {
    for (var i = 1; i <= 10; i ++) {
      $("#pin-buttons").append("<button id='button-"+ i +
                               "' data-value='"+ i +"'>" +
                               i + "</button>");
    }
  }

  function updateGameProgress() {
    $("#total").text(game.getScore());
    if (game.frameNum() <= 10) {
      $("#current-frame").text(game.frameNum());
    }
  }


  function inputScores() {
    $("button").click(function () {
      var pins = $(this).data("value");
      game.logRoll(pins);
      var num = game.frameNum();

      if (game.currentFrame.isSecondRoll()) {
        $("#frame" + num + "-roll1").text(game.currentFrame.scores[0]);
      } else {
        $("#frame" + num + "-roll2").text(game.currentFrame.scores[1]);
      }
      if (num === 10) {
        if (game.currentFrame.isThirdRoll()) {
          $("#frame10-roll3").text(game.currentFrame.scores[2]);
        }
      }

      if (game.currentFrame.isComplete()) {
        game.logFrameScore(game.currentFrame);
        game.currentFrame.isComplete();
      }

      $("#frame" + num + "score").text(game.currentFrame.getScore());
      game.saveFrame(game.currentFrame);
      updateGameProgress();

      if (game.currentFrame.isComplete()) {
        if (num === 9) {
          game.addFrame(new LastFrame());
        } else if (num < 9) {
          game.addFrame(new Frame());
        } else {
          return;
        }
      }
    });
  }
});

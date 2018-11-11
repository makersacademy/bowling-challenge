$(document).ready(function() {
  var game = new Game();
  var frame = 1;
  var lastRoll = "second";

  $("button").on('click', function(e) {
    if (frame <= 10) {
      var idClicked = e.target.id;
      var rollValue = Number(idClicked);
      if (lastRoll === 'second') {
        game.bowl(rollValue);
        $(`#${frame}_1`).text(`${rollValue}`);
        $(`#game_total`).text(`${game.totalScore()}`);
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
        game.bowl(rollValue);
        $(`#${frame}_2`).text(`${rollValue}`);
        $(`#total_${frame}`).text(`${game.totalScore()}`);
        $(`#game_total`).text(`${game.totalScore()}`);
        lastRoll = "second";
        frame ++;
        $("button").show();
      }
    } else if (frame === 11) {
          if (game.lastFrame().isSpare === true || game.lastFrame().isStrike === true) {
            var idClicked = e.target.id;
            var rollValue = Number(idClicked);
            game.bowl(rollValue);
            $(`#game_total`).text(`${game.totalScore()}`);
            frame ++;
          }
    } else if (frame === 12) {
          if (game.lastFrame().isStrike === true) {
            var idClicked = e.target.id;
            var rollValue = Number(idClicked);
            game.bowl(rollValue);
            $(`#game_total`).text(`${game.totalScore()}`);
            frame ++;
          }
      }
  });
});

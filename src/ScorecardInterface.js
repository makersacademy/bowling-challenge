let scorecard = new Scorecard();

$(document).ready(function() {

  $('#frame-number').text(scorecard.frameNumber);
  $('#score').text(scorecard.total());

  roll = function(pins) {
    scorecard.roll(pins);

    for (i = (10 - pins); i <= 10; i++) {
      $(`#roll-${i}`).hide();
    }

    if (scorecard.isComplete()) {
      $('#frame-number').text("GAME OVER");
      // Failing attempt to switch off roll function when scorecard is complete
      // $('#frame-and-score').off("click");
    } else {
      $('#frame-number').text(scorecard.frameNumber);
    }

    $('#score').text(scorecard.total());

    if (scorecard._currentFrame().isComplete() === false) {
      $(`#frame-${scorecard.frameNumber}-roll-1`).text(scorecard._currentFrame().firstRoll);
    }

    if (scorecard._currentFrame().isComplete()) {
      for (i = 0; i <= 10; i++) {
        $(`#roll-${i}`).show();
      }
      $(`#frame-${scorecard.frameNumber - 1}-roll-1`).text(scorecard._currentFrame().firstRoll);
      $(`#frame-${scorecard.frameNumber - 1}-roll-2`).text(scorecard._currentFrame().secondRoll);
      $(`#frame-score-${scorecard.frameNumber - 1}`).text(scorecard._currentFrame().score());
    }
// Trying to make the same as below work for spare scoring but it isn't??
    // if (scorecard._isPreviousFrameSpare()) {
    //   $(`#frame-score-${scorecard.frameNumber - 2}`).text(scorecard._previousFrame().firstRollscore());
    // }

    if (scorecard._isPreviousFrameStrike() && scorecard._currentFrame().isComplete()) {
      $(`#frame-score-${scorecard.frameNumber - 2}`).text(scorecard._previousFrame().score());
    }
  };

});

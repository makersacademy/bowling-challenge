let scorecard = new Scorecard();

$(document).ready(function() {

  $('#frame-number').text(scorecard.frameNumber);
  $('#score').text(scorecard.total());

  roll = function(pins) {
    scorecard.roll(pins);

    $('#frame-number').text(scorecard.frameNumber);
    $('#score').text(scorecard.total());

    if (scorecard._currentFrame().isComplete() === false) {
      $(`#frame-${scorecard.frameNumber}-roll-1`).text(scorecard._currentFrame().firstRoll);
    }

    if (scorecard._currentFrame().isComplete()) {
      $(`#frame-${scorecard.frameNumber - 1}-roll-1`).text(scorecard._currentFrame().firstRoll);
      $(`#frame-${scorecard.frameNumber - 1}-roll-2`).text(scorecard._currentFrame().secondRoll);
      $(`#frame-score-${scorecard.frameNumber - 1}`).text(scorecard._currentFrame().score());
    }

    if (scorecard._previousFrame().isStrike()) {
      $(`#frame-score-${scorecard.frameNumber - 2}`).text(scorecard._previousFrame().score());
    }
  };

});

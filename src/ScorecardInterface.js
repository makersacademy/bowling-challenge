let scorecard = new Scorecard();

$(document).ready(function() {

  $('#frame-number').text(scorecard.frameNumber);
  $('#score').text(scorecard.total());

  roll = function(pins) {
    scorecard.roll(pins);
    $('#frame-number').text(scorecard.frameNumber);
    $('#score').text(scorecard.total());
  };

});

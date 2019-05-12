$(document).ready(function() {
  var scorecard = new Scorecard();

  $('#addRoll').click(function() {
    scorecard.method();
    $('#f1r1').text(scorecard.method());
    $('#f1r2').text(scorecard.method());
  });
});

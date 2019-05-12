$(document).ready(function() {
  var scorecard = new Scorecard();
  $('#name').text(scorecard.name);

  $('#addRoll').click(function() {
    scorecard.method();
    $('#').text(scorecard.method);
    $('#').text(scorecard.method);
  });
});

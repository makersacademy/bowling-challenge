$(document).ready(function() {

  let scorecard = new playerScoreCard();

  $('#submitRound').click(function() {
    var bowl1 = parseInt($('#firstBowl').val());
    var bowl2 = parseInt($('#secondBowl').val());
    var round = parseInt($('#roundSelector').val()) - 1;
    scorecard.add(bowl1, round);
    scorecard.add(bowl2, round);
    $(`#round${round + 1}Score`).text(scorecard.calculateScore(round));
    $('#firstBowl').val('');
    $('#secondBowl').val('');
    $('#roundSelector').val('');
  });
});

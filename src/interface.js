$(document).ready(function() {

  var scorecard = new ScoreCard();
  var game = new Game(scorecard);

  $('#frame_submit').click(function() {
    var bowl1 = Number($('#bowl1').val());
    var bowl2 = Number($('#bowl2').val());
    game.frame(bowl1 ,bowl2);
    updateScoreCard();
  });

  function updateScoreCard() {
    for (var i=0; i<scorecard.card.length; i++) {
      $('#frame'+i+'_bowl1').text(scorecard.card[i].bowl1);
      $('#frame'+i+'_bowl2').text(scorecard.card[i].bowl2);
      $('#frame'+i+'_score').text(scorecard.card[i].frameScore);
      $('#frame'+i+'_running_score').text(scorecard.card[i].runningScore);
      // $('#frame'+i+'_notes').text(scorecard.card[i].notes);
    }
  };


})

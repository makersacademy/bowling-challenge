var scorecard = new ScoreCard();

  $(document).ready(function(){

  $('#score').text(scorecard.score);

  $('.HitPins').click(function(){
    scorecard.hitPins(3);
    scorecard.tallyScore();
  $('#score').text(scorecard.score);
  });


});

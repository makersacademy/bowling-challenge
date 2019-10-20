$(document).ready(function() {
  var scorecard = new Scorecard();

  scorecard.total();

  $('#enter-rolls').on('click', function(){
    scorecard.roll()
    $('#player-score').text(scorecard.total + " points");
  })
})

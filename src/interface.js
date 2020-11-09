$(document).ready(function() {
  var scorecard = new Score();
  $('#score').text(scorecard.score);

  $('#button').click(function(){
    scorecard.add()
    $('#score').text(scorecard.score);
  });
});
$(document).ready(function() {
  var scorecard = new Scorecard();

  $('#total-score').text(scorecard.score);

  $('#submit').click(function() {
    var number = $('#roll-number').val();
    scorecard.add(number);
    scorecard.sum()
    $('#total-score').text(scorecard.score);
  })

})

$(document).ready(function() {
  var scorecard = new Scorecard();

  $('#total-score').text(scorecard.score);

  $('#roll-score-1').click(function() {
    scorecard.add(1);
    scorecard.sum();
    $('#total-score').text(scorecard.score);
  })

  $('#roll-score-2').click(function() {
    scorecard.add(2);
    scorecard.sum();
    $('#total-score').text(scorecard.score);
  })

  $('#roll-score-3').click(function() {
    scorecard.add(3);
    scorecard.sum();
    $('#total-score').text(scorecard.score);
  })

  $('#roll-score-4').click(function() {
    scorecard.add(4);
    scorecard.sum();
    $('#total-score').text(scorecard.score);
  })

  $('#roll-score-5').click(function() {
    scorecard.add(5);
    scorecard.sum();
    $('#total-score').text(scorecard.score);
  })

  $('#roll-score-6').click(function() {
    scorecard.add(6);
    scorecard.sum();
    $('#total-score').text(scorecard.score);
  })

  $('#roll-score-7').click(function() {
    scorecard.add(7);
    scorecard.sum();
    $('#total-score').text(scorecard.score);
  })

  $('#roll-score-8').click(function() {
    scorecard.add(8);
    scorecard.sum();
    $('#total-score').text(scorecard.score);
  })

  $('#roll-score-9').click(function() {
    scorecard.add(9);
    scorecard.sum();
    $('#total-score').text(scorecard.score);
  })

  $('#roll-score-10').click(function() {
    scorecard.add(10);
    scorecard.sum();
    $('#total-score').text(scorecard.score);
  })



})

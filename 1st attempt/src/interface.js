$(document).ready(function() {
  var scorecard = new Scorecard();

  $('#frame').text(scorecard.frame);

  $('#roll').text(scorecard.rollCount);

  $('#enter-score').submit(function(event) {
    event.preventDefault();
    var score = $('#score').val(); //takes score entered as variable
    scorecard.enterScore(Number(score)); //adds score to frameScore
    scorecard.addToGameScore(); //adds frameScore to gameScore
    scorecard.incrementFrame(); //increments frame number
    $('#frame').text(scorecard.frame); //displays frame number
    scorecard.changeRollCount(); //changes roll number
    $('#roll').text(scorecard.rollCount); // diplays rollnumber
    $('#gameScore').text(scorecard.gameScore); //displays game score
    scorecard.resetFrameScore(); //resets frame score
    $('#frameScore').text(scorecard.frameScore); //displays frame score

  })

})

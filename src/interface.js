$(document).ready(function() {
  var scorecard = new Scorecard();

  $('#frame').text(scorecard.frameCount);

  $('#roll').text(scorecard.rollCount);

  $('#enter-score').submit(function(event) {
    event.preventDefault();
    var pins = $('#score').val(); //takes score entered as variable
    scorecard.roll(Number(pins));
    scorecard.addPins(pins);
    $('#pins').text(scorecard.pins);
    scorecard.score(); //adds score to rolls array
    $('#gameScore').text(scorecard.totalScore); //displays game score
    scorecard.incrementFrame();
    $('#frame').text(scorecard.frameCount);
    $('#roll').text(scorecard.rollCount);
  })

})

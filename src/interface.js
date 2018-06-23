$(document).ready( function() {
  var scoreCalculator = new ScoreCalculator;

  $(function() {
    var $select = $(".0-10");
    for (i = 0; i <= 10; i++) {
      $select.append($('<option></option>').val(i).html(i));
    }
  });

  $('#submit').click ( function(event) {
    event.preventDefault();
    var frameOne = [parseInt($('#frame-one-roll-one').val(), 10), parseInt($('#frame-one-roll-two').val(), 10)]
    var frameTwo = [parseInt($('#frame-two-roll-one').val(), 10), parseInt($('#frame-two-roll-two').val(), 10)]
    var frameThree = [parseInt($('#frame-three-roll-one').val(), 10), parseInt($('#frame-three-roll-two').val(), 10)]
    var frameFour = [parseInt($('#frame-four-roll-one').val(), 10), parseInt($('#frame-four-roll-two').val(), 10)]
    var frameFive = [parseInt($('#frame-five-roll-one').val(), 10), parseInt($('#frame-five-roll-two').val(), 10)]
    var frameSix = [parseInt($('#frame-six-roll-one').val(), 10), parseInt($('#frame-six-roll-two').val(), 10)]
    var frameSeven = [parseInt($('#frame-seven-roll-one').val(), 10), parseInt($('#frame-seven-roll-two').val(), 10)]
    var frameEight = [parseInt($('#frame-eight-roll-one').val(), 10), parseInt($('#frame-eight-roll-two').val(), 10)]
    var frameNine = [parseInt($('#frame-nine-roll-one').val(), 10), parseInt($('#frame-nine-roll-two').val(), 10)]
    var frameTen = [parseInt($('#frame-ten-roll-one').val(), 10), parseInt($('#frame-ten-roll-two').val(), 10)]
    var bonus = [parseInt($('#bonus-roll-one').val(), 10), parseInt($('#bonus-roll-two').val(), 10)]
    scores = [frameOne, frameTwo, frameThree, frameFour, frameFive, frameSix, frameSeven, frameEight, frameNine, frameTen, bonus]
    scoreCalculator.addScore(scores)
    scoreCalculator.calculateScore();
    gameScore = scoreCalculator.getScore();
    var scoreDisplay = new ScoreDisplay(gameScore);
    $('#total-score').text(scoreDisplay.getTotalScore());
  });

});

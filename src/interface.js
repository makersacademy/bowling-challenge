$(document).ready( function() {
  var frameOne = new Frame();
  var frameTwo = new Frame();
  var frameThree = new Frame();
  var frameFour = new Frame();
  var frameFive = new Frame();
  var frameSix = new Frame();
  var frameSeven = new Frame();
  var frameEight = new Frame();
  var frameNine = new Frame();
  var frameTen = new Frame();
  var scorecard = new Scorecard(frameOne, frameTwo, frameThree, frameFour, frameFive, frameSix, frameSeven, frameEight, frameNine, frameTen);
  $('#total-score').text(scorecard.calculateScore());

  $('#frame-one-submit').click( function(event) {
    event.preventDefault();
    var rollOne = parseInt($('#frame-one-roll-one').val(), 10);
    var rollTwo = parseInt($('#frame-one-roll-two').val(), 10);
    var bonusOne = parseInt($('#frame-two-roll-one').val(), 10);
    var bonusTwo = parseInt($('#frame-two-roll-two').val(), 10);
    frameOne.addRollOne(rollOne);
    frameOne.addRollTwo(rollTwo);
    frameOne.addBonusOne(bonusOne);
    frameOne.addBonusTwo(bonusTwo);
    $('#total-score').text(frameOne.getCurrentFrameScore());

  });
});

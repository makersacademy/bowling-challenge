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

  $(function() {
    var $select = $(".0-10");
    for (i=0; i<=10; i++) {
      $select.append($('<option></option>').val(i).html(i));
    }
  });

  $('#submit').click( function(event) {
    event.preventDefault();
    var frameOneRollOne = parseInt($('#frame-one-roll-one').val(), 10);
    var frameOneRollTwo = parseInt($('#frame-one-roll-two').val(), 10);
    var frameOneBonusOne = parseInt($('#frame-two-roll-one').val(), 10);
    var frameOneBonusTwo = parseInt($('#frame-two-roll-two').val(), 10);
    frameOne.addRollOne(frameOneRollOne);
    frameOne.addRollTwo(frameOneRollTwo);
    frameOne.addBonusOne(frameOneBonusOne);
    frameOne.addBonusTwo(frameOneBonusTwo);
    var frameTwoRollOne = parseInt($('#frame-two-roll-one').val(), 10);
    var frameTwoRollTwo = parseInt($('#frame-two-roll-two').val(), 10);
    var frameTwoBonusOne = parseInt($('#frame-three-roll-one').val(), 10);
    var frameTwoBonusTwo = parseInt($('#frame-three-roll-two').val(), 10);
    frameTwo.addRollOne(frameTwoRollOne);
    frameTwo.addRollTwo(frameTwoRollTwo);
    frameTwo.addBonusOne(frameTwoBonusOne);
    frameTwo.addBonusTwo(frameTwoBonusTwo);
    var frameThreeRollOne = parseInt($('#frame-three-roll-one').val(), 10);
    var frameThreeRollTwo = parseInt($('#frame-three-roll-two').val(), 10);
    var frameThreeBonusOne = parseInt($('#frame-four-roll-one').val(), 10);
    var frameThreeBonusTwo = parseInt($('#frame-four-roll-two').val(), 10);
    frameThree.addRollOne(frameThreeRollOne);
    frameThree.addRollTwo(frameThreeRollTwo);
    frameThree.addBonusOne(frameThreeBonusOne);
    frameThree.addBonusTwo(frameThreeBonusTwo);
    var frameFourRollOne = parseInt($('#frame-four-roll-one').val(), 10);
    var frameFourRollTwo = parseInt($('#frame-four-roll-two').val(), 10);
    var frameFourBonusOne = parseInt($('#frame-five-roll-one').val(), 10);
    var frameFourBonusTwo = parseInt($('#frame-five-roll-two').val(), 10);
    frameFour.addRollOne(frameFourRollOne);
    frameFour.addRollTwo(frameFourRollTwo);
    frameFour.addBonusOne(frameFourBonusOne);
    frameFour.addBonusTwo(frameFourBonusTwo);
    var frameFiveRollOne = parseInt($('#frame-five-roll-one').val(), 10);
    var frameFiveRollTwo = parseInt($('#frame-five-roll-two').val(), 10);
    var frameFiveBonusOne = parseInt($('#frame-six-roll-one').val(), 10);
    var frameFiveBonusTwo = parseInt($('#frame-six-roll-two').val(), 10);
    frameFive.addRollOne(frameFiveRollOne);
    frameFive.addRollTwo(frameFiveRollTwo);
    frameFive.addBonusOne(frameFiveBonusOne);
    frameFive.addBonusTwo(frameFiveBonusTwo);
    var frameSixRollOne = parseInt($('#frame-six-roll-one').val(), 10);
    var frameSixRollTwo = parseInt($('#frame-six-roll-two').val(), 10);
    var frameSixBonusOne = parseInt($('#frame-seven-roll-one').val(), 10);
    var frameSixBonusTwo = parseInt($('#frame-seven-roll-two').val(), 10);
    frameSix.addRollOne(frameSixRollOne);
    frameSix.addRollTwo(frameSixRollTwo);
    frameSix.addBonusOne(frameSixBonusOne);
    frameSix.addBonusTwo(frameSixBonusTwo);
    var frameSevenRollOne = parseInt($('#frame-seven-roll-one').val(), 10);
    var frameSevenRollTwo = parseInt($('#frame-seven-roll-two').val(), 10);
    var frameSevenBonusOne = parseInt($('#frame-eight-roll-one').val(), 10);
    var frameSevenBonusTwo = parseInt($('#frame-eight-roll-two').val(), 10);
    frameSeven.addRollOne(frameSevenRollOne);
    frameSeven.addRollTwo(frameSevenRollTwo);
    frameSeven.addBonusOne(frameSevenBonusOne);
    frameSeven.addBonusTwo(frameSevenBonusTwo);
    var frameEightRollOne = parseInt($('#frame-eight-roll-one').val(), 10);
    var frameEightRollTwo = parseInt($('#frame-eight-roll-two').val(), 10);
    var frameEightBonusOne = parseInt($('#frame-nine-roll-one').val(), 10);
    var frameEightBonusTwo = parseInt($('#frame-nine-roll-two').val(), 10);
    frameEight.addRollOne(frameEightRollOne);
    frameEight.addRollTwo(frameEightRollTwo);
    frameEight.addBonusOne(frameEightBonusOne);
    frameEight.addBonusTwo(frameEightBonusTwo);
    var frameNineRollOne = parseInt($('#frame-nine-roll-one').val(), 10);
    var frameNineRollTwo = parseInt($('#frame-nine-roll-two').val(), 10);
    var frameNineBonusOne = parseInt($('#frame-ten-roll-one').val(), 10);
    var frameNineBonusTwo = parseInt($('#frame-ten-roll-two').val(), 10);
    frameNine.addRollOne(frameNineRollOne);
    frameNine.addRollTwo(frameNineRollTwo);
    frameNine.addBonusOne(frameNineBonusOne);
    frameNine.addBonusTwo(frameNineBonusTwo);
    var frameTenRollOne = parseInt($('#frame-ten-roll-one').val(), 10);
    var frameTenRollTwo = parseInt($('#frame-ten-roll-two').val(), 10);
    var frameTenBonusOne = parseInt($('#bonus-roll-one').val(), 10);
    var frameTenBonusTwo = parseInt($('#bonus-roll-two').val(), 10);
    frameTen.addRollOne(frameTenRollOne);
    frameTen.addRollTwo(frameTenRollTwo);
    frameTen.addBonusOne(frameTenBonusOne);
    frameTen.addBonusTwo(frameTenBonusTwo);
    $('#total-score').text(scorecard.calculateScore());
    debugger;
  });
});

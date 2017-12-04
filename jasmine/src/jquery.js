const bowling = new Bowling

const updatePinfallCount = function() {
  $('#currentPinfall').html(bowling.currentRoll.pinfall);
}

$('#increasePinfall').click(function() {
  bowling.increaseRollPinfall();
  updatePinfallCount();
})

$('#decreasePinfall').click(function() {
  bowling.decreaseRollPinfall();
  updatePinfallCount();
})

$('#confirmButton').click(function() {
  bowling.submitScore();
  updatePinfallCount();
  lastPinfall = bowling.allRolls[(bowling.allRolls.length - 1)].pinfall
  console.log(bowling.totalScore())
  if (lastPinfall === 10) {
    $(`#roll${bowling._rollTracker - 1}`).html('X');
  } else {
    $(`#roll${bowling._rollTracker}`).html(lastPinfall);
  }

  // else if (bowling.scorecard.frames.length > 0 && bowling.scorecard.frames[bowling.scorecard.frames.length - 1].isSpare()) {
  //   $(`#roll${bowling._rollTracker}`).html('/');
})

$(document).ready(function() {
  updatePinfallCount();
});

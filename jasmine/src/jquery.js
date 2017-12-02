var roll = new Roll;
var frame = new Frame;

const newRoll = function() {
  roll = new Roll;
}

const newFrame = function() {
  frame = new Frame;
}

const isNewFrameNeeded = function() {
  if (frame.rollTally.length >= 2 || frame.totalPoints() >= 10) newFrame();
}

const updatePinfallCount = function() {
  $('#currentPinfall').html(roll.pinfall);
}

$('#increasePinfall').click(function() {
  roll.increasePinfall();
  updatePinfallCount();
})

$('#decreasePinfall').click(function() {
  roll.decreasePinfall();
  updatePinfallCount();
})

$('#confirmButton').click(function() {
  frame.addToFrame(roll);
  rollNumber = 1;
  lastPinfall = frame.rollTally[frame.rollTally.length - 1];
  $(`roll${rollNumber}`).html(lastPinfall);
  isNewFrameNeeded();
  newRoll();
  updatePinfallCount();
})

$(document).ready(function() {
  updatePinfallCount();
});

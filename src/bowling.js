'use strict';

function isStrike(frameRollNum, pinsScore) {
  return (frameRollNum == 1 && pinsScore == 10);
}

function isSpare(frameRollNum, pinsScore) {
  return (frameRollNum == 2 && pinsScore == 10);
}

function isOrdinary(frameRollNum, pinsScore) {
  return !(isStrike(frameRollNum, pinsScore) || isSpare(frameRollNum, pinsScore));
}

function isFrameOver(frameRollNum, pinsScore, frameNum) {
  if (frameNum < 10) {
    return (frameRollNum == 2 || isStrike(frameRollNum, pinsScore));
  } else if (frameNum == 10) {
    return (frameRollNum == 3 || (frameRollNum == 2 && isOrdinary(frameRollNum, pinsScore)));
  } else {
    return null;
  }
}

// it sums up count items from position, returns null if this would involve
// falling off the end of the array.
function sumRolls(rolls, position, count) {
  if (position + count > rolls.length) {
    return null;
  }
  var sum = 0;
  for (var i = position; i < position + count; i++){
    sum += rolls[i];
  }
  return sum;
}

const TEN_PINS = 10;

function sumArray(accumulator, currentValue) {
  return accumulator + currentValue;
}

function Frame(frameNumber) {
  this.frameNumber = frameNumber;
  this.rolls = [];
}

function Bowling() {
  this.totalScore = 0;
  this.frames = new Array(10);
  this.populateFrames();
}

Bowling.prototype.addRoll = function addRoll({ frame, pinsDown }) {
  const framesArray = this.frames;
  const arrayIndex = frame - 1;
  const rollsArray = framesArray[arrayIndex].rolls;
  const rollTotal = rollsArray.reduce(sumArray, 0);
  const pinsRangeError = ((rollTotal + pinsDown) > TEN_PINS);

  let maxRolls;

  if (frame > 10) {
    throw new RangeError(`Cannot have frame ${frame}. A bowling game is 10 frames.`);
  }

  if (frame < 10) { maxRolls = 2; } else { maxRolls = 3; }

  if (pinsRangeError) {
    console.error(`Error: Cannot have knocked ${pinsDown} down when only ${TEN_PINS-rollTotal} remain.`);
  }

  if ((frame !== 10) && (rollsArray.reduce(sumArray, 0) === TEN_PINS)) {
    console.error('Error: All pins already down in this frame.');
  } else {
    rollsArray.push(pinsDown);
  }
};

Bowling.prototype.populateFrames = function populateFrames() {
  const framesArray = this.frames;

  for (let index = 0; index < framesArray.length; index++) {
    framesArray[index] = new Frame(index + 1);
  }
};

Frame.prototype.isStrike = function isStrike() {
  return (this.rolls[0] === TEN_PINS);
};

Frame.prototype.isSpare = function isSpare() {
  return (this.rolls.reduce(sumArray, 0) === TEN_PINS);
};

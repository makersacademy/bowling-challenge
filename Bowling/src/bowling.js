const TEN_PINS = 10;

function sumArray(accumulator, currentValue) {
  return accumulator + currentValue;
}

function Frame(frameNumber) {
  this.frameNumber = frameNumber;
  this.rolls = [];
}

Frame.prototype.isStrike = function isStrike() {
  return (this.rolls[0] === TEN_PINS);
};

Frame.prototype.isSpare = function isSpare() {
  const rollTotal = this.rolls.reduce(sumArray, 0);
  return ((rollTotal === TEN_PINS) && (this.rolls.length === 2));
};

function Bowling() {
  this.totalScore = 0;
  this.frames = new Array(10);
  this.populateFrames();
}

Bowling.prototype.populateFrames = function populateFrames() {
  const framesArray = this.frames;

  for (let index = 0; index < framesArray.length; index++) {
    framesArray[index] = new Frame(index + 1);
  }
};
// Maybe frame parameter can have a default value:
// frame = this.frames.filter(f => f.rolls.length >= 2).length
Bowling.prototype.addRoll = function addRoll({ frame = 1 + this.frames.filter(f => f.rolls.length >= 2).length, pinsDown }) {

  const framesArray = this.frames;
  const framesArrayIndex = frame - 1;
  const rollsArray = framesArray[framesArrayIndex].rolls;
  const rollTotal = rollsArray.reduce(sumArray, 0);
  const pinsRangeError = ((rollTotal + pinsDown) > TEN_PINS);

  let maxRolls = 2;

  if (frame > 10) {
    throw new RangeError(`Cannot have frame ${frame}. A bowling game is 10 frames.`);
  }

  if (frame === 10) {
    if (framesArray[9].isStrike()) { maxRolls = 3; }
    if (framesArray[9].isSpare()) { maxRolls = 3; }
  }

  if (pinsRangeError && frame < 10) {
    console.error(`Error: Cannot knock ${pinsDown} down if only ${TEN_PINS - rollTotal} remain.`);
  } else if (rollTotal === TEN_PINS && frame < 10) {
    console.error('Error: All pins already down in this frame.');
  } else if (rollsArray.length >= maxRolls) {
    console.error('Error: Out of rolls.');
  } else {
    rollsArray.push(pinsDown);
  }
};

Bowling.prototype.score = function score() {
  
};


const TEN_PINS = 10;

function sumArray(accumulator, currentValue) {
  return accumulator + currentValue;
}

function frameIsFull(frame, index) {
  return ((index === 9) && (frame.rolls.length < 3))
      || ((index !== 9) && (frame.isStrike() && (frame.isSpare())));
}

function Frame(frameNumber) {
  this.frameNumber = frameNumber;
  this.rolls = [];
}

Frame.prototype.isStrike = function isStrike() {
  return (this.rolls[0] === TEN_PINS);
};

Frame.prototype.isSpare = function isSpare() {
  return (this.rolls[0] + this.rolls[1] === TEN_PINS);
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


Bowling.prototype.fullFrames = function fullFrames() {
  return this.frames.filter(frameIsFull).length;
};

// Maybe frame parameter can have a default value:
// frame = this.frames.filter(f => f.rolls.length >= 2).length
Bowling.prototype.addRoll = function addRoll({ frame = this.fullFrames(), pinsDown }) {
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

  if ((frame < 10) && framesArray[frame].isStrike()) {
    // console.error(`IT WAS A STRIKE`);
  } else if ((frame < 10) && pinsRangeError) {
    // console.error(`Input Error: Cannot knock ${pinsDown} down if only ${TEN_PINS - rollTotal} remain.`);
  } else if (rollTotal === TEN_PINS && frame < 10) {
    // console.error('Error: All pins already down in this frame.');
  } else if ((rollsArray.length === maxRolls)) {
    // console.error('Error: Out of rolls.');
  } else {
    rollsArray.push(pinsDown);
  }
};

Bowling.prototype.score = function score() {
  
};


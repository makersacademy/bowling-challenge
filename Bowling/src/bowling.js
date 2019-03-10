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

  if (rollsArray.includes(10)) {
    console.error('Error: Previous roll was a strike! You probably mean to record a new Frame.');
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

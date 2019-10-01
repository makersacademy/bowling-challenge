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
  this.frameScore = 0;
  this.rolls = [];
}

Frame.prototype.isStrike = function isStrike() {
  return (this.rolls[0] === TEN_PINS);
};

Frame.prototype.isSpare = function isSpare() {
  return (this.rolls[0] + this.rolls[1] === TEN_PINS);
};

function Bowling() {
  this.score = 0;
  this.framesArray = new Array(10);
  this.populateFrames();
}

Bowling.prototype.populateFrames = function populateFrames() {
  for (let index = 0; index < this.framesArray.length; index++) {
    this.framesArray[index] = new Frame(index + 1);
  }
};


Bowling.prototype.countFullFrames = function countFullFrames() {
  return this.framesArray.filter(frameIsFull).length;
};

// Maybe frame parameter can have a default value:
// frame = this.framesArray.filter(f => f.rolls.length >= 2).length
Bowling.prototype.addRoll = function addRoll({ frame = this.countFullFrames(), pinsDown }) {
  if (frame > 10) {
    throw new RangeError(`Cannot have frame ${frame}. A bowling game is 10 frames.`);
  }

  let maxRolls = 2;
  if (frame === 10) {
    if (this.framesArray[9].isStrike()) { maxRolls = 3; }
    if (this.framesArray[9].isSpare()) { maxRolls = 3; }
  }

  const currentIndex = frame - 1;
  const rollsArray = this.framesArray[currentIndex].rolls;
  const rollTotal = rollsArray.reduce(sumArray, 0);
  const pinsDownValid = ((rollTotal + pinsDown) <= TEN_PINS);
  const rollsRemain = rollsArray.length < maxRolls;
  const notStrike = !this.framesArray[currentIndex].isStrike();

  if (frame < 10) {
    if (rollsRemain && pinsDownValid && notStrike) {
      rollsArray.push(pinsDown);
      this.scoreFrame(currentIndex, pinsDown);
    }
  } else if (rollsRemain) {
    rollsArray.push(pinsDown);
    this.scoreFrame(currentIndex, pinsDown);
  }
};

Bowling.prototype.scoreFrame = function scoreFrame(currentIndex, rollTotal) {
  const frameToScore = this.framesArray[currentIndex];

  let spareBonus = false;
  let firstStrikeBonus = false;
  let secondStrikeBonus = false;

  if (currentIndex >= 1) {
    firstStrikeBonus = this.framesArray[currentIndex - 1].isStrike();
    spareBonus = this.framesArray[currentIndex - 1].isSpare();
  }

  if (currentIndex >= 2) {
    secondStrikeBonus = this.framesArray[currentIndex - 2].isStrike();
  }

  if (currentIndex === 9) {
    if (firstStrikeBonus && (frameToScore.rolls.length === 1)) {
      this.framesArray[currentIndex - 1].frameScore += rollTotal;
      this.framesArray[currentIndex - 2].frameScore += rollTotal;
    }
    if (firstStrikeBonus && (frameToScore.rolls.length === 2)) {
      this.framesArray[currentIndex - 1].frameScore += rollTotal;
    }

    if (spareBonus && (frameToScore.rolls.length === 1)) {
      this.framesArray[currentIndex - 1].frameScore += rollTotal;
    }
  } else {
    if ((firstStrikeBonus) || (spareBonus)) {
      this.framesArray[currentIndex - 1].frameScore += rollTotal;
    }
    if (secondStrikeBonus) {
      this.framesArray[currentIndex - 2].frameScore += rollTotal;
    }
  }
  frameToScore.frameScore += rollTotal;
};

Bowling.prototype.totalScore = function totalScore() {
  this.score = 0;
  this.framesArray.forEach((frame) => {
    this.score += frame.frameScore;
  });

  return this.score;
};

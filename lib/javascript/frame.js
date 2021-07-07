function FrameError(message) {
  const error = new Error(message);
  this.name = 'FrameError';
  this.message = message;
  this.stack = error.stack;
}

FrameError.prototype = Object.create(Error.prototype);


function Frame(number, rollConstructor = Roll) {
  if (number < 1) throw new FrameError('Cannot have a frame number below 1');
  if (number > 10) throw new FrameError('Cannot have a frame number above 10');

  this.number = number;
  this.rolls = [];
  if (number === 10) this.maxRolls = 3;
  else this.maxRolls = 2;
  this.Roll = rollConstructor;
}

Frame.prototype.frameNumber = function frameNumber() {
  return this.number;
};

Frame.prototype.score = function score() {
  return this.rolls.reduce(((res, roll) => res + roll.score()), 0);
};

Frame.prototype.addRoll = function addRoll(score) {
  if (this.rolls.length === this.maxRolls) {
    throw new FrameError(`Cannot have more than ${this.maxRolls} rolls in frame ${this.number}`);
  }
  if (this.number < 10 && this.score() + score > 10) {
    throw new FrameError('Rolls in a frame cannot total more than 10');
  }

  let roll;

  if (this.number === 10) {
    roll = new this.Roll(score, 0);
  } else if (this.rolls.length === 0 && score === 10) {
    roll = new this.Roll(score, 2);
  } else if (this.rolls.length === 1 && score + this.score() === 10) {
    roll = new this.Roll(score, 1);
  } else {
    roll = new this.Roll(score, 0);
  }

  this.rolls.push(roll);
  return roll;
};

Frame.prototype.getNextFrame = function getNextFrame() {
  if (this.rolls.length === 3) return undefined;
  if (this.rolls.length === 2) {
    if (this.number === 10) {
      if (this.isStrike() || this.isSpare()) return this;
      return undefined;
    }
    return new Frame(this.number + 1, this.Roll);
  }
  if (this.rolls.length === 1 && this.score() === 10) {
    if (this.number === 10) return this;
    return new Frame(this.number + 1, this.Roll);
  }
  return this;
};

Frame.prototype.isStrike = function isStrike() {
  if (this.rolls.length > 0 && this.rolls[0].score() >= 10) return true;
  return false;
};

Frame.prototype.isSpare = function isSpare() {
  if (this.rolls.length > 1
    && this.rolls[0].score() < 10
    && this.score() >= 10) {
    return true;
  }
  return false;
};

if (typeof module !== 'undefined') {
  module.exports = { Frame, FrameError };
}

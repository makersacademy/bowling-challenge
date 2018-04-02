const STRIKE = 10,
  SPARE = 10,
  ALL_PINS = 10,
  MAX_ROLLS = 3,
  MAX_FRAMES = 10;
let roll1 = 0,
  roll2 = 1;


const Game = function () {
  this.completedFramesCount = 0;
  this.frames = [];
  this.roll;
  this.remainingPins;
  this.currentFrame;
};

Game.prototype = {

  addBonuses() {
    const [frames, l] = [this.frames, this.frames.length];
    const [lastButTwo, lastButOne, last] = [frames[l - 3], frames[l - 2], frames[l - 1]];
    lastButTwo && this.isStrike(lastButTwo) && !this.hasAllBonuses(lastButTwo) ?
      this.doubleStrikeBonus(last, lastButOne, lastButTwo) : this.singleStrikeBonus(last, lastButOne);
    this.spareBonus(last, lastButOne);
    return this.frames;
  },

  doubleStrikeBonus(last, lastButOne, lastButTwo) {
    lastButTwo.push(last[roll1]);
    last[roll2] ? lastButOne.push(last[roll1], last[roll2]) : lastButOne.push(last[roll1]);
  },

  singleStrikeBonus(last, lastButOne) {
    if (lastButOne && this.isStrike(lastButOne) && !this.hasAllBonuses(lastButOne)) {
      last[roll2] && last[roll2] !== STRIKE ?
        lastButOne.push(last[roll1], last[roll2]) : lastButOne.push(last[roll1]);
    }
  },

  spareBonus(last, lastButOne) {
    if (lastButOne && this.isSpare(lastButOne) && !this.hasAllBonuses(lastButOne)) {
      lastButOne.push(last[roll1]);
    }
  },

  sum(array) {
    return array = array.reduce((acc, curr) => acc + curr);
  },

  flatten(array) {
    return array = array.reduce((acc, curr) => acc.concat(curr), []);
  },

  flattenAndSum(array) {
    array = this.flatten(array);
    return this.sum(array);
  },

  addRollToFrame() {
    this.currentFrame = this.frames[this.completedFramesCount];
    if (!this.isFrameTen() && !this.currentFrame) {
      this.currentFrame = [this.roll];
      this.frames.push(this.currentFrame);
    } else if (!this.isFrameTen()) {
      this.currentFrame.push(this.roll);
    } else {
      this.currentFrame ?
        this.currentFrame.push(this.roll)
        : this.currentFrame = [this.roll];
    }
    return this.frames;
  },

  checkFrameComplete() {
    this.currentFrame = this.frames[this.completedFramesCount];
    if (this.currentFrame[roll1] === STRIKE
        || this.currentFrame.length === 2) {
      this.addBonuses();
      this.completedFramesCount += 1;
    }
  },

  checkFrameTenComplete() {
    this.addBonuses();
    this.currentFrame = this.frames[this.completedFramesCount];
    if (this.currentFrame.length === MAX_ROLLS
        || this.currentFrame[roll1] + this.currentFrame[roll2] < SPARE) {
      this.completedFramesCount += 1;
    }
  },

  checkFramesAndRemainingPins() {
    if (this.completedFramesCount < MAX_FRAMES - 1) {
      this.checkFrameComplete();
    } else {
      this.checkFrameTenComplete();
    }
    this.getRemainingPins(this.frames[this.completedFramesCount]);
  },

  isFrameTen() {
    return this.frames.length === MAX_FRAMES;
  },

  isStrike(frame) {
    return frame[roll1] === STRIKE;
  },

  isSpare(frame) {
    return frame[roll1] + frame[roll2] === SPARE;
  },

  isNeither(frame) {
    return frame[roll1] + frame[roll2] < SPARE;
  },

  hasAllBonuses(frame) {
    if (this.isNeither(frame)) {
      return true;
    }
    return frame.length === MAX_ROLLS;
  },

  getRemainingPins(frame) {
    this.remainingPins = frame && !frame[roll2] && frame[roll1] < STRIKE ?
      ALL_PINS - frame[roll1] : ALL_PINS;
  },
};

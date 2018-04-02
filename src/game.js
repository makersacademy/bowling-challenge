'use strict';

const STRIKE = 10,
      SPARE = 10,
      ALL_PINS = 10,
      MAX_ROLLS = 3,
      MAX_FRAMES = 10;
var   roll1 = 0,      roll2 = 1;


var Game = function() {
  this.completedFramesCount = 0;
  this.frames = [];
  this.roll;
  this.remainingPins;
};

Game.prototype = {

  addBonuses() {
    var [frames, l] = [this.frames, this.frames.length];
    console.log(frames);
    var [lastButTwo, lastButOne, last] = [frames[l - 3], frames[l - 2], frames[l -1]];
    // Check for double strike and check that you are not adding extra bonuses to frame 8
    lastButTwo && this.isStrike(lastButTwo) && !this.hasAllBonuses(lastButTwo) ?
    this.doubleStrikeCheck(last, lastButOne, lastButTwo) :
    // Otherwise check for a single strike
    this.singleStrikeCheck(last, lastButOne);
    // then check for a spare
    this.spareCheck(last, lastButOne);

    return this.frames;
  },

  // Name everything in plain English, then refactor
  // aim for something like frame.addBonuses(firstRoll, secondRoll)
  // "Hey frame here are the rolls, add your bonuses if required"

  doubleStrikeCheck(last, lastButOne, lastButTwo) {
      // add roll one of the current frame to the last but two
      lastButTwo.push(last[roll1]);
      // then add the last frame to the last but one
      last[roll2] ?  lastButOne.push(last[roll1], last[roll2]) : lastButOne.push(last[roll1]);
  },

  singleStrikeCheck(last, lastButOne) {
    // for a single stike check that you are not adding extra bonuses to frame 9
    if (lastButOne && this.isStrike(lastButOne) && !this.hasAllBonuses(lastButOne)) {
      // then check you aren't adding 20 to frame 9 and add the bonus
      last[roll2] && last[roll2] !== STRIKE ? lastButOne.push(last[roll1], last[roll2]) : lastButOne.push(last[roll1]);
    }
  },

  spareCheck(last, lastButOne) {
      // for a spare check that you are not adding extra bonuses to frame 9
      if (lastButOne && this.isSpare(lastButOne) && !this.hasAllBonuses(lastButOne)) {
      // then add the first roll of the last frame to the last but one
      lastButOne.push(last[roll1]);
    }
  },

  sum(array) {
    return array = array.reduce(function (acc, curr) {
      return acc + curr;
    });
  },

  flatten(array) {
    return array = array.reduce(function(acc, curr) {
      return acc.concat(curr);
    }, []);
  },

  flattenAndSum(array) {
    array = this.flatten(array);
    return this.sum(array);
  },

  addRollToFrame() {
    if (this.frames.length < MAX_FRAMES && !this.frames[this.completedFramesCount]) {
      this.frames[this.completedFramesCount] = [this.roll];
    } else if (this.frames.length < MAX_FRAMES) {
      this.frames[this.completedFramesCount].push(this.roll);
    } else {
      this.frames[this.completedFramesCount] ?
        this.frames[this.completedFramesCount].push(this.roll)
        : this.frames[this.completedFramesCount] = [this.roll];
    }
    return this.frames;
  },

  checkFrameComplete() {
    if (this.frames[this.completedFramesCount][roll1] === STRIKE
        || this.frames[this.completedFramesCount].length === 2) {
      this.addBonuses();
      this.completedFramesCount ++;
    }
  },

  checkFrameTenComplete() {
    this.addBonuses();
    if (this.frames[this.completedFramesCount].length === MAX_ROLLS
      || this.frames[this.completedFramesCount][roll1]
      + this.frames[this.completedFramesCount][roll2] < SPARE) {
    this.completedFramesCount ++;
    }
    // return this.completedFramesCount;
  },

  checkFramesAndRemainingPins() {
    if (this.completedFramesCount < MAX_FRAMES - 1) {
      this.checkFrameComplete();
    } else {
      this.checkFrameTenComplete();
    }
    this.getRemainingPins(this.frames[this.completedFramesCount]);
  },

  isStrike(frame) {
    return frame[roll1] === STRIKE ? true : false;
  },

  isSpare(frame) {
    return frame[roll1] + frame[roll2] === SPARE ? true : false;
  },

  isNeither(frame) {
    return frame[roll1] + frame[roll2] < SPARE ? true : false;
  },

  hasAllBonuses(frame) {
    if (this.isNeither(frame)) {
      return true;
    } else {
      return frame.length === MAX_ROLLS;
    }
  },

  getRemainingPins(frame) {
    this.remainingPins = frame && !frame[roll2] && frame[roll1] < STRIKE ?
      ALL_PINS - frame[roll1] : ALL_PINS;
  }
}

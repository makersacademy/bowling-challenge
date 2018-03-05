'use strict';

const STRIKE = 10,    SPARE = 10,   ALL_PINS = 10,    MAX_ROLLS = 3,
      MAX_FRAMES = 10;
var   roll1 = 0,      roll2 = 1;


var Game = function() {
  this.frameCount = 0;
  this.frames = [];
  this.roll;
  this.remainingPins;
};

Game.prototype = {

  addBonuses() {
    var [frames, l] = [this.frames, this.frames.length];
    var [antepenult, penult, ult] = [frames[l - 3], frames[l - 2], frames[l -1]];
    if (l > 2 && this.isStrike(antepenult) && !this.hasBonus(antepenult)) {
      antepenult.push(ult[roll1]);
      ult[roll2] ? penult.push(ult[roll1], ult[roll2]) : penult.push(ult[roll1]);
    } else if (l > 1 && this.isStrike(penult) && !this.hasBonus(penult)) {
      ult[roll2] && ult[roll2] !== 10 ?
      penult.push(ult[roll1], ult[roll2]) : penult.push(ult[roll1]);
    } else if (l > 1 && this.isSpare(penult) && !this.hasBonus(penult)) {
      penult.push(ult[roll1]);
    }
    return this.frames;
  },

  flattenAndSum(array) {
    array = array.reduce(function(acc, curr) {
      return acc.concat(curr);
    }, []);

    return array = array.reduce(function (acc, curr) {
      return acc + curr;
    });
  },

  addRollToFrame() {
    if (this.frames.length < MAX_FRAMES && !this.frames[this.frameCount]) {
      this.frames[this.frameCount] = [this.roll];
    } else if (this.frames.length < MAX_FRAMES) {
      this.frames[this.frameCount].push(this.roll);
    } else {
      this.frames[this.frameCount] ?
        this.frames[this.frameCount].push(this.roll)
        : this.frames[this.frameCount] = [this.roll];
    }
    return this.frames;
  },

  checkFrameComplete() {
    if (this.frames[this.frameCount][roll1] === STRIKE
        || this.frames[this.frameCount].length === 2) {
      this.addBonuses();
      this.frameCount ++;
    }
  },

  checkFrameTenComplete() {
    this.addBonuses();
    if (this.frames[this.frameCount].length === MAX_ROLLS
      || this.frames[this.frameCount][roll1]
      + this.frames[this.frameCount][roll2] < SPARE) {
    this.frameCount ++;
    }
    return this.frameCount;
  },

  checkFramesAndRemainingPins() {
    if (this.frameCount < MAX_FRAMES - 1) {
      this.checkFrameComplete();
    } else {
      this.checkFrameTenComplete();
    }
    this.getRemainingPins(this.frames[this.frameCount]);
  },

  isStrike(frame) {
    return frame[roll1] === STRIKE ? true : false;
  },

  isSpare(frame) {
    return frame[roll1] + frame[roll2] === SPARE ? true : false;
  },

  hasBonus(frame) {
    return frame.length === MAX_ROLLS;
  },

  getRemainingPins(frame) {
    this.remainingPins = frame && !frame[roll2] && frame[roll1] < STRIKE ?
      ALL_PINS - frame[roll1] : ALL_PINS;
  }
}

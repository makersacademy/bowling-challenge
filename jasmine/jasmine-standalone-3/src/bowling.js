'use strict';

function Bowling() {
  this.rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  this.counter = 0;
  this.ballCount = 1;
  this.frameCount = 1;
};

Bowling.prototype.roll = function (pins) {

  if (pins == 10) { // this skips ball 2 if ball 1 = Strike
    this.rolls[this.counter] = pins;
    this.counter += 2;
  } else {
    this.rolls[this.counter] = pins;
    this.counter += 1;
  }

  if (this.ballCount === 2 || pins === 10) { // ball 1-2 counter
    this.frameCount += 1;
    this.ballCount = 1;
    console.log('ball ' + this.ballCount);
  } else {
    this.ballCount++;
    console.log('ball ' + this.ballCount);
  }

  console.log(this.rolls);
  // console.log('frame ' + this.frameCount);
};

Bowling.prototype.score = function () {
  var matchResult = 0;
  var rollsIndex = 0;
  for (var frame = 0; frame < 10; frame++) {
    if (this.rolls[rollsIndex] === 10 && this.rolls[rollsIndex + 2] === 10) {
      matchResult += this.rolls[rollsIndex] + this.rolls[rollsIndex + 2] + this.rolls[rollsIndex + 4];
      rollsIndex += 2; // SUCCESSIVE STRIKES!!
    } else if (this.rolls[rollsIndex] === 10) {
      matchResult += this.rolls[rollsIndex] + this.rolls[rollsIndex + 2] + this.rolls[rollsIndex + 3];
      rollsIndex++; // STRIKE!
    } else if (this.rolls[rollsIndex] + this.rolls[rollsIndex + 1] == 10) {
      matchResult += this.rolls[rollsIndex] + this.rolls[rollsIndex + 1] + this.rolls[rollsIndex + 2];
      rollsIndex += 2; // SPARE!
    } else {
      matchResult += this.rolls[rollsIndex] + this.rolls[rollsIndex + 1];
      rollsIndex += 2; // NORMAL SCORE
    }
  }
  return matchResult;
};

Bowling.prototype.scorecard = function () {
  return this.rolls;
};

Bowling.prototype.ball = function () {
  return this.ballCount;
};

Bowling.prototype.frame = function () {
  return this.frameCount;
};

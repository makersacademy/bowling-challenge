'use strict';

function Bowling() {
  this.rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  this.counter = 0; // counts along the rollIndex array
  this.ballCount = 1; // ball 1-2
  this.frameCount = 1; // frames 1-10
  this.strikeFlag = false;
};

Bowling.prototype.roll = function (pins) {
  this.strikeFlag = false;

    if (this.frameCount === 10 && this.ballCount === 1 && pins === 10) { // ball 1 strike in 10th frame
      this.rolls[this.counter] = pins;
      this.rolls.push(0);
      this.counter += 1;
      this.strikeFlag = true;
      this.ballCount = 2;

    } else if (this.frameCount === 10 && this.ballCount === 1 && pins === 10) { // ball 2 strike in 10th frame
      this.rolls[this.counter] = pins;
      this.counter += 1;
      this.strikeFlag = true;
      this.ballCount = 3;

    } else if (pins === 10 && this.ballCount === 2) { // ball 2 strike
      this.rolls[this.counter] = pins;
      this.counter += 1;
      this.strikeFlag = true;
      this.ballCount = 1;
      this.frameCount += 1;
      console.log(this.strikeFlag);
    } else if (pins === 10 && this.ballCount === 1) { // ball 1 strike
      this.rolls[this.counter] = pins;
      this.counter += 2;
      this.strikeFlag = true;
      this.ballCount = 1;
      this.frameCount += 1;
      console.log(this.strikeFlag);
    // } else if (this.ballCount === 2 && this.rolls[this.counter] + this.rolls[this.counter - 1] > 10) { // total over 10
    } else if (this.ballCount === 2) { // ball 2 normal score
      this.rolls[this.counter] = pins;
      this.counter += 1;
      this.strikeFlag = false;
      this.ballCount = 1;
      this.frameCount += 1;
      console.log(this.strikeFlag);
    } else {
      this.rolls[this.counter] = pins; // ball 1 normal score
      this.counter += 1;
      this.strikeFlag = false;
      this.ballCount = 2;
      console.log(this.strikeFlag);
    }

};

Bowling.prototype.score = function () {
  var matchResult = 0;
  var rollsIndex = 0;
  for (var frame = 0; frame < 10; frame++) {
    if (this.rolls[rollsIndex] === 10 && this.rolls[rollsIndex + 2] === 10) {
      matchResult += this.rolls[rollsIndex] + this.rolls[rollsIndex + 2] + this.rolls[rollsIndex + 4];
      rollsIndex += 2; // consecutive STRIKES!
    } else if (this.rolls[rollsIndex] === 0 && this.rolls[rollsIndex + 1] === 10) {
      matchResult += this.rolls[rollsIndex] + this.rolls[rollsIndex + 1] + this.rolls[rollsIndex + 2] + this.rolls[rollsIndex + 3];
      rollsIndex += 2; // 2nd ball of frame is a STRIKE followed by 1st ball STRIKE of next frame.
    } else if (this.rolls[rollsIndex] === 10) {
      matchResult += this.rolls[rollsIndex] + this.rolls[rollsIndex + 2] + this.rolls[rollsIndex + 3];
      rollsIndex += 2; // STRIKE! on first ball of frame
    } else if (this.rolls[rollsIndex] + this.rolls[rollsIndex + 1] === 10) {
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
  console.log(this.counter);
  return this.rolls;
};

Bowling.prototype.ball = function () {
  return this.ballCount;
};

Bowling.prototype.frame = function () {
  return this.frameCount;
};

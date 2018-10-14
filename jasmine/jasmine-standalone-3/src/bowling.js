'use strict';

function Bowling() {
  this.rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  this.counter = 0; // counts along the rollIndex array
  this.ballCount = 1; // ball 1-2 (& 3)
  this.frameCount = 1; // frames 1-10
  this.pinStore = 0; // used for the calc of spares
};

Bowling.prototype.roll = function (pins) {

    if (this.frameCount === 10 && this.ballCount === 1 && pins === 10) { // ball 1 only strike in 10th frame
      this.rolls[this.counter] = pins;
      this.rolls.push(parseInt(0));
      this.counter += 1;
      this.ballCount = 2;
      console.log("pushing extra zero onto array");
    } else if (this.frameCount === 10 && this.ballCount === 1) { // ball 1 pins variable pinStore in 10th frame (for spare calc)
      this.rolls[this.counter] = pins;
      this.pinStore = pins; // stored here
      this.counter += 1;
      this.ballCount = 2;
    } else if (this.frameCount === 10 && this.ballCount === 2 && pins === 10) { // ball 2 only strike in 10th frame
      this.rolls[this.counter] = pins;
      this.rolls[this.counter - 1] === 0? this.rolls.push(parseInt(0)): console.log("Frame 10 1st AND 2nd ball strike");
      this.counter += 1;
      this.ballCount = 3;
      console.log("we are ticking the balls to 3");
    } else if (this.frameCount === 10 && this.ballCount === 2 && pins < 10) {
      this.rolls[this.counter] = pins;
      this.counter += 1;
      this.ballCount = 3; // frame 10 normal ball 2 (after ball 1 strike)
    } else if (pins + this.pinStore === 10 && this.frameCount === 10 && this.ballCount === 2) { // ball 1+2 SPARE in 10th frame
      console.log("WE ARE HERE");
      this.rolls[this.counter] = pins;
      this.rolls.push(parseInt(0));
      this.counter += 1;
      this.ballCount = 3;
    } else if (pins === 10 && this.ballCount === 2) { // ball 2 strike
      this.rolls[this.counter] = pins;
      this.counter += 1;
      this.ballCount = 1;
      this.frameCount += 1;
    } else if (pins === 10 && this.ballCount === 1) { // ball 1 strike
      this.rolls[this.counter] = pins;
      this.counter += 2;
      this.ballCount = 1;
      this.frameCount += 1;
    // } else if (this.ballCount === 2 && this.rolls[this.counter] + this.rolls[this.counter - 1] > 10) { // total over 10
    } else if (this.ballCount === 2) { // ball 2 normal score
      this.rolls[this.counter] = pins;
      this.counter += 1;
      this.ballCount = 1;
      this.frameCount += 1;
    } else {
      this.rolls[this.counter] = pins; // ball 1 normal score
      this.counter += 1;
      this.ballCount = 2;
    }
console.log(this.rolls);
console.log("pin store = " + this.pinStore);
};

Bowling.prototype.score = function () {
  var matchResult = 0;
  var rollsIndex = 0;
  for (var frame = 0; frame < 10; frame++) {
    if (frame < 9 && this.rolls[rollsIndex] === 10 && this.rolls[rollsIndex + 2] === 10) {
      matchResult += this.rolls[rollsIndex] + this.rolls[rollsIndex + 2] + this.rolls[rollsIndex + 4];
      rollsIndex += 2; // consecutive STRIKES!
    } else if (this.rolls[rollsIndex] === 0 && this.rolls[rollsIndex + 1] === 10) {
      matchResult += this.rolls[rollsIndex] + this.rolls[rollsIndex + 1] + this.rolls[rollsIndex + 2] + this.rolls[rollsIndex + 3];
      rollsIndex += 2; // 2nd ball of frame is a STRIKE followed by 1st ball STRIKE of next frame.
    } else if ((frame === 9 && this.rolls[rollsIndex] + this.rolls[rollsIndex + 1] === 10) || (frame === 9 && this.rolls[rollsIndex] === 10) || (frame === 9 && this.rolls[rollsIndex + 1] === 10) || (frame === 9 && this.rolls[rollsIndex + 2] === 10)) {
    matchResult += this.rolls[rollsIndex] + this.rolls[rollsIndex + 1] + this.rolls[rollsIndex + 2];
      // 10th frame 1st/2nd and/or 3rd ball STRIKE or SPARE plus extra ball.
    } else if (this.rolls[rollsIndex] === 10) {
      matchResult += this.rolls[rollsIndex] + this.rolls[rollsIndex + 2] + this.rolls[rollsIndex + 3];
      rollsIndex += 2; // STRIKE! on 1st ball of frame
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

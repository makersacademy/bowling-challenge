'use script';

function Bowling() {
  this.score = 0;
  this.frame = 1;
  this.roll = 1;
  this.frameScore = 0;
  this.pinsStanding = 10;
}

Bowling.prototype.getCurrentScore = function () {
  return this.score;
};

Bowling.prototype.getCurrentFrame = function () {
  return this.frame;
};

Bowling.prototype.getCurrentRoll = function () {
  return this.roll;
};

Bowling.prototype.getPinsStanding = function () {
  return this.pinsStanding;
};

Bowling.prototype.add = function (number) {
  this.score += number;
};

Bowling.prototype.bowl = function (pins) {
  if(pins > this.pinsStanding){
    throw new TypeError("Invalid number of pins knocked over")
  }
  this.pinsStanding -= pins;
  this.frameScore += pins;
  this.isFrameComplete();
};

Bowling.prototype.getFrameScore = function () {
  return this.frameScore;
};

Bowling.prototype.isFrameComplete = function () {
  if(this.roll === 1){
    this.roll += 1;
    return false;
  }
  else {
    this.resetFrame();
    return true;
  }
};

Bowling.prototype.resetFrame = function () {
  this.score += this.frameScore;
  this.roll = 1;
  return this.frame += 1;
};

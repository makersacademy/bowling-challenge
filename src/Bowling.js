function Bowling() {
  this.frameNumber = 1;
  this.startPins = 10;
  this.score = 0;
  this.totalPinsDown = 0;
}

Bowling.prototype.pinsKnocked = function(pins) {
  range = pins + 1;
  return Math.floor(Math.random() * range);
};

Bowling.prototype.ballOne = function() {
  var pinsDown = this.pinsKnocked(this.startPins);
  console.log(pinsDown);
  if (pinsDown === 10){
    this.pinsLeft = 0;
  } else {
    this.pinsLeft = this.startPins - pinsDown;
  };
  console.log(this.pinsLeft);
  return this.pinsLeft;
};

Bowling.prototype.ballTwo = function() {
  var pinsDown = this.pinsKnocked(this.pinsLeft);
  this.totalPinsDown = this.pinsLeft + pinsDown;
  if (this.totalPinsDown === 10){
     this.pinsLeft = 0;
  } else {
    this.pinsLeft = this.startPins - this.totalPinsDown;
  };
  console.log(his.pinsLeft);
  return this.pinsLeft;
};

Bowling.prototype.gameFrame = function() {
  if (this.ballOne() === 0){
    this.message = "Strike, frame is over";
  } else {
    if (this.ballTwo() === 0){
      this.message = "Spare, frame is over";
    } else {
      this.message = "Open Frame, frame is over";
    };
  };
  console.log(this.message);
  return this.message;
};

Bowling.prototype.frameScore = function() {
  if (this.message === "Strike, frame is over") {
    this.score = 10;
  } else if (this.message === "Spare, frame is over") {
    this.score = 10;
  } else {
    this.score = this.totalPinsDown;
  };
  return this.score;
};


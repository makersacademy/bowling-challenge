function Bowling() {
  this.frameNumber = 1;
  this.startPins = 10;
}

Bowling.prototype.gameFrame = function() {
  if (this.ballOne() === 0){
    this.message = "Strike, frame is over";
  } else if (this.ballTwo() === 0){
    this.message = "Spare, frame is over";
  } else {
    this.message ="Frame continues";
  };
  return this.message;
};

Bowling.prototype.ballOne = function() {
  var pinsDown = this.pinsKnocked(this.startPins);
  if (pinsDown === 10){
  this.pinsLeft = 0;
  } else{
    this.pinsLeft = this.startPins - pinsDown;
  };
  return this.pinsLeft;
};

Bowling.prototype.ballTwo = function() {
  var pinsDown = this.pinsKnocked(this.pinsLeft);
  var totalPinsDown = this.pinsLeft + pinsDown;
  console.log(totalPinsDown);
  if (totalPinsDown === 10){
     this.pinsLeft = 0;
  };
  return this.pinsLeft;
  // this.ballTwo();
};

Bowling.prototype.frameScore = function() {
  if (this.message === "Strike, frame is over") {
    return 10;
  };
};

Bowling.prototype.pinsKnocked = function(pins) {
  range = pins + 1;
  return Math.floor(Math.random() * range);
};

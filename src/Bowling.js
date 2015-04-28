function Bowling() {
  this.frameNumbers = 1;
  this.startPins = 10;
  this.score = 0;
  this.pinsLeft = 10;
}

Bowling.prototype.pinsKnocked = function(pins) {
  var range = pins + 1;
  return Math.floor(Math.random() * range);
};

Bowling.prototype.ballOne = function() {
  var pinsDown = this.pinsKnocked(this.startPins);
  return this.pinsLeft = this.startPins - pinsDown;
};

Bowling.prototype.ballTwo = function() {
  var pinsDown = this.pinsKnocked(this.pinsLeft);
  return this.pinsLeft = this.pinsLeft - pinsDown;
};

Bowling.prototype.firstPart = function(){
  if (this.ballOne() === 0) {
    this.result = "Strike, frame is over";
  } else {
    this.result = "Frame continues, go for next ball";
  };
  return this.result;
};

Bowling.prototype.secondPart = function(){
  if (this.firstPart === "Frame continues, go for next ball") {
    this.ballTwo();
  };
};

Bowling.prototype.thirdPart = function() {
  if (this.secondPart() === 0){
    this.message = "Spare, frame is over";
  } else {
    this.message = "Open Frame, frame is over";
  };
  return this.message;
};

Bowling.prototype.frameScore = function() {
  if (this.firstPart() === "Strike, frame is over") {
    return this.score = 10;
  } else {
    if (this.thirdPart() === "Spare, frame is over") {
      this.score = 10;
    } else {
      this.score = this.startPins - this.secondPart();
    };
  };
  return this.score;
};

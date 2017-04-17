function Frame() {
  this.startingPins = 10;
  this.standingPins = 10;
  this.rollNumber = 0;
  this.bothRolls = [];
};

Frame.prototype.bowl = function(pins) {
  if(this.isOver()) {
    return "This frame is over"
  };
  this.rollNumber += 1
  this.standingPins -= pins
  this.bothRolls.push(pins)
};

Frame.prototype.isOver = function() {
  return (this.rollNumber === 2 || this.standingPins === 0);
};

Frame.prototype.frameStrike = function() {
  return (this.rollNumber === 1 && this.standingPins === 0);
};

Frame.prototype.frameSpare = function() {
  return (this.rollNumber === 2 && this.standingPins === 0);
};

Frame.prototype.totalFrameScore = function() {
  return (this.startingPins - this.standingPins);
};
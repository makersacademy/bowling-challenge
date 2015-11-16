// NOW REDUNDANT

function Frame(frameNum) {
  this.tally = 0;
  this.turnNum = 1;
  this.frameNum = frameNum;
}

Frame.prototype.bowl = function(pinChance) {
  this.tally += pinChance;
  this.turnNum += 1;
};

Frame.prototype.isStrike = function() {
  return this.tally >= 10 && this.turnNum === 2;
};

Frame.prototype.isSpare = function() {
  return this.tally >= 10 && this.turnNum === 3;
};

Frame.prototype.isOpen = function() {
  return this.tally < 10 && this.turnNum === 3
};

Frame.prototype.isFinished = function() {
  return this.isStrike() || this.isSpare() || this.isOpen();
};

Frame.prototype.getTally = function() {
  return this.tally;
};


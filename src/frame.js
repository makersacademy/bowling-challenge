function Frame() {
  this.bowls = [];
  this.frameScore;
};

Frame.prototype.bowl = function(firstBowl, secondBowl) {
  this.bowls = [firstBowl, secondBowl];
  this.calcFrameScore();
};

Frame.prototype.isAStrike = function() {
  return this.bowls[0] === 10;
};

Frame.prototype.isASpare = function() {
  return this.bowls[0] + this.bowls[1] == 10 && !(this.isAStrike());
};

Frame.prototype.isAGutterBall = function() {
  return this.bowls[0] == 0 && this.bowls[1] == 0;
};

Frame.prototype.calcFrameScore = function(){
  this.frameScore = this.bowls[0] + this.bowls[1];
  return this.frameScore;
}

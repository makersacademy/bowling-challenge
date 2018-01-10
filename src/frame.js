function Frame(isLastFrame = false) {
  this.bowls = [];
  this.bonusBowl
  this.frameScore;
  this.isLastFrame = isLastFrame  ;
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

Frame.prototype.calcFrameScore = function(){
  if (!this.isASpare() && !this.isAStrike()){
    this.frameScore = this.bowls[0] + this.bowls[1];
    return this.frameScore;
  } else if (this.isLastFrame && (this.isAStrike() || this.isASpare())){
    this.frameScore = 10 + this.bowls[2];
  } else if (this.isAStrike()) {
    return this.frameScore = "Strike";
  } else if (this.isASpare()) {
    return this.frameScore = "Spare";
  }
};

// don't really require this
Frame.prototype.isAGutterBall = function() {
  return this.bowls[0] == 0 && this.bowls[1] == 0;
  console.log("Gutter Ball")
};

Frame.prototype.bonusBowlChecker = function() {
  return (this.isLastFrame && (this.isAStrike() || this.isASpare()));
};

Frame.prototype.bowlBonusBowl = function (bonusBowl) {
  this.bowls.push(bonusBowl)
};

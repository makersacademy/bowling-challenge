function Game(frameConstructor) {
  this.frameArrayGenerator(frameConstructor);
  this.frameIndex = 0;
};

Game.prototype.frameArrayGenerator = function(frameConstructor) {
  this.frameArray = [];
  for (var i = 0; i < 10; i++) {
    this.frameArray[i] = new frameConstructor;
  };
};

Game.prototype.bowl = function() {
  var returnVal;
  if (this.currentFrame().rollsTaken === 0) {
    returnVal = this.currentFrame().firstRoll();
    if (this.frameIndex > 0) {
      this.frameArray[this.frameIndex-1].spareUpdate(this.currentFrame().firstRollScore);
    };

    if (returnVal === "Strike!") {
      this.frameIndex++;
    };

    if (this.frameIndex > 1 && this.frameArray[this.frameIndex-1].isStrike && this.frameArray[this.frameIndex-2].isStrike) {
      this.frameArray[this.frameIndex-2].strikeUpdate(this.currentFrame().firstRollScore + 10);
    };

  } else {
    returnVal = this.currentFrame().secondRoll();
    if (this.frameIndex > 0) {
      this.frameArray[this.frameIndex-1].strikeUpdate(this.currentFrame().totalScore);
    };
    this.frameIndex++;
  };

return returnVal
};

Game.prototype.currentFrame = function() {
  var i = this.frameIndex;
  return this.frameArray[i];
};
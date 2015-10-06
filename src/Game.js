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

  } else {
    returnVal = this.currentFrame().secondRoll();
    this.frameIndex++;
  };

return returnVal
};

Game.prototype.currentFrame = function() {
  var i = this.frameIndex;
  return this.frameArray[i];
};
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
  if (this.currentFrame().rollsTaken === 0) {
    this.currentFrame().firstRoll();
  } else {
    this.currentFrame().secondRoll();
    this.frameIndex++;
  };

};

Game.prototype.currentFrame = function() {
  var i = this.frameIndex;
  return this.frameArray[i];
};
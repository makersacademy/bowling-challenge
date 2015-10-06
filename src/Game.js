function Game(frameConstructor) {
  this.frameGenerator(frameConstructor);
};

Game.prototype.frameGenerator = function(frameConstructor) {
  this.frameArray = [];
  for (var i = 0; i < 10; i++) {
    this.frameArray[i] = new frameConstructor;
  };
};

Game.prototype.bowl = function() {
  this.frameArray[0].firstRoll();
};
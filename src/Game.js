function Game() {
  this.playername;
  this.score = 0;
  this.MAX_FRAMES = 10
  this.frameCount = 0
};

Game.prototype.addPlayer = function(name) {
  this.playername = name
};

Game.prototype.addScore = function(number) {
  this.score += number
  this.frameCount += 1
};





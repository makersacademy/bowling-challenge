function Game() {
  this.frames = {};
  this.frames[1] = [0,0]
  this.frames[2] = [0,0]
  this.frames[3] = [0,0]
  this.frames[4] = [0,0]
  this.frames[5] = [0,0]
  this.frames[6] = [0,0]
  this.frames[7] = [0,0]
  this.frames[8] = [0,0]
  this.frames[9] = [0,0]
  this.frames[10] = [0,0,0]
  this.totalScore = 0
  this.frame = 1
};

Game.prototype.updateScore = function(player){
  this.frames[this.frame][player.turn()] = (player.downedPins())
};

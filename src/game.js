function Game() {
  this.frame = {};
  this.frame[1] = [0,0]
  this.frame[2] = [0,0]
  this.frame[3] = [0,0]
  this.frame[4] = [0,0]
  this.frame[5] = [0,0]
  this.frame[6] = [0,0]
  this.frame[7] = [0,0]
  this.frame[8] = [0,0]
  this.frame[9] = [0,0]
  this.frame[10] = [0,0,0]
  this.totalScore = 0
};

Game.prototype.updateScore = function(player){
  this.totalScore += (player.downedPins())
};

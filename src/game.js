function Game(){
  this.frame = 1;
  this.pins = 10;
  this.roll = 1;
  this.scores = {1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[], 10:[]};
};

Game.prototype.moveFrame = function(){
  this.roll = 1;
  if (this.frame === 10) {
    return 'Game Over'
  }
  else {
    this.frame += 1;
  }
};

Game.prototype.moveRoll = function(){
  this.roll += 1
  if (this.roll === 3) {
    this.moveFrame();
  }
};

Game.prototype.scoreRoll = function(score){
  this.scores[this.frame].push(score);
  this.moveRoll();
};

Game.prototype.currentScore = function(frame){
  var total = 0;
  for (var i=0; i<this.scores[frame].length; i++) {
    total += this.scores[frame][i];
  };
  return total;
};

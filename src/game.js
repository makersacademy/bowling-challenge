function Game(){
  this.frame = 1;
  this.pins = 10;
  this.roll = 1;
};

Game.prototype.moveFrame = function(){
  this.frame += 1;
  this.roll = 1;
};

Game.prototype.moveRoll = function(){
  this.roll += 1
  if (this.roll === 3) {
    this.moveFrame();
  }
};

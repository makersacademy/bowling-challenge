function Game() {
  this.score = 0;
  this.frameOver = false;
  this.rolls = {1:[], 2:[], 3:[], 4:[], 5:[],
                6:[], 7:[], 8:[], 9:[],10:[]};
  this.currentFrame = 1;
};

Game.prototype.roll = function(pins) {
  this.rolls[this.currentFrame].push(pins);
  if (pins === 10 || this.frameOver === true) {this.currentFrame++; this.frameOver = !this.frameOver}
  else this.frameOver = !this.frameOver;
};
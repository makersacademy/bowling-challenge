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
  if (this.roll >= 3){
    this.moveFrame();
  }
};

Game.prototype.scoreRoll = function(score){
  this.scores[this.frame].push(score);
  if (this.frame === 10) {
    this.tenthFrameStrike();
  }
  else if (score === 10 || this.scores[this.frame].length === 2) {
    this.pins = 10;
    this.moveFrame();
  }
  else {
    this.moveRoll();
    return this.pins = this.pins - score;
  }
};

Game.prototype.tenthFrameStrike = function(){
  if (this.score === 10) {
    this.pins = 10;
    this.moveRoll();
  }
  else if (this.frameScore(10) > 9 && this.roll === 2) {
    this.roll += 1;
  }
  else {
    this.moveRoll();
  }
};

Game.prototype.strikeBonus = function(){
  return this.scores[this.frame - 2].push(this.frameScore(this.frame - 1))
};

Game.prototype.spareBonus = function(){
  return this.scores[this.frame - 1].push(this.frameScore(this.frame))
};


Game.prototype.frameScore = function(frame){
  var total = 0;
  for (var i=0; i<this.scores[frame].length; i++) {
    total += this.scores[frame][i];
  };
  return total;
};

Game.prototype.totalScore = function(){
  var total = 0;
  var i=1;
  do {
    total += this.frameScore(i);
    i++;
  }
  while (i < 10);
  return total;
};

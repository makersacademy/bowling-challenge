function Game() {
  this.score = 0;
  this.pins = 10;
  this.scorecard = [[],[],[],[],[],[],[],[],[],[],[],[]];
  this.frame = 1;
  this.roll = 1;
}

Game.prototype.bowl = function() {
  hit = Math.floor(Math.random() * (this.pins + 1));
  this.score += hit;
  this.pins -= hit;
  this.checkLast();

  if (this.pins == 0) {
    if (hit == 10) {
      this.strike();
    }
    else {
      this.spare();
    }
    this.frameReset();
  }
  else {
    this.recordScore();
  }
  return hit;
};

Game.prototype.strike = function() {
  this.scorecard[this.frame - 1][0] = 'X';
};

Game.prototype.spare = function() {
  this.scorecard[this.frame - 1][1] = '/';
};

Game.prototype.recordScore = function() {
  
  if (this.roll == 2) {
  	this.scorecard[this.frame - 1][1] = hit;
  	this.frameReset();
  }
  else {
  	if ((this.frame > 1) && (this.scorecard[this.frame - 2][1] == '/')) {
      this.scorecard[this.frame - 1][0] = 2 * hit;
      this.score += hit;
  	}
  	else {
  	  this.scorecard[this.frame - 1][0] = hit;
  	}
    this.roll = 2;
  }
};

Game.prototype.checkLast = function() {
  if ((this.frame > 1) && (this.frame < 12) && (this.scorecard[this.frame - 2][0] == 'X')) {
    this.score += hit;
  }
  if ((this.frame > 2) && (this.frame < 11) && (this.scorecard[this.frame - 3][0] == 'X')) {
    this.score += hit;
  }
};

Game.prototype.frameReset = function() {
  this.frame += 1;
  this.pins = 10;
  this.roll = 1;
};
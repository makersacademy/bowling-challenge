function Game() {
  this.score = 0;
  this.pins = 10;
  this.scorecard = [[],[],[],[],[],[],[],[],[],[],[],[],[]];
  this.frame = 1;
  this.roll = 1;
  this.playing = true;
}

Game.prototype.bowl = function() {
  if (this.playing) {
    var hit = Math.floor(Math.random() * (this.pins + 1));
    this.score = hit + this.score;
    this.pins -= hit;
    this.checkLastStrike();
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
      this.checkRound();
    }
  }
};

Game.prototype.strike = function() {
  this.scorecard[this.frame - 1][0] = 'X';
  if (this.frame == 12) {
    this.playing = false;
  }
};

Game.prototype.spare = function() {
  this.scorecard[this.frame - 1][1] = '/';
  if (this.frame == 11) {
    this.playing = false;
  }
};

Game.prototype.checkRound = function() {
  
  if (this.roll == 2) {
    this.scorecard[this.frame - 1][1] = hit;
    this.frameReset();
    if (this.frame == 11) {
      this.playing = false;
    }
  }
  else {
    this.checkLastSpare();
    this.roll = 2;
    if (this.frame == 11) {
      this.playing = false;
    }
  }
};

Game.prototype.checkLastStrike = function() {
  if ((this.frame > 1) && (this.frame < 12) && (this.scorecard[this.frame - 2][0] == 'X')) {
    this.score += hit;
  }
  if ((this.frame > 2) && (this.frame < 11) && (this.scorecard[this.frame - 3][0] == 'X')) {
    this.score += hit;
  }
};

Game.prototype.checkLastSpare = function() {
  if ((this.frame > 1) && (this.scorecard[this.frame - 2][1] == '/')) {
    this.scorecard[this.frame - 1][0] = 2 * hit;
    this.score += hit;
  }
  else {
   this.scorecard[this.frame - 1][0] = hit;
  }
};

Game.prototype.frameReset = function() {
  this.frame += 1;
  this.pins = 10;
  this.roll = 1;
};
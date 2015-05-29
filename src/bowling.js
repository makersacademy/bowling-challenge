function Player() {
  this.score = [];
  this.firstHit = 0;
  this.secondHit = 0;
  this.isSpare = false;
  this.isStrike = false;
};

Player.prototype.firstBowl = function(pins) {
  if(this.errorHandle(pins) == null) { this.firstHit = pins };
  if(pins == 10) { this.secondHit = 0 };
};

Player.prototype.secondBowl = function(pins) {
  if(this.errorHandle(pins) == null) { this.secondHit = pins };
};

Player.prototype.calculateScore = function() {
  result = this.firstHit + this.secondHit;
  this.score.push(result);
  this.addBonus();
  this.isNextABonus();
  this.resetHits();
};

Player.prototype.addBonus = function() {
  if(this.isStrike == true) {

  }
  else if(this.isSpare == true) {
    x = this.score.length
    this.score[(x - 2)] += this.firstHit;
    this.isSpare = false;
  }
};

Player.prototype.isNextABonus = function() {
  if(this.first == 10) {
    this.isStrike = true
  }
  else if(this.firstHit + this.secondHit == 10) {
    this.isSpare = true;
  }
};


Player.prototype.resetHits = function() {
  this.firstHit = 0;
  this.secondHit = 0;
};

Player.prototype.errorHandle = function(pins) {
  if(this.firstHit == 10 && pins != 0) {
    throw new Error('Cannot bowl twice on a strike');
  }
  else if(pins + this.firstHit > 10){
    throw new Error('Cannot hit more than 10 pins');
  }
};
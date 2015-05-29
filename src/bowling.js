function Player() {
  this.score = 0;
  this.firstHit = 0;
  this.secondHit = 0;
  this.isSpare = false;
  this.isStrike = false;
};

Player.prototype.firstBowl = function(pins) {
  if(this.errorHandle(pins) == null) {
    this.firstHit = pins;
  }

  if(pins == 10) {
    this.firstHit = pins;
    this.secondHit = 0;
  }
};

Player.prototype.secondBowl = function(pins) {
  if(this.errorHandle(pins) == null) {
    this.secondHit = pins;
  }
};

Player.prototype.calculate = function() {
  this.calculateBonus();
  this.score += this.firstHit + this.secondHit;
  this.isABonus();
  this.resetHits();
};

Player.prototype.isABonus = function() {
  if(this.firstHit + this.secondHit == 10) {
    if(this.firstHit != 10) {
      this.isSpare = true;
    }
    else if(this.firstHit == 10) {
      this.isStrike = true;
    }
  }
};

Player.prototype.calculateBonus = function() {
  if(this.isSpare == true) {
    this.score += this.firstHit;
    this.isSpare = false;
  }
  else if(this.isStrike == true)
    this.score += this.firstHit + this.secondHit;
  this.isStrike = false;
};

Player.prototype.resetHits = function() {
  this.firstHit = 0
  this.secondHit = 0
};

Player.prototype.errorHandle = function(pins) {
  if(this.firstHit == 10 && pins != 0) {
    throw new Error('Cannot bowl twice on a strike');
  }
  else if(pins + this.firstHit > 10){
    throw new Error('Cannot hit more than 10 pins');
  }
};
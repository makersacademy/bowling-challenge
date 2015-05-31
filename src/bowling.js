function Player() {
  this.score = [];
  this.firstHit = null;
  this.secondHit = null;
  this.extraGo = 0;
  this.isSpare = false;
  this.strikeCount = 0;
};

Player.prototype.firstBowl = function(pins) {
  pins = parseInt(pins)
  if(this.errorHandle(pins) == null) { this.firstHit = pins };
  if(pins == 10) {
    this.secondHit = 0;
    this.calculateScore();
  }
};

Player.prototype.secondBowl = function(pins) {
  pins = parseInt(pins)
  if(this.errorHandle(pins) == null) { this.secondHit = pins };
  this.calculateScore();
};

Player.prototype.extraBowl = function(pins) {
  if(this.extraGo == 0) {
    throw Error("Game has ended")
  }
  else if(this.extraGo > 0) {
    x = this.score.length;
    this.score[(x - 1)] += pins;
    this.extraGo -= 1;
  }
};

Player.prototype.calculateScore = function() {
    // calculates the base score for that frame
    // and pushes to the score array
    result = this.firstHit + this.secondHit;
    this.score.push(result);
    // adds any bonuses for strike/spare on previous frame
    this.addBonus();
    // determines if a strike/spare was scored,
    // so the bonus can be added on the next frame
    this.nextRoundBonus();
    // if it was the tenth frame, determines whether
    // the player gets an extra bowl
    if(this.score.length == 10) {
      this.tenthFrame();
    }
    this.resetHits();
};

Player.prototype.addBonus = function() {
  x = this.score.length
  // adds correct bonus if player has scored a strike
  if(this.strikeCount == 1) {
    this.score[(x - 2)] += this.firstHit + this.secondHit;
  }
  // adds correct bonuses if player has scored
  // more than one strike in a row
  else if(this.strikeCount == 2) {
    this.score[(x - 2)] += this.firstHit + this.secondHit;
    this.score[(x - 3)] += this.firstHit;
    this.strikeCount -= 1;
  }
  // adds correct bonus if player has scored a spare
  else if(this.isSpare == true) {
    this.score[(x - 2)] += this.firstHit;
    this.isSpare = false;
  }
};

Player.prototype.nextRoundBonus = function() {
  if(this.firstHit == 10) {
    this.strikeCount += 1
  }
  else if(this.firstHit + this.secondHit == 10) {
    this.isSpare = true;
  }
  else {
    this.strikeCount = 0;
  }
};

Player.prototype.resetHits = function() {
  this.firstHit = null;
  this.secondHit = null;
};

Player.prototype.tenthFrame = function() {
  // player gets 1 more bowl for a spare
  if(this.isSpare == true) {
    this.extraGo = 1;
  }
  // player gets 2 more bowls for a strike
  else if(this.strikeCount == 1) {
    this.extraGo = 2;
  }
  // if there were more than 2 strikes in a row,
  // this adds the correct bonuses for the 9th frame
  else if(this.strikeCount == 2) {
    this.score[(x - 2)] += this.firstHit + this.secondHit;
    this.extraGo = 2;
  }
};

Player.prototype.errorHandle = function(pins) {
  if(this.score.length == 10) {
    if(this.isSpare == false && this.strikeCount == 0) {
      throw new Error("Game has ended")
    }
  }
  else if(pins + this.firstHit > 10){
    throw new Error('Cannot hit more than 10 pins');
  }
};
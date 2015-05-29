function Player() {
  this.score = [];
  this.firstHit = 0;
  this.secondHit = 0;
  this.isSpare = false;
  this.strikeCount = 0;
  this.extraGo = 0;
};

Player.prototype.firstBowl = function(pins) {

  if(this.errorHandle(pins) == null) { this.firstHit = pins };
  if(pins == 10) { this.secondHit = 0 };
};

Player.prototype.secondBowl = function(pins) {
  if(this.errorHandle(pins) == null) { this.secondHit = pins };
};

Player.prototype.extraBowl = function(pins) {
  if(this.extraGo == 0) {
    throw Error("Game has ended")
  }
  else if(this.extraGo = 1) {
    x = this.score.length
    this.score[(x - 1)] += pins
  }
};

Player.prototype.calculateScore = function() {
    result = this.firstHit + this.secondHit;
    this.score.push(result);
    this.calculateBonus();
    if(this.score.length > 1) {
      // for the first frame
      this.addBonus();
    }
    // for the tenth frame
    if(this.score.length == 10) {
      this.finalFrame();
    }
    this.resetHits();
};

Player.prototype.addBonus = function() {
  x = this.score.length;
  if(this.strikeCount == 1) {
    this.score[(x - 1)] += this.firstHit;
    this.score[(x - 1)] += this.secondHit;
  }
  else if(this.strikeCount == 2) {
    this.score[(x - 1)] += this.firstHit + this.secondHit;
    this.score[(x - 2)] += this.firstHit;
    this.strikeCount -= 1;
  }
  else if(this.isSpare == true) {
    this.score[(x - 1)] += this.firstHit;
    this.isSpare = false;
  }
};

Player.prototype.calculateBonus = function() {
  if(this.firstHit == 10) {
    this.strikeCount += 1;
  }
  else if(this.firstHit + this.secondHit == 10) {
    this.isSpare = true;
  }
  else {
    this.strikeCount = 0;
  }
};

Player.prototype.resetHits = function() {
  this.firstHit = 0;
  this.secondHit = 0;
};

Player.prototype.finalFrame = function() {
    if(this.score.length == 10 && this.isSpare == true) {
      // if you score a spare on 10th frame, you get 1 extra bowl
      this.extraGo = 1;
    }
    else if(this.score.length == 10 && this.strikeCount == 1) {
      // if you score a strike on the 10th frame, you get 2 extra bowls
      this.extraGo = 2;
    }
    else if(this.score.length == 10 && this.strikeCount == 2) {
      // if you scored a strike on the 9th and 10th frame, you get
      // 2 extra bowls, and it updates the score on the 9th as per normal
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
  else if(this.firstHit == 10 && pins != 0) {
    throw new Error('Cannot bowl twice on a strike');
  }
  else if(pins + this.firstHit > 10){
    throw new Error('Cannot hit more than 10 pins');
  }
};
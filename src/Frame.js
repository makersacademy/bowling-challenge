var Frame = function() {
  this.score = 0;
  this.Pin = 10;
};

  Frame.prototype.score = function() {
    this.score = this.roll1 + this.roll2;
  };

  Frame.prototype.isSpare = function() {
  if (roll1 + roll2) === 10 {
    return true
  } else {
    return false
  }

  Frame.prototype.isStrike = function() {
    if roll1 === 10 {
      return true
    } else {
      return false
    }
  };

  Frame.prototype.bonus = function(bonus) {
    this.score += bonus;
  };


  Frame.prototype.reset = function(pins) {
    this.newFrame.push(pins);
  };


};


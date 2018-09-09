function Frame() {
  // This tracks the rolls for a frame
  this.scores = [null, null];
  this.flatscore = 0;
  this.ball = 0;
  this.isOver = false;

  this.bonusBalls = 0;
  this.bonusscore = 0;
  this.bonusAdded = false;
};

Frame.prototype.add_score = function(score) {
  this.scores[this.ball] = score;
  this.flatscore += score;
  this.ball++;
  this._determineBonusBalls();
  this._isOver();
};

Frame.prototype.add_bonus = function(bonus) {
  this.bonusscore += bonus;
  this.bonusAdded = true;
}

Frame.prototype._determineBonusBalls = function() {
  if (this._isStrike()) {
    this.bonusBalls = 2
  } else if (this._isSpare()) {
    this.bonusBalls = 1
  } else {
    if (this.ball == 2) {
      this.bonusAdded = true
    }
  }
};

Frame.prototype._isOver = function() {
  if (this._isStrike()) {
    this.isOver = true
  } else if (this.ball === 2) {
    this.isOver = true
  };
}

Frame.prototype._isStrike = function() {
  return this.scores[0] === 10;
}

Frame.prototype._isSpare = function() {
  return this.flatscore === 10;
}

// Frame.prototype._score = function() {
//   var total = 0;
//   this.scores.forEach(function (s) {
//     total += s;
//   });
//   return total;
// };

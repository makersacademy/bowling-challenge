function Frame() {
  // This tracks the rolls for a frame
  this.scores = [0, 0];
  this.bonusBalls = 0;
  this.ball = 0;
  this.round = 0;
  this.isOver = false;
  this.flatscore = 0;
  this.bonusscore = 0;
};

Frame.prototype.add_score = function(score) {
  this.scores[this.ball] = score;
  this.flatscore += score;
  this.ball++;
  this._determineBonusBalls();
  this._isOver();
};

Frame.prototype.add_bonus = function(bonus) {
  this.bonusscore += bonus
}

Frame.prototype._determineBonusBalls = function() {
  if (this.scores[0] === 10) {
    this.bonusBalls = 2
  } else if (this.flatscore === 10) {
    this.bonusBalls = 1
  };
};

// Frame.prototype._score = function() {
//   var total = 0;
//   this.scores.forEach(function (s) {
//     total += s;
//   });
//   return total;
// };

Frame.prototype._isOver = function() {
  if (this.scores[0] === 10) {
    this.isOver = true
  } else if (this.ball === 2) {
    this.isOver = true
  };
}

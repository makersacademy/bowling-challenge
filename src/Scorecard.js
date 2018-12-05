function Scorecard() {
  this._scores = [];
  this._frames = [];
};

Scorecard.prototype.throw = function(pinsDown) {
  if (this._scores.length % 2 == 0 && pinsDown == 10) {
    this._scores.push(pinsDown, 0);
  }
  else { this._scores.push(pinsDown); }
  this.eachFrame();
};

Scorecard.prototype.eachFrame = function() {
  var hold = 0, i;
  for (i = 0; i < this._scores.length; i++) {
    if (i % 2 == 0) { hold += this._scores[i]; }
    else { 
      if (this._scores[i - 1] == 10) {
        hold += this._scores[i + 1];
        if (this._scores[i + 1] == 10) { hold += this._scores[i + 3]; }
        else { hold += this._scores[i + 2]; }
      }
      else if ((this._scores[i - 1] + this._scores[i]) == 10) {
        hold += this._scores[i + 1];
      }
      hold += this._scores[i];
      index = (i / 2) - 0.5;
      if (!isNaN(hold)) { this._frames[index] = hold; }
    }
  }
};

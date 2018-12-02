function Scorecard() {
  this._scores = [];
  this._frames = [];
  this._display = [];
};

Scorecard.prototype.even = function(something) {
  if (something % 2 == 0) { return true; }
  else { return false; }
};

Scorecard.prototype.throw = function(pinsDown) {
  if (this.even(this._scores.length) && pinsDown == 10) {
    this._scores.push(pinsDown); 
    this._scores.push(0); 
  }
  else { this._scores.push(pinsDown); }
  this.eachFrame();
  this.toDisplay(pinsDown);
};

Scorecard.prototype.eachFrame = function() {
  var hold = 0;
  var i;
  for (i = 0; i < this._scores.length; i++) {
    if (this.even(i)) { hold += this._scores[i]; }
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
      if (isNaN(hold)) {}
      else { this._frames[index] = hold; }
    }
  }
};

Scorecard.prototype.toDisplay = function(pinsDown) {
  if (
    (this._display.length == 18 && pinsDown == 10) || 
    (this._display.length == 19 && pinsDown == 10) ||
    (this._display.length == 20 && pinsDown == 10)) {
    this._display.push("X");
  }
  else if (this.even(this._display.length) && pinsDown == 10) {
    this._display.push("");
    this._display.push("X");
  }
  else if (
    this.even(this._scores.length)
    && 
    (this._scores[this._scores.length - 2] + this._scores[this._scores.length - 1] == 10)) {
      this._display.push("/");
    }
  else if (pinsDown == 0) {
    this._display.push("-");
  }
  else { this._display.push(pinsDown); }
};

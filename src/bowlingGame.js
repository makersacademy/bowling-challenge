function bowlingGame() {
  this._score = 0;
  this.pins = [];
  this._frame = 1;
  this._roll = 0;
  this._strike = false;
  this._spare = false;
}

bowlingGame.prototype.score = function() {
  return this._score;
}

bowlingGame.prototype.knockedDownPins = function(number) {
  if (number === 10) {
    this.strike();
  }
  this.pins.push(number);
  this._roll += 1;
}

bowlingGame.prototype.addToScore = function() {
  if (this._strike === true) {
    var total = (this.pins[0] + this.pins[1]);
    if (total === 10) {
      this._spare = true;
      this._strike = false;
      this._score += (total)*2;
      this.restart();
    } else {
      this._score += (total)*2;
      this._strike = false;
      this.restart();
    }
  }
  else { var total = this.pins[0] + this.pins[1];
  if (total === 10) {
    this._spare = true;
    this._score += total;
    this.restart();
  } else {
   this._score += total;
   this._strike = false;
   this.restart();
  }
 }
}

bowlingGame.prototype.strike = function() {
  this._strike = true;
  this._score += 10;
  this.restart();
}

bowlingGame.prototype.restart = function() {
  this._frame += 1;
  this._roll = 0;
  this.pins = [];
}

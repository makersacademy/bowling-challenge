function Display() {
  this._display = [];
};

Display.prototype.toDisplay = function(pinsKnockedDown) {
  var itsTheTenthFrame = (this._display.length == 18 || this._display.length == 19 || this._display.length == 20);
  var theyKnockedNoPinsDown = (pinsKnockedDown == 0);
  var theyKnockedTenPinsDown = (pinsKnockedDown == 10);
  var itsTheFirstThrowOfAFrame = (this._display.length % 2 == 0);
  var itsTheSecondThrowOfAFrame = (this._display.length % 2 != 0);
  var theTotalForTheFrameIsTen = (this._display[this._display.length - 1] + pinsKnockedDown == 10);

  if (itsTheTenthFrame && theyKnockedTenPinsDown) { this.recordsATenthFrameStrike(); }
  else if (itsTheFirstThrowOfAFrame && theyKnockedTenPinsDown) { this.recordsAStrike(); }
  else if (itsTheSecondThrowOfAFrame && (theyKnockedTenPinsDown || theTotalForTheFrameIsTen)) { this.recordsASpare(); }
  else if (theyKnockedNoPinsDown) { this.recordsAMiss(); }
  else { this.recordsNumberOf(pinsKnockedDown); }
  };

Display.prototype.recordsAMiss = function() {
  this._display.push("-");
};

Display.prototype.recordsASpare = function() {
  this._display.push("/");
};

Display.prototype.recordsAStrike = function() {
  this._display.push("","X");
};

Display.prototype.recordsATenthFrameStrike = function() {
  this._display.push("X");
};

Display.prototype.recordsNumberOf = function(pinsKnockedDown) {
  this._display.push(pinsKnockedDown);
};
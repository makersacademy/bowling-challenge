
function Frame() {

  var _rollsScore;
  var roll;
  var _getRollPins;

  this.roll = [];
  this._frameScore = 0;

  for (var i = 0; i <= 2; i++) {
    this.roll[i] = new Roll();
  }

}

Frame.prototype.rollPins = function(i,pins) {
  this.roll[i].pinsKnockedDown(pins);
  return pins;
};

Frame.prototype.frameScore = function() {
      this._frameScore = this.roll[0].rollScore() + this.roll[1].rollScore();
  return this._frameScore;
};

Frame.prototype.getRollPins = function(i) {
  this._getRollPins = this.roll[i].rollScore();
  return this._getRollPins;
};


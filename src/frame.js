function Frame(score) {
  this._rolls = [score];
  this._concluded = false;
  this._finalFrame = false;

  Frame.prototype.rollLength = function() {
    return this._rolls.length;
  }

  Frame.prototype.addRoll = function(score) {
    this._rolls.push(score);
  }

  Frame.prototype.completed = function() {
    return this._concluded;
  }

  Frame.prototype.complete = function() {
    this._concluded = !this._concluded;
  }

}

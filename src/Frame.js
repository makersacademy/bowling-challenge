function Frame() {
  this.game = []
  this.roll = []
  this.problem = false
}

Frame.prototype.checkPins = function() {
  if (this.roll.length === 2 || this.roll[0] === 10) {
    this.game.push(this.roll);
    this.roll = [];
  }
}

Frame.prototype.newRoll = function(pins) {
    this.roll.push(pins);
    frame.checkPins();
  }

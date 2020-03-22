
function Frame() {
  this.score = []
  // this.roll = roll
  // this.pins = pins
  
}

Frame.prototype.firstRoll = function(pins) {
  return this.score[0].push(pins);
}



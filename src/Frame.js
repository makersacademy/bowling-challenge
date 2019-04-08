function Frame() {
  this.firstRoll = null;
  this.secondRoll = null;
}

Frame.prototype = {

  constructor: Frame,

  roll: function(pins) {
    this.firstRoll = pins;
  }
}

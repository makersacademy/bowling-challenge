function Frame() {
  this.firstRoll = null;
  this.secondRoll = null;
}

Frame.prototype = {

  constructor: Frame,

  roll: function(pins) {
    if (this.firstRoll === null) {
      this.firstRoll = pins;
    } else {
      this.secondRoll = pins;
    }    
  }
}

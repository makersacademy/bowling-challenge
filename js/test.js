  var tenPin = function() {
  this.isStrike = false
  this.isSpare = false
};

  tenPin.prototype.frameFirstRoll = function(frame) {
    if (frame.rollOne() < 10 ){
      this.isStrike = false
    } else {
      this.isStrike = true
    };
  };


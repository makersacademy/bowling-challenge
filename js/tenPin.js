var tenPin = function() {
  this.isStrike = false
  this.isSpare = false
};

  tenPin.prototype.frameFirstRoll = function(frame) {
    if (frame.rollOne < 10 ){
      this.isStrike = false
    } else {
      this.isStrike = true
    };
  };

  tenPin.prototype.frameSecondRoll = function(roll) {
    if ((frame.rollOne + frame.rollTwo) === 10 ) {
      this.isSpare = true
    } else {
      this.isSpare = false
    }
  };



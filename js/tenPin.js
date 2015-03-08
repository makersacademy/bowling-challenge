var tenPin = function() {
  this.isStrike = false
  this.isSpare = false
};

  tenPin.prototype.frameFirstRoll = function(frame) {
    if (frame.getRollOneScore() < 10 ){
      this.isStrike = false
    } else {
      this.isStrike = true
    };
  };

  tenPin.prototype.frameSecondRoll = function(frame) {
    if ((frame.getRollOneScore() + frame.getRollTwoScore()) === 10 ) {
      this.isSpare = true
    } else {
      this.isSpare = false
    }
  };



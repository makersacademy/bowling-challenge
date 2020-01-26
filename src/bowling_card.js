// Responsible for recording the players previous turns.
var BowlingCard = function() {
  this.frameNumber = 1
  this.rollNumber = 1
  this.scoreCard = []
};

BowlingCard.prototype.record = function(pins) {
  if ( this.validEntry(pins) ){
    this.saveScore(pins);
    this.updateTurn(pins);
  };
};

BowlingCard.prototype.validEntry = function(pins) {
  if ( this.rollNumber > 3 ){ return false }
  if ( this.rollNumber === 2 ){
    var firstRoll = this.scoreCard[this.scoreCard.length -1].pins
    if ( firstRoll === 10 ){ return true }
    if ( (firstRoll + pins) > 10 ){ return false }
  }
  return true
};

BowlingCard.prototype.saveScore = function(pins) {
  this.scoreCard.push({
    frame: this.frameNumber,
    roll: this.rollNumber,
    pins: pins
  });
};

BowlingCard.prototype.updateTurn = function(pins) {
  if ( this.frameNumber === 10 ){
    this.rollNumber ++
  } else if ( pins === 10 ){
    this.frameNumber ++
  } else if (this.rollNumber === 1 ){
    this.rollNumber ++
  } else if (this.rollNumber === 2 ){
    this.rollNumber --
    this.frameNumber ++
  };
};

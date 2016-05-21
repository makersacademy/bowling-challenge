Array.prototype.last = function(){
  return this[this.length-1];
}

function Bowling(){
  this._frames = [];
}

Bowling.prototype.roll = function(pins){
  if (this._frames.length === 0 || this._frames.last.isFinished()) {
    this._frames.push(new Frame());
    this._frames.last.recordFirstRoll(pins);
  } else {
    this._frames.last.recordSecondRoll(pins);
  }
}

Bowling.prototype.gameScore = function(){
  var sum = 0
  this._frames.forEach(function(frame){
    if (frame.isAllBonusAdded()){
      sum += frame.calculateTotal();
    }
  });
  return sum;
}
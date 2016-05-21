Array.prototype.last = function(){
  return this[this.length-1];
}

function Bowling(){
  this._frames = [];
}

Bowling.prototype.roll = function(pins){
  this.updateBonus(pins);
  if (this._frames.length === 0 || this.currentFrame().isFinished()) {
    this._frames.push(new Frame());
    this.currentFrame().recordFirstRoll(pins);
  } else {
    this.currentFrame().recordSecondRoll(pins);
  }
}

Bowling.prototype.totalScore = function(){
  var sum = 0
  this._frames.forEach(function(frame){
    if (frame.isAllBonusAdded()){
      sum += frame.calculateTotal();
    }
  });
  return sum;
}

Bowling.prototype.currentFrame = function(){
  return this._frames.last();
}

Bowling.prototype.updateBonus = function(pins){
    this._frames.forEach(function(frame){
    if (!frame.isAllBonusAdded() && frame.isFinished()){
      frame.addBonus(pins);
    }
  });
}

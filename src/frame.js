function Frame(){
  this._details = {
    pins: null,
    firstScore: null,
    secondScore: null,
    frameScore: null
  }
}

Frame.prototype.firstBowl = function(pins){
  this._details.firstScore = pins;
  this.updateScore(pins);
}

Frame.prototype.secondBowl = function(pins){
  this._details.secondScore = pins;
  this.updateScore(pins);
}

Frame.prototype.frameScore = function(firstScore, secondScore){
  this._details.frameScore = firstScore + secondScore;
  return frameScore;
}

Frame.prototype.updateScore = function(pins) {
  this._details.pins += pins;
}

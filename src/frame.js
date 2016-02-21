function Frame() {
  this.score = 0;
  this._numberOfThrows = 0;
}

Frame.prototype.isComplete = function () {
  if(this._numberOfThrows < 2){return false;}
  return true;
};

Frame.prototype.bowl = function (score) {
  if(this._numberOfThrows >= 2){
    throw new Error('Frame is already complete');
  }
  if(score === 10){
    this._numberOfThrows += 2;
  } else if(score < 10) {
    this._numberOfThrows += 1;
  } else {
    throw new Error('Invalid score');
  }
  this.score += score;
};

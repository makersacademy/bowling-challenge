function Frame() {
  this.score = 0;
  this._numberOfThrows = 0;
  this.throwArray = [];
  this.isSpare = false;
  this.isStrike = false;
}

Frame.prototype.isComplete = function () {
  if(this._numberOfThrows >= 2){return true;}
  return false;
};

Frame.prototype._evaluateThrow = function (score) {
  if(score === 10){
    this._numberOfThrows += 2;
    this.isStrike = true;
    this.throwArray.push('X');
  } else if(score < 10) {
    this._numberOfThrows += 1;
  } else {
    throw new Error('Invalid score');
  }
};

Frame.prototype._updateThrowArray = function (score) {
  this.throwArray.push(score);
};

Frame.prototype._updateScore = function (score) {
  this.score += score;
};

Frame.prototype._checkForSpare = function (score) {
  if(this.score === 10 && !this.isStrike){
    this.isSpare = true;
    this.throwArray.push('/');
  }
};

Frame.prototype.bowl = function (score) {
  if(this.isComplete()){
    throw new Error('Frame is already complete');
  }
  this._updateThrowArray(score);
  this._evaluateThrow(score);
  this._updateScore(score);
  this._checkForSpare(score);
};

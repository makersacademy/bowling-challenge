function Frame(isFinal) {
  this.isFinal =  isFinal || false;
  this._throwsAllowed = 2;
  this.score = 0;
  this._numberOfThrows = 0;
  this.throwArray = [];
  this.isSpare = false;
  this.isStrike = false;
  this.isComplete = false;
}

Frame.prototype._updateCompleteness = function () {
  if(this._numberOfThrows >= this._throwsAllowed){
    this.isComplete = true;
  }
};

Frame.prototype._evaluateThrow = function (score) {
  if(score > 10){throw new Error('Invalid score');}
};

Frame.prototype._updateThrowArray = function (score) {
  this.throwArray.push(score);
};

Frame.prototype._updateScore = function (score) {
  this.score += score;
};

Frame.prototype._checkForStrike = function (score) {
  if(score === 10){
    if(this.isFinal){
      this._throwsAllowed = 3;
    } else {
      this.isComplete = true;
      this.throwArray.push('X');
    }
    this.isStrike = true;
  }
};

Frame.prototype._checkForSpare = function (score) {
  if(this.score === 10 && !this.isStrike){
    this.isSpare = true;
  }
};

Frame.prototype._checkIfComplete = function () {
  if(this.isComplete){
    throw new Error('Frame is already complete');
  }
};

Frame.prototype.bowl = function (score) {
  this._checkIfComplete();
  this._updateThrowArray(score);
  this._evaluateThrow(score);
  this._updateScore(score);
  this._numberOfThrows += 1;
  this._updateCompleteness();
  this._checkForStrike(score);
  this._checkForSpare(score);
};

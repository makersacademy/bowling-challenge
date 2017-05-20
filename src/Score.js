function Score() {
  this._currentScore = 0;
};

Score.prototype.normalScore = function(frame, i) {
  return frame[i][0] + frame[i][1];
};

Score.prototype.spareScore = function(frame, i) {
  return this.normalScore(frame, i) + frame[i + 1][0];
};

Score.prototype.strikeScore = function(frame, i) {
  return this.spareScore(frame, i) + frame[i + 1][1];
};

Score.prototype._calculateScore = function(frame) {
  for(i = 0; i < frame.length; i++) {
    if (frame[i][0] + frame[i][1] < 10) {
      this._currentScore = this._currentScore + this.normalScore(frame, i);
    } else if ((frame[i][0] + frame[i][1] == 10) && (frame[i][0] !== 10)) {
      this._currentScore = this._currentScore + this.spareScore(frame, i);
    } else {
      this._currentScore = this._currentScore + this.strikeScore(frame, i);
    }
  }
  return this._currentScore;
};

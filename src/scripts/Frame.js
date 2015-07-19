function Frame() {
  this.rollsRemaining = 2;
  this.totalScoreRecord = [];
}

Frame.prototype.registerRoll = function(pinsKnockedOver) {
  if (pinsKnockedOver === 10) {
    this.rollsRemaining = 0;
  }
  else {
    this.rollsRemaining --;
  }
  this.totalScoreRecord.push(pinsKnockedOver);
};

Frame.prototype.isInProgress = function() {
  if (this.rollsRemaining > 0) {
    return true;
  }
  else {
    return false;
  }
};

Frame.prototype.totalScore = function() {
  var scoreCount = 0;
  for (var i = 0; i < this.totalScoreRecord.length; i ++) {
    scoreCount += this.totalScoreRecord[i];
  }
  return scoreCount;
};

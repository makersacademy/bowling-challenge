function BowlingScore() {
  this.rawScores = [];
};

BowlingScore.prototype.addNewRoundScore = function(score) {
  this.rawScores.push(score);
};

BowlingScore.prototype.makeFrameScores = function() {
  this.frameScores = [[this.rawScores[0]]];

  for (i = 1; i < this.rawScores.length; i++) {
    if (this.frameScores[this.frameScores.length -1].length < 2) {
      (this.frameScores[this.frameScores.length -1].push(this.rawScores[i]))
    } else {
      var currentFrame = [];
      currentFrame.push(this.rawScores[i])
      this.frameScores.push(currentFrame);
    };

  };
};

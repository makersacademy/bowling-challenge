function BowlingScore() {
  this.rawScores = [];
};

//[2,3,4,5,6,7,7,7,2,3]

BowlingScore.prototype.addRoundToRawScores = function(score) {
  this.rawScores.push(score);
};

BowlingScore.prototype.createFrameScores = function() {
  this.frameScores = [];
  if (this.frameScores.length === 0) {this.frameScores.push([this.rawScores[0]])};
  for(i = 1; i < this.rawScores.length; i+=1) {
    if ((this.frameScores[this.frameScores.length - 1]).length === 1 && this.frameScores[this.frameScores.length - 1][0] !== 10) {
      (this.frameScores[this.frameScores.length - 1]).push(this.rawScores[i]);
    } else {
      this.frameScores.push([this.rawScores[i]]);
    };
  };
};


//
// [2,4,2,3,6,2]
//
// {f1:[2,4],f2:[2,3]}
//
// [[2,4],[2,3],[10]]

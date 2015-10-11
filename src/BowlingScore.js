function BowlingScore() {
  this.rawScores = [];
  // this.frameScores = {f1:[],f2:[],f3:[],f4:[],f5:[],f6:[],f7:[],f8:[],f9:[],f10:[]};
};

BowlingScore.prototype.addNewRoundScore = function(score) {
  this.rawScores.push(score);
};

BowlingScore.prototype.makeFrameScores = function() {
  this.frameScores = [];
  for(i = 0; i < this.rawScores.length; i+=1) {
    var currentFrame = [this.rawScores[i]];
    // currentFrame.push(this.rawScores[i]);
    this.frameScores.push(currentFrame);
    console.log("finish");
  };

};
//
// [2,4,2,3,6,2]
//
// {f1:[2,4],f2:[2,3]}
//
// [[2,4],[2,3],[10]]

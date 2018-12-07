function BowlingCard () {
  this.scores = [];
  this.frameScores = [];
}

BowlingCard.prototype.enterScore = function (score) {
  if (this.scores.length < 20 ||
    (this.scores[18] + this.scores[19] >= 10 && this.scores.length < 21) ){
    this.scores.push(score);
  }
  if (score == 10 && this.scores.length < 18) {
    this.scores.push(0);
  }
    var frames_to_update = this.scores.length/2 - this.frameScores.length;
    for (var i=1;i<=frames_to_update;i++){
      this.calculateFrameScores();
    }
};

BowlingCard.prototype.calculateFrameScores = function () {
  if (this.frameScores.length == 0){
    var frameIdx = 0;
  } else {
    var frameIdx = this.frameScores.length-1;
  }
  var scoresIdx = (frameIdx)*2;
  if (this.scores[scoresIdx]+this.scores[scoresIdx+1] < 10){
    this.totalScores(this.scores[scoresIdx]+this.scores[scoresIdx+1]);
  } else if (this.scores[scoresIdx] == 10){
      if (this.scores[scoresIdx+2] == 10) {
        var score = this.scores[scoresIdx] + this.scores[scoresIdx+2]
                  + this.scores[scoresIdx+4];
        if (!isNaN(score)) { this.totalScores(score); }
      } else {
        var score = this.scores[scoresIdx] + this.scores[scoresIdx+2]
                  + this.scores[scoresIdx+3];
        if (!isNaN(score)) { this.totalScores(score);}
      }
  } else {
    var score = this.scores[scoresIdx] + this.scores[scoresIdx+1]
              + this.scores[scoresIdx+2];
    if (!isNaN(score)) { this.totalScores(score); }
  }
};

BowlingCard.prototype.totalScores = function (score) {
  if (this.frameScores.length > 0) {
    score = score + this.frameScores[this.frameScores.length-1];
  }
  this.frameScores.push(score);

};

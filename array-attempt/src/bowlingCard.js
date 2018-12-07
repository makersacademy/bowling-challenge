function BowlingCard () {
  this.scores = [];
  this.frameScores = [];
}

BowlingCard.prototype.enterScore = function (score) {
  if (this.scores.length < 20 ||
    (this.scores[18] + this.scores[19] >= 10 && this.scores.length < 21) ){
    this.scores.push(score);
  }
  if (score == 10) {
    this.scores.push(0);
  }
  if (this.scores.length > 0 && this.scores.length % 2 == 0){
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
  console.log(frameIdx);
  console.log(scoresIdx);
  if (this.scores[scoresIdx]+this.scores[scoresIdx+1] < 10){
    this.frameScores[frameIdx] = this.scores[scoresIdx]+this.scores[scoresIdx+1];
  } else if (this.scores[scoresIdx] == 10){
    console.log("Strike territory");
      if (this.scores[scoresIdx+2] == 10) {
        console.log("Double Strike territory");
        var score = this.scores[scoresIdx] + this.scores[scoresIdx+2]
                  + this.scores[scoresIdx+4];
        console.log(score);
        if (!isNaN(score)) { this.frameScores[frameIdx] = score; }
      } else {
        console.log("Single Strike territory");
        var score = this.scores[scoresIdx] + this.scores[scoresIdx+2]
                  + this.scores[scoresIdx+3];
        console.log(score);
        if (!isNaN(score)) { this.frameScores[frameIdx] = score; }
      }
  } else {
    console.log("Spare territory");
    var score = this.scores[scoresIdx] + this.scores[scoresIdx+1]
              + this.scores[scoresIdx+2];
    console.log(score);
    if (!isNaN(score)) { this.frameScores[frameIdx] = score; }
  }
};

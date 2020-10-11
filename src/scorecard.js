class Scorecard {

  constructor() {
    this.score = 0;
    this.total = [];
    // this.frameScores = [];
    // this.currentFrameScore = [];
    // this.currentFrame = 1;
    // this.STRIKE = 10;
    // this.total = 0;
  };

  //viewing the current frame

  getCurrentFrame() {
    return this.currentFrame;
  };

  // returning the scores

  getScore() {
    return this.score;
  };

  getCurrentFrameScore() {
    return this.currentFrameScore;
  };

  getFrameScores() {
    return this.frameScores;
  };

  // adjusting this scores 

  addScore(pinsKnockedDown) {
    this.score = pinsKnockedDown;
    this.total.push(this.score);
  };

  // addScoreToFrame() {
  //  if (this.isGameOver()) throw 'game over';
  //  if (this.isStrike()) {
  //     this.strike();
  //  } else {
  //     this.currentFrameScore.push(this.score);
  //   };
  //   this.addToFrameScores();
  // };

  // addToFrameScores() {
  //   if (this.currentFrameScore.length === 2) {
  //     this.frameScores.push(this.currentFrameScore);
  //     this.incrementFrameCount();
  //     this.resetFrameScore();
  //   };
  // };

  // incrementing frame count

  // incrementFrameCount () {
  //   this.currentFrame ++;
  // };

  // resetting frame score

    // resetFrameScore() {
    //   this.currentFrameScore = [];
    // };

  // ending this game 

  // isGameOver() {
  //   if (this.currentFrame > 10) {
  //     return true;
  //   }
  // };

  //dealing with strikes 

  isStrike() {
    if (this.score === this.STRIKE) return true;
  };

  strike() {
    this.currentFrameScore.push(10, 0);
  };

// scores pre bonuses for spares and strikes

  getScoreSoFar() {
    var sum = 0; 
    for (let i = 0; i < this.frameScores.length; i ++) {
        sum += this.frameScores[i].reduce((result,number) => result + number);
    };
    this.total = sum;
    return this.total;
  };

};

class Scorecard {

  constructor() {
    this.score = 0;
    this.frameScores = [];
    this.currentFrameScore = [];
    this.currentFrame = 1;
    this.STRIKE = 10;
  };

  //viewing the current frame

  getCurrentFrame() {
    return this.currentFrame;
  };

  // returning the scores

  getCurrentScore() {
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
    this.addScoreToFrame();
  };

  addScoreToFrame() {
   if (this.isGameOver()) throw 'game over';
   if (this.isStrike()) {
      this.strike();
   } else {
      this.currentFrameScore.push(this.score);
    };
    this.addToFrameScores();
  };

  addToFrameScores() {
    if (this.currentFrameScore.length === 2) {
      this.frameScores.push(this.currentFrameScore);
      this.incrementFrameCount();
      this.resetFrameScore();
    };
  };

  // incrementing frame count

  incrementFrameCount () {
    this.currentFrame ++;
  };

  // resetting frame score

    resetFrameScore() {
      this.currentFrameScore = [];
    };

  // ending this game 

  isGameOver() {
    if (this.currentFrame > 10) {
      return true;
    }
  };

  //dealing with strikes 

  isStrike() {
    if (this.score === this.STRIKE) return true;
  };

  strike() {
    this.currentFrameScore.push(10, 0);
  }

};

class Scorecard {

  constructor() {
    this.score = 0;
    this.frameScores = [];
    this.currentFrameScore = [];
    this.currentFrame = 1;
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
  };

  addScoreToFrame() {
    this.currentFrameScore.push(this.score);
    this.addToFrameScores();
  };

  addToFrameScores() {
    if (this.currentFrameScore.length === 2) {
      this.frameScores.push(this.currentFrameScore);
    };
  };

};

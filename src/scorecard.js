class Scorecard {

  constructor() {
    // this.score = 0;
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

  // getScore() {
  //   return this.score;
  // };

  getTotal() {
    return this.sumTotal();
  };

  sumTotal() {
    let score = 0;
    let totalIndex = 0;

    for (let frameIndex = 0; frameIndex < 10; frameIndex ++) {
      let frameScore = this.total[totalIndex] + this.total[totalIndex + 1];
      
      if (this.isStrike(totalIndex)) {
        score += this.strikeBonus(totalIndex);
        totalIndex += 1;
      } else if (this.isSpare(frameScore)) {
          score += this.spareBonus(totalIndex);
          totalIndex += 2;
      } else {
        score += frameScore;
        totalIndex += 2;
      }
    }
    //return this.total.reduce((result, number) => result + number);
    
    return score;
  };

  getCurrentFrameScore() {
    return this.currentFrameScore;
  };

  getFrameScores() {
    return this.frameScores;
  };

  // adjusting this scores 

  addScore(pinsKnockedDown) {
    // this.score = pinsKnockedDown;
    this.total.push(pinsKnockedDown);
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

  //dealing with strikes and spares

  isStrike(totalIndex) {
    return this.total[totalIndex] === 10;
  };

  isSpare(frameScore) {
    return frameScore === 10;
  }

  strikeBonus(totalIndex) {
   return 10 + this.total[totalIndex + 1] + this.total[totalIndex + 2];
  }

  spareBonus(totalIndex) {
    return 10 + this.total[totalIndex + 2];
  }

};


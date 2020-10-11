class Scorecard {

  constructor() {
    this.total = [];
  };

  getCurrentFrame() {
    return this.currentFrame;
  };

  addScore(pinsKnockedDown) {
    this.total.push(pinsKnockedDown);
  };

  getTotal() {
    return this.sumTotal();
  };

  // calculating the score for complete frames

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
    return score;
  };

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


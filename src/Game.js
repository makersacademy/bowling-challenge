class Game {

  constructor() {
    this.frameCount = 1;
    this.pins = 10;
    this.rollCount = 2;
    this.playerScore = 0;
  }

  isLastRoll() {
    if(this.rollCount == 0 && this.frameCount != 10) {
      this.frameCount += 1;
      this.rollCount = 2;
      this.pins = 10;
    }
  }

  isABadRoll(score) {
    if((this.pins - score) < 0 || score < 0) {
      throw new Error('Invalid roll');
    }
  }

  recordRoll(score) {
    this.isABadRoll(score);
    
    this.isLastRoll();

    this.pins -= score;

    this.calculateScore(score);
    
    this.rollCount -= 1;
  }

  score() {
    return this.playerScore;
  }

  calculateScore(score) {
    this.playerScore += score;
  }
}
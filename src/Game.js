class Game {

  constructor() {
    this.frameCount = 1;
    this.pins = 10;
    this.rollCount = 2;
    this.playerScore = 0;
    this.rollScore = 0;
  }

  isLastRoll() {
    if(this.rollCount == 0 && this.frameCount != 10 || this.pins == 0) {
      this.frameCount += 1;
      this.rollCount = 2;
      this.pins = 10;
    }
  }

  isABadRoll(score) {
    if((this.pins - score) < 0 || score < 0) throw new Error('Invalid roll');
  }

  recordRoll(score) {
    this.isLastRoll();

    this.isABadRoll(score);

    this.rollScore = score

    this.pins -= score;

    this.calculateScore(score);

    this.rollCount -= 1;
  }

  isAStrike() {
    return (this.rollCount == 2 && this.rollScore == 10)
  }

  isASpare() {
    return (this.rollCount == 1 && this.pins == 0)
  }

  score() {
    return this.playerScore;
  }

  calculateScore(score) {
    if(this.isAStrike()) this.playerScore += score + 999999;

    if(this.isASpare()) this.playerScore += score + 555;
    
    this.playerScore += score;
  }
}
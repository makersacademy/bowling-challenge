class Game {

  constructor() {
    this.frameCount = 1;
    this.pins = 10;
    this.rollCount = 2;
    this.playerScore = 0;
    this.rollScore = 0;
    this.firstRolls = []
    this.secondRolls = []
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

    this.rollScore = score;

    this.pins -= score;

    this.storeRoll(score)    

    this.calculateScore(score);

    this.rollCount -= 1;
  }

  storeRoll(score) {
    if(this.rollCount == 2 && score == 10) {
      this.firstRolls.push(score)
      this.secondRolls.push(0)
    } else if(this.rollCount == 2) {
      this.firstRolls.push(score)
    } else if(this.rollCount == 1) {
      this.secondRolls.push(score)
    }
  }

  isAStrike() {
    return (this.rollCount == 2 && this.rollScore == 10);
  }

  calculateStrikeBonus() {
    return this.firstRolls[this.frameCount-1] + this.secondRolls[this.frameCount-1]
  }

  calculateSpareBonus() {
    return this.firstRolls[this.frameCount-1]
  }

  isASpare() {
    return (this.rollCount == 1 && this.pins == 0);
  }

  score() {
    return this.playerScore;
  }

  calculateScore(score) {
    if(this.isAStrike()) this.playerScore += score + this.calculateStrikeBonus();

    if(this.isASpare()) this.playerScore += score + this.calculateSpareBonus();
    
    this.playerScore += score;
  }
}
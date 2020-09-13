class Game {

  constructor() {
    this.frameCount = 1;
    this.pins = 10;
    this.rollCount = 2;
    this.playerScore = 0;
    this.rollScore = 0;
    this.firstRolls = [];
    this.secondRolls = [];
    this.spareBonus = false;
    this.strikeBonus = false;
    this.doubleStrikeBonus = false;
    this.numberOfRolls = 0
  }

  isLastRoll() {
    if(!this.rollCount && this.frameCount != 10 || !this.pins) {
      this.frameCount += 1;
      this.rollCount = 2;
      this.pins = 10;
    }
  }

  isABadRoll(score) {
    if((this.pins - score) < 0 || score < 0) throw new Error('Invalid roll');
  }

  isLastFrame() {
    if(this.frameCount == 11 && !this.spareBonus && !this.strikeBonus) return;
  }

  lastFrameScore() {
    return (this.frameCount == 11 && this.spareBonus || this.frameCount == 11 && this.strikeBonus);
  }

  isGutterGame() {
    if (this.frameCount == 10 && !this.playerScore) this.playerScore = 20;
  }

  awardSpareBonus() {
    if (this.spareBonus) return this.playerScore += this.calculateSpareBonus();
  }

  awardStrikeBonus() {
    if (this.strikeBonus && this.rollCount == 1) this.playerScore += this.calculateStrikeBonus();
  }

  awardDoubleStrikeBonus() {
    if (this.doubleStrikeBonus && this.frameCount < 11) this.playerScore += this.calculateDoubleStrikeBonus();
  }

  recordRoll(score) {
    this.numberOfRolls += 1
    if (this.numberOfRolls > 21) return;
    if (this.frameCount == 11 && this.strikeBonus == false) return; 
    if (this.frameCount == 12) return;
    this.isLastFrame();

    this.isLastRoll();

    this.isABadRoll(score);

    this.rollScore = score;

    this.pins -= score;

    this.storeRoll(score);

    this.isGutterGame();

    if(this.lastFrameScore()) return this.add(score);
    
    else {
      this.awardSpareBonus();

      this.awardStrikeBonus();

      this.calculateScore(score);

      this.awardDoubleStrikeBonus();
    }

    this.rollCount -= 1;
    console.log(this.numberOfRolls)
    console.log(this.frameCount)
    console.log('-------------')
  }

  storeRoll(score) {
    if(this.rollCount == 2 && score == 10) return this.firstRolls.push(score), this.secondRolls.push(0);
    
    if(this.rollCount == 2) return this.firstRolls.push(score);
    
    if(this.rollCount == 1) return this.secondRolls.push(score);
  }

  isAStrike() {
    return (this.rollCount == 2 && this.rollScore == 10);
  }

  calculateStrikeBonus() {
    return this.firstRolls[this.frameCount-1] + this.secondRolls[this.frameCount-1];
  }

  isADoubleStrike() {
    return (this.rollCount == 2 && this.rollScore == 10 && this.strikeBonus);
  }

  calculateDoubleStrikeBonus() {
    return this.firstRolls[this.frameCount-1] + this.firstRolls[this.frameCount-2];
  }

  calculateSpareBonus() {
    return this.firstRolls[this.frameCount-1];
  }

  isASpare() {
    return (this.rollCount == 1 && !this.pins);
  }

  score() {
    return this.playerScore;
  }

  add(score) {
    this.playerScore += score;
  }

  calculateScore(score) {
    if (this.isADoubleStrike()) return this.doubleStrikeBonus = true, this.add(score);

    if (this.isAStrike()) return this.strikeBonus = true, this.spareBonus = false, this.add(score);
    
    if (this.isASpare()) return this.spareBonus = true, this.strikeBonus = false, this.add(score);
    
    if (this.rollCount == 1) this.strikeBonus = false;
      
    return this.doubleStrikeBonus = false, this.spareBonus = false, this.add(score);
  }
}
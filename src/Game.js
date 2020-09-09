class Game {

  constructor() {
    this.frameCount = 1;
    this.pins = 10;
    this.rollCount = 2;
    this.playerScore = 0;
    this.rollScore = 0;
    this.firstRolls = []
    this.secondRolls = []
    this.spareBonus = false
    this.strikeBonus = false
    this.doubleStrikeBonus = false
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

  isLastFrame() {
    if(this.frameCount == 11 && this.spareBonus == false && this.strikeBonus == false)
    return;
  }

  lastFrameScore() {
    return (this.frameCount == 11 && this.spareBonus == true || this.frameCount == 11 && this.strikeBonus == true)
  }

  recordRoll(score) {
    this.isLastFrame();

    this.isLastRoll();

    this.isABadRoll(score);

    this.rollScore = score;

    this.pins -= score;

    this.storeRoll(score)

    if(this.frameCount == 10 && this.playerScore == 0) {
      this.playerScore = 20
    }

    if(this.lastFrameScore() && this.playerScore == 0) {
      this.playerScore = 20
      return;
    }

    if(this.lastFrameScore()) {
      this.playerScore += score
      return
    } else {
      if (this.spareBonus) {
      this.playerScore += this.calculateSpareBonus()
    }

    if (this.strikeBonus && this.rollCount == 1) {
      this.playerScore += this.calculateStrikeBonus()
    }

    this.calculateScore(score);

    if (this.doubleStrikeBonus  && this.frameCount < 11) {
      this.playerScore += this.calculateDoubleStrikeBonus()
    }

    }

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

  isADoubleStrike() {
    return (this.rollCount == 2 && this.rollScore == 10 && this.strikeBonus == true)
  }

  calculateDoubleStrikeBonus() {
    return this.firstRolls[this.frameCount-1] + this.firstRolls[this.frameCount-2]
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
    if (this.isADoubleStrike()) {
      this.doubleStrikeBonus = true
      this.playerScore += score;
    } else if(this.isAStrike()) {
      this.strikeBonus = true
      this.spareBonus = false
      this.playerScore += score;
    } else if (this.isASpare()) {
      this.spareBonus = true
      this.strikeBonus = false
      this.playerScore += score;
    } else {
      if (this.rollCount == 1) {
        this.strikeBonus = false
      }
      this.doubleStrikeBonus = false
      this.spareBonus = false
      this.playerScore += score;
    }
    
  }
}

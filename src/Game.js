class Frame {
  constructor () {
    // rolls should be private
    this.rolls = [];
    this.bonus_score = 0;
  }

  isStrike() {
    return (this.rolls[0] == 10);
  }

  isSpare() {
    return (this.rolls[0] + this.rolls[1]== 10);
  }

  isFrameComplete() {
    if (this.isStrike()) { return true; }
    else if (this.rolls.length == 2 ) {return true;}
  }

  isFinalFrameComplete() {
    if (this.rolls.length == 3) {return true;}
  }

 // changing data
  addRoll(score) {
    this.rolls.push(score);
  }

  // changing data
  // input method which usually have a parameter
  addBonusScore(bonus) {
    this.bonus_score += bonus;
  }

  // output method which returns something 
  calcFrameTotal() {
    return this.rolls.reduce((a, b) => a + b, 0) + this.bonus_score;
  }

  calcFrameTotalForFirstTwoRolls() {
    return this.rolls.slice(0, 2).reduce((a, b) => a + b, 0);
  }

  firstRollValue() {
    return this.rolls[0];
  }
}

class Game {
  constructor (frame = new Frame()) {
    this.frames = [];
    this.currentFrame = frame;
  }

  roll(score) {
    this.currentFrame.addRoll(score);
    if (this._isNewFrame()) {this._completeFrame();}
  }

  scoreTotal() {
    let score = 0;
    this.frames.forEach(frame => {
      score += frame.calcFrameTotal();
  });
  return score;
  }

  updateFrameTotals() {
    if (this._isNotFirstFrame()) { this._addAnyBonuses();}
  }

  _addAnyBonuses(){
    if (this._isStrike()) { this._addStrikeBonus(); }
    else if (this._isSpare()) { this._addSpareBonus(); }
  }
  
  _isNotFirstFrame() {
    if (this.frames.length >= 1)  {return true; } 
    else {return false; }
  }

  _completeFrame(frame = new Frame()) {
    this.updateFrameTotals();
    this.frames.push(this.currentFrame);
    this.currentFrame = frame;
    if (this.frames.length == 10) {console.log("GAME OVER! You're score is: " + (this.scoreTotal())); }
  }

  _isNewFrame() {
    if ((this.currentFrame.isFinalFrameComplete())) {return true;}
    else if ((this.currentFrame.isStrike() || this.currentFrame.isSpare() ) && this.frames.length == 9)  {return false;}
    else if (this.currentFrame.isFrameComplete()) {return true;}
  }

  _isDoubleStrike() {
    return (this.frames.length > 1 && this.frames.slice(-1)[0].isStrike() && this.frames.slice(-2)[0].isStrike());
  }

  // change name to is last Frame strike
  _isStrike() {
    if (this.frames.slice(-1)[0].isStrike()) { return true; }
    else {return false;}
  }

  // change name to is last Frame spare
  _isSpare() {
    if (this.frames.slice(-1)[0].isSpare()) { return true; }
  }

  _doubleStrikeBonus() {
    let additional_bonus = this.currentFrame.firstRollValue();
    this.frames.slice(-2)[0].addBonusScore(additional_bonus);
  }

  _addStrikeBonus() {
    if (this._isDoubleStrike()) { this._doubleStrikeBonus(); }
    let strikeBonus = this.currentFrame.calcFrameTotalForFirstTwoRolls();
    this.frames.slice(-1)[0].addBonusScore(strikeBonus);
  }

  _addSpareBonus() {
    let spareBonus = this.currentFrame.firstRollValue();
    this.frames.slice(-1)[0].addBonusScore(spareBonus);
  }
}

new_game = new Game();

const times = 12;
for(let i=0; i < times; i++){
  new_game.roll(10);
}

console.log(new_game.frames);
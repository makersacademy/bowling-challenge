class Frame {
  constructor () {
    this._rolls = [];
    this._bonus_score = 0;
  }

  isStrike() {
    return (this._rolls[0] == 10);
  }

  isSpare() {
    return (this._rolls[0] + this._rolls[1]== 10);
  }

  isFrameComplete() {
    if (this.isStrike()) { return true; }
    else if (this._rolls.length == 2 ) {return true;}
  }

  isFinalFrameComplete() {
    if (this._rolls.length == 3) {return true;}
  }

 // changing data
  addRoll(score) {
    this._rolls.push(score);
  }

  // changing data
  // input method which usually have a parameter
  addBonusScore(bonus) {
    this._bonus_score += bonus;
  }

  // output method which returns something 
  calcFrameTotal() {
    return this._rolls.reduce((a, b) => a + b, 0) + this._bonus_score;
  }

  calcFrameTotalForFirstTwoRolls() {
    return this._rolls.slice(0, 2).reduce((a, b) => a + b, 0);
  }

  firstRollValue() {
    return this._rolls[0];
  }
}

class Game {
  constructor (frame_class) {
    this.frames = [];
    this.frame_class = frame_class;
    this.currentFrame = new frame_class;
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
    if (this._isLastFrameStrike()) { this._addStrikeBonus(); }
    else if (this._isLastFrameSpare()) { this._addSpareBonus(); }
  }
  
  _isNotFirstFrame() {
    if (this.frames.length >= 1)  {return true; } 
    else {return false; }
  }

  _completeFrame() {
    this.updateFrameTotals();
    this.frames.push(this.currentFrame);
    this.currentFrame = new this.frame_class;
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

  _isLastFrameStrike() {
    if (this.frames.slice(-1)[0].isStrike()) { return true; }
    else {return false;}
  }

  _isLastFrameSpare() {
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

let game;
game = new Game(Frame);

const times = 12;
for(let i=0; i < times; i++){
  game.roll(10);
}

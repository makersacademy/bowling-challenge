class Game {
  constructor (frameFactory = FrameFactory) {
    this.frames = [];
    this.frameClass = frameFactory;
    this.currentFrame = this.frameClass.createFrame();
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

  _addAnyBonuses(){
    if (this._isLastFrameStrike()) { this._addStrikeBonus(); }
    else if (this._isLastFrameSpare()) { this._addSpareBonus(); }
  }
  
  _completeFrame() {
    this._addAnyBonuses();
    this.frames.push(this.currentFrame);
    this.currentFrame = this.frameClass.createFrame();
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
    if (this.frames.length < 1)  {return false; } 
    return this.frames.slice(-1)[0].isStrike();
  }

  _isLastFrameSpare() {
    if (this.frames.length < 1)  {return false; } 
    return this.frames.slice(-1)[0].isSpare();
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
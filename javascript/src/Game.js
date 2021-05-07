class Game{
  constructor(){
    this._frames = [];
    this._totalScore = 0;
  };

  getTotalScore() {
    return this._totalScore
  };

  getFrames(){
    return this._frames;
  };

  addFrame(frame){
    if (this.getFrames().length > 0) {
      this.bonuses(frame);
    };
    if (this.getFrames().length >= 2) {
      this.secondStrikeBonus(frame);
    }
    this._frames.push(frame);
    this._totalScore += frame.getScore();
  };

  finalFrame(){
    return (this.getFrames().length === 9);
  }

  calculateStrikeBonus(previous_frame, next_frame){
    let bonus
    if (next_frame.getRolls().length > 2) {
      bonus = next_frame.getRolls()[0] + next_frame.getRolls()[1];
    } else {
      bonus = next_frame.getScore() }
    previous_frame.amendScore(bonus)  ;
    this._totalScore += bonus;
  }

  secondStrikeBonus(frame) {
    let lastFrame = this.getFrames()[this.getFrames().length - 1]
    let previousFrameButOne = this.getFrames()[this.getFrames().length - 2]
    if (previousFrameButOne.isStrike() && lastFrame.isStrike())
    this.addScoreOfNextRoll(previousFrameButOne, frame);
  }

  addScoreOfNextRoll(frameToAmend, frame){
    let bonus = frame.getRolls()[0];
    frameToAmend.amendScore(bonus);
    this._totalScore += bonus;
  };

  bonuses(frame){
    let lastFrame = this.getFrames()[this.getFrames().length - 1]
    if (lastFrame.isStrike()) {
      this.calculateStrikeBonus(lastFrame, frame);
    };
    if (lastFrame.isSpare()) {
    this.addScoreOfNextRoll(lastFrame, frame);
    };
  };

  finalMessage(){
    if(this.getTotalScore() === 0) {
      return `Your game is finished! You scored ${this.getTotalScore()}. Oh dear, that's a gutter game :(`;
    }
    if(this.getTotalScore() === 300) {
      return `Your game is finished! You scored ${this.getTotalScore()}. You bowled the PERFECT GAME!`;
    }
    else {
      return `Your game is finished! You scored ${this.getTotalScore()}.`;
    };
  };


};

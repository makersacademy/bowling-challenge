Game.prototype.addBonusScores = function () {
  for (var frameIndex = 0; frameIndex < this._frames.length - 2; frameIndex++) {
    if (this._frames[frameIndex].isAStrike()) {
      console.log('Hi')
      if (this._frames[frameIndex + 1].isAStrike() === 10) {
        this._frames[frameIndex]._frameScore += this._frames[frameIndex + 1][0] + this._frames[frameIndex + 2][0];
      } 
    } else if (this._frames[frameIndex].isASpare()) {
      console.log('Hi')
      this._frames[frameIndex]._frameScore  += this._frames[frameIndex + 1][0];
    };
  };
};
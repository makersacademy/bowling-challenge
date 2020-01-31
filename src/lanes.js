'use strict';

class Lanes{

    constructor() {
      this._scorecard = [];
      this._bowlingBall = 0;
      this._gameCount = 0;
      this._frameIndex = 0;
    }

    getFrameIndex() {
      return this._frameIndex;
    }


  rolling(pins) {
    this._scorecard[this._bowlingBall++] = pins
  };

  // var self = this;

  sumOfBallsInFrame() {
    return this._scorecard[this._frameIndex] + this._scorecard[this._frameIndex + 1];
  };

  spareBonus() {
    return this._scorecard[this._frameIndex + 2];
  };

  strikeBonus() {
    return this._scorecard[this._frameIndex + 1] + this._scorecard[this._frameIndex + 2];
  };

  isStrike() {
    return this._scorecard[this._frameIndex + 10];
  };

  isSpare() {
    return this._scorecard[this._frameIndex + 7] + this._scorecard[this._frameIndex + 7];
  };

total(){

 for (var i = 0; i < 10; i ++) {
    if (this.isStrike()) {
      return this._gameCount += 10 + this.strikeBonus();
      this._frameIndex++;
    }
    else if (this.isSpare()) {
      return this._gameCount += 10 + this.spareBonus();
      this._frameIndex += 2;
    }
    else {
      return this._gameCount += this.sumOfBallsInFrame();
      this._frameIndex += 2;
    }
  }
};


  bowlingBalls() {
    return this._scorecard;
  }
};

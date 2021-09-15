class BowlingGame {

  constructor() {
    this.frameRolls = [];
    this.frameScores = [];
    this.STRIKE_VALUE = 10;
    this.INDEX_OF_FINAL_FRAME = 9;
  }

  playFrame(roll1, roll2 = 'no throw') {
    if (this.frameRolls.length >= 10) {
      throw new Error(`You have already played ${this.INDEX_OF_FINAL_FRAME + 1} frames`)
    }
    this._addRolls(roll1, roll2);
    this._addBonusScores();
  }

  getGameScore() {
    return this.frameScores.reduce(function(a,b) {
      return a + b;
    }, 0);
  }

  areBonusRollsNeeded() {
    if (this._getFrameTotal(this.frameRolls[this.INDEX_OF_FINAL_FRAME]) === this.STRIKE_VALUE && this.frameRolls[this.INDEX_OF_FINAL_FRAME].length === 2) {
      // if the final frame is a spare
      return true;
    } else if (this._getFrameTotal(this.frameRolls[this.INDEX_OF_FINAL_FRAME - 1]) === this.STRIKE_VALUE && this.frameRolls[this.INDEX_OF_FINAL_FRAME - 1].length === 1 && this._getFrameTotal(this.frameRolls[this.INDEX_OF_FINAL_FRAME]) === this.STRIKE_VALUE && this.frameRolls[this.INDEX_OF_FINAL_FRAME].length === 1) {
      // if the final 2 frames are strike
      return true;
    } else if (this._getFrameTotal(this.frameRolls[this.INDEX_OF_FINAL_FRAME]) === this.STRIKE_VALUE && this.frameRolls[this.INDEX_OF_FINAL_FRAME].length === 1) {
      // if the final frame is a strikes
      return true;
    } else {
      return false;
    }
  }

  addFinalBonusScores(roll1, roll2 = 'no throw') {
    if (this.areBonusRollsNeeded() === false) {
      throw new Error("You are not entitled to a bonus roll");
    }
    if (this._getFrameTotal(this.frameRolls[this.INDEX_OF_FINAL_FRAME]) === this.STRIKE_VALUE && this.frameRolls[this.INDEX_OF_FINAL_FRAME].length === 2) {
      // if your 10th frame is a spare, take 1 bonus roll and add it to frame total of final frame
      this.frameRolls[this.INDEX_OF_FINAL_FRAME].push(roll1);
      this.frameScores[this.INDEX_OF_FINAL_FRAME] += roll1;
    } else if (this._getFrameTotal(this.frameRolls[this.INDEX_OF_FINAL_FRAME]) === this.STRIKE_VALUE && this.frameRolls[this.INDEX_OF_FINAL_FRAME].length === 1 && this._getFrameTotal(this.frameRolls[this.INDEX_OF_FINAL_FRAME - 1]) === this.STRIKE_VALUE && this.frameRolls[this.INDEX_OF_FINAL_FRAME - 1].length === 1) {
      // if your 9th and 10th frames were both strikes, take 2 bonus rolls and add the first roll to the total score of the 9th and 10th frames, and second roll to total of 10th frame only.
      this.frameRolls[this.INDEX_OF_FINAL_FRAME].push(roll1, roll2);
      this.frameScores[this.INDEX_OF_FINAL_FRAME] += roll1 + roll2;
      this.frameScores[this.INDEX_OF_FINAL_FRAME - 1] += roll1;
    } else if (this._getFrameTotal(this.frameRolls[this.INDEX_OF_FINAL_FRAME]) === this.STRIKE_VALUE && this.frameRolls[this.INDEX_OF_FINAL_FRAME].length === 1) {
      // if your 10th frame is a strike, take 2 bonus rolls and add their total to the total score of 10th frame
      this.frameRolls[this.INDEX_OF_FINAL_FRAME].push(roll1, roll2);
      this.frameScores[this.INDEX_OF_FINAL_FRAME] += roll1 + roll2;
    }
  }

  _addRolls(roll1, roll2= 'no throw') {
    if (roll2 === 'no throw') {
      this.frameRolls.push([roll1]);
      this.frameScores.push(roll1);
    } else {
      this.frameRolls.push([roll1, roll2]);
      this.frameScores.push(roll1 + roll2);
    }
  }

  _getFrameTotal(array) {
    return array.reduce(function(a,b) {
      return a + b;
    }, 0);
  }

  _isPreviousFrameSpare() {
    return this._getFrameTotal(this.frameRolls[this.frameRolls.length - 2]) === this.STRIKE_VALUE && this.frameRolls[this.frameRolls.length - 2].length === 2;
    // if the total of the previous frame is 10 & it took 2 throws to get 10
  }

  _isPreviousFrameStrike() {
    return this._getFrameTotal(this.frameRolls[this.frameRolls.length - 2]) === this.STRIKE_VALUE && this.frameRolls[this.frameRolls.length - 2].length === 1;
    // if the total of the previous frame is 10 and it only took 1 throw
  }

  _isFrameBeforePreviousFrameStrike() {
    return this._getFrameTotal(this.frameRolls[this.frameRolls.length - 3]) === this.STRIKE_VALUE && this.frameRolls[this.frameRolls.length - 3].length === 1;
    // if the total of the frame before the previous frame is 10 and it only took 1 throw
  }

  _addBonusScores() {
    if (this.frameRolls.length >= 2 && this._isPreviousFrameSpare() === true) {
      this.frameScores[this.frameScores.length - 2] += this.frameRolls[this.frameRolls.length -1][0];
      // if at least 2 frames have taken place and the previous frame was a spare, add the first roll of latest frame to score of previous frame
    }
    if (this.frameRolls.length >= 2 && this._isPreviousFrameStrike() === true) {
      this.frameScores[this.frameScores.length - 2] += this.frameScores[this.frameScores.length - 1];
      // if at least 2 frames have taken place and the previous frame was a strike, add total score of latest frame to total score of the frame previous
    }
    if (this.frameRolls.length >= 3 && this._isPreviousFrameStrike() === true && this._isFrameBeforePreviousFrameStrike() === true) {
      this.frameScores[this.frameScores.length - 3] += this.frameRolls[this.frameRolls.length -1][0];
      // if at least 3 frames have taken place and the previous 2 frames were both strikes, then add the first throw of latest frame to the total of the frame 2 frames previous
    }
  }

}

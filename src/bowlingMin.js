'use strict';

class BowlingMin {
  constructor() {
    this.pinsArray = [];
    this.framesArray = [];
    this.scoringMatrix = '';
    this.gameScore = 0;
    this.STRIKE = 10;
    this.SPARE = 10;
    this.LAST_FRAME = 10;
  };

  gameScoreCurrent() {
    this.gameScore = 0;
    this.framesArray.forEach((frame) => {
      if ((typeof frame.frameScore) === 'number') {
        this.gameScore += frame.frameScore;
      };
    });
    return this.gameScore;
  };

  frameScoring() {
    this.framesArray.forEach((frame) => {
      if ((typeof frame.frameScore) === 'string') {
        if (/XXX/.test(this.scoringMatrix)) {
          frame.frameScore = this.STRIKE * 3;
          this.scoringMatrix = this.scoringMatrix.replace('X','');
        } else if (/XX\d/.test(this.scoringMatrix)) {
          frame.frameScore = (this.STRIKE * 2) + Number(this.scoringMatrix[2]);
          this.scoringMatrix = this.scoringMatrix.replace('X','');
        } else if (/X\d\//.test(this.scoringMatrix)) {
          frame.frameScore = this.STRIKE + this.SPARE;
          this.scoringMatrix = this.scoringMatrix.replace('X','');
        } else if (/X\d\d/.test(this.scoringMatrix)) {
          frame.frameScore = this.STRIKE + Number(this.scoringMatrix[1]) + Number(this.scoringMatrix[2]);
          this.scoringMatrix = this.scoringMatrix.replace('X','');
        } else if (/\d\/X/.test(this.scoringMatrix)) {
          frame.frameScore = this.SPARE + this.STRIKE;
          this.scoringMatrix = this.scoringMatrix.replace(/\d\//,'');
        } else if (/\d\/\d/.test(this.scoringMatrix)) {
          frame.frameScore = this.SPARE + Number(this.scoringMatrix[2]);
          this.scoringMatrix = this.scoringMatrix.replace(/\d\//,'');
        } else if (/\d\d/.test(this.scoringMatrix)) {
          frame.frameScore = Number(this.scoringMatrix[0]) + Number(this.scoringMatrix[1]);
          this.scoringMatrix = this.scoringMatrix.replace(/\d\d/,'');
        };
      };
    });
    return ;
  };

  framesArrayAdd(pinsArray) {
    this.framesArray.push({pinsArray: pinsArray, frameScore: ''});
    return this.framesArray;
  };

  isFrameComplete(framesArray, pinsArray) {
    if (framesArray.length === 9) {
      if (pinsArray.length === 1) {
        return false;
      } else if (Number(pinsArray[pinsArray.length-2]) + Number(pinsArray[pinsArray.length-1]) < this.LAST_FRAME) {
        return true;
      } else if (pinsArray.length === 3) {
          return true;
      };
    } else if (pinsArray[0] === 'X') {
        return true;
      } else if (pinsArray.length === 2) {
        return true;
      };
    return false;
  };

  gameCompleted(gameScore) {
    console.log(`Congratulations!! The game is complete: \n\tGameScore was - ${gameScore}`)
  };

  isGameComplete(framesArray) {
    if (framesArray.length === this.LAST_FRAME) {
      return true;
    };
    return false;
  };

  gameEngine(pinsDown) {
    if (this.isGameComplete(this.framesArray)) {
      this.gameCompleted(this.gameScore);
    } else {
      this.pinsArray.push(pinsDown.toString());
      this.scoringMatrix += pinsDown.toString();

      if(this.isFrameComplete(this.framesArray, this.pinsArray)) {
        this.framesArrayAdd(this.pinsArray);
        this.pinsArray = [];
      };

      this.frameScoring();
    };
    this.gameScoreCurrent();

    if (this.isGameComplete(this.framesArray)) {
      this.gameCompleted(this.gameScore);
    };
    return this.framesArray;
  };

  pinsAdd(pinsDown) {
    this.gameEngine(pinsDown);
    return this.framesArray;
  };
};

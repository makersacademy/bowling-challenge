'use strict';

class Frame {
  constructor(finishStates, roll1, roll2, frame1, frame2) {
    this.rolls = [roll1, roll2];
    this.currentRollIndex = 0;
    this.finishStates = finishStates;
    this.finishState = this.finishStates().unfinished;
    this.isBonus = false;
    this.adjacentFrames = [frame1, frame2];
  }

  getCurrentRoll() {
    return this.rolls[this.currentRollIndex];
  }

  nextRoll() {
    this.currentRollIndex += 1;
  }

  setCurrentRollScore(score) {
    this.getCurrentRoll().setScore(score);
  }

  finished() {
    if(this.finishState > 0) return true;
    return false;
  }

  rollText() {
    if(this.getFinishState() == this.finishStates().strike) return { firstRoll: 'X', secondRoll: ''};
    if(this.getFinishState() == this.finishStates().spare) return { firstRoll: this.rolls[0].getScore(), secondRoll: '/'};
    return { firstRoll: this.rolls[0].getScore(), secondRoll: this.rolls[1].getScore() }
  }

  basicTotalScore() {
    return this.rolls[0].getScore() + this.rolls[1].getScore();
  }

  totalScore() {
    if(this.getFinishState() == this.finishStates().finished) return this.basicTotalScore();
    if(this.getFinishState() == this.finishStates().spare) {
      return this.basicTotalScore() + this.adjacentFrames[0].rolls[0].getScore();
    }
    // basic logic
    // if(this.getFinishState() == this.finishStates().strike) {
    //   if(this.adjacentFrames[0].getFinishState() == this.finishStates().strike) {
    //     var score = this.basicTotalScore();
    //     return this.basicTotalScore() + this.adjacentFrames[0].rolls[0].getScore() + this.adjacentFrames[1].rolls[0].getScore();
    //   } else {
    //     return this.basicTotalScore() + this.adjacentFrames[0].rolls[0].getScore() + this.adjacentFrames[0].rolls[1].getScore();
    //   }
    // }


    // this is the actual logic for doing the calculation which is dum
    // if(strike) {
    //   var total = basicTotal;
    //   if(this.adjacentFrames(0).strike) {
    //     basicTotal += this.adjacentFrames[0].getScore;
    //     if(!this.adjacentFrames[1].unfinished) {
    //       basicTotal += this.adjacentFrames[1].getScore;
    //     }
    //   } else if(!this.adjacentFrames[0].unfinished) {
    //     basicTotal += this.adjacentFrames[0].rolls[0].getScore;
    //     basicTotal += this.adjacentFrames[0].rolls[1].getScore;
    //   }
    //   return totak;
    // }


    //I need an AdjacentFrames class which returns a valid total for a strike, or spare
    // it will have returnSpareBonus()
    //              returnStrikeBonus()
    // Therefore uninitialized values will be returned as 0 as well.

    //then in this function I can just say
    // if(this.getFinishState() == this.finishStates().strike) return this.basicTotalScore() + this.adjacentFrameManager.spareBonus();
    // if(this.getFinishState() == this.finishStates().strike) return this.basicTotalScore() + this.adjacentFrameManager.strikeBonus();
    // and it will get updated each frame

    // but this is not the case if its a bonus round because it will sum all three.
    // also what if the getScore is as yet undefined.
  }

  reportTotalScore() {
    if(!this.finished()) return '';
    return this.totalScore();
  }

  // finish state calculation
  getFinishState() {
    return this.finishState;
  }

  setFinishState(finishState) {
    this.finishState = finishState;
  }

  updateFinishState() {
    this.setFinishState(this._calculateFinishState());
  }

  _checkForFinished() {
    if(this.rolls[0].isScored() && this.rolls[1].isScored()) return true;
  }

  _checkForSpare() {
    if((this.rolls[0].getScore() + this.rolls[1].getScore()) == 10) return true;
  }

  _checkForStrike() {
    if(this.rolls[0].getScore() == 10) return true;
  }

  _calculateFinishState() {
    if(this._checkForStrike()) return this.finishStates().strike;
    if(this._checkForSpare()) return this.finishStates().spare;
    if(this._checkForFinished()) return this.finishStates().finished;
    return this.finishStates().unfinished;
  }
}

//Frame needs know about the roll data for frames on either side of it
//unless its a bonus frame, in which case it wouldn't need that information
//Frame --> NormalFrame
//      --> FinalFrame --> 3 Rolls and Calculates total regularly from just basic
//                         unless there is a strike in which case it counts the extra rolls
// roll manager keeps tracks of two rolls
// why not just create a length
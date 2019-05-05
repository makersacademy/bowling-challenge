const errorText = "A maximum of 10 can be scored per frame."
const error10th = "This bonus roll is only available in the 10th frame"
const error10thStrike = "This bonus roll is only available after 10th frame strike is scored"
const error10thStrikeSpare = "This bonus roll is only available after 10th frame strike or spare is scored"

function Frame() {
  this.firstRollScore = 0;
  this.secondRollScore = 0;
  this.bonusScore = 0;
  this.totalScore = 0;
  this.spareFlag = false;
  this.strikeFlag = false;
  this.firstTenthFrameBonusRollScore = 0;
  this.secondTenthFrameBonusRollScore = 0;
}

Frame.prototype = {
  constructor: Frame,
  
  enterFirstRollScore: function(numOfPins, scorecard) {
    if (numOfPins > 10) this.displayError(errorText);
    this.addToScorecard(scorecard)
    this.firstRollScore = numOfPins;
    if (numOfPins === 10) this.strikeFlag = true;
    this.calculateTotalScore();
    this.updateBonusIfNeeded(scorecard, numOfPins, 1);
  },

  enterSecondRollScore: function(numOfPins, scorecard) {
    if (this.firstRollScore + numOfPins > 10) this.displayError(errorText);
    this.secondRollScore = numOfPins;
    this.calculateTotalScore();
    if (this.totalScore === 10) this.spareFlag = true;
    this.updateBonusIfNeeded(scorecard, numOfPins, 2)
  },

  calculateTotalScore: function() {
    this.totalScore = this.firstRollScore + this.secondRollScore + this.bonusScore;
    return this.totalScore;
  },

  addToScorecard: function(scorecard) {
    scorecard.captureFrame(this);
  },

  checkForSpare: function(scorecard) {
    return scorecard.isPreviousFrameSpare(this);
  },

  checkForPreviousFrameStrike: function(scorecard) {
    return scorecard.isPreviousFrameStrike(this);
  },

  checkForStrikeTwoFramesPrevious: function(scorecard) {
    return scorecard.isTwoFramesPreviousStrike(this);
  },

  addSpareBonus: function(scorecard, numOfPins) {
    var bonusFrame = this.findFrame(scorecard, 1)
    bonusFrame.bonusScore += numOfPins;
    bonusFrame.calculateTotalScore();
  },

  addStrikeBonus2FramesPrev: function(scorecard, numOfPins) {
    var bonusFrame = this.findFrame(scorecard, 2)
    bonusFrame.bonusScore += (numOfPins + 10);
    bonusFrame.calculateTotalScore();
  },

  addStrikeBonus: function(scorecard, numOfPins) {
    var bonusFrame = this.findFrame(scorecard, 1)
    bonusFrame.bonusScore += (numOfPins + this.firstRollScore);
    bonusFrame.calculateTotalScore();
  },


  updateBonusIfNeeded: function(scorecard, numOfPins, rollType) {
    if (rollType === 1) {
      if (this.checkForSpare(scorecard)) this.addSpareBonus(scorecard, numOfPins);
      if (this.checkForPreviousFrameStrike(scorecard) && this.checkForStrikeTwoFramesPrevious(scorecard)) {
        this.addStrikeBonus2FramesPrev(scorecard, numOfPins);
      }
    } else {
      if (this.checkForPreviousFrameStrike(scorecard)) {
        this.addStrikeBonus(scorecard, numOfPins);
      }
    }
  },

  findFrame: function(scorecard, framesPrevious) {
    var i = scorecard.frames.indexOf(this);
    return scorecard.frames[i - framesPrevious]
  },

  enter10thFirstBonusRollScore: function(numOfPins, scorecard) {
    if (scorecard.frames.length < 10) this.displayError(error10th)
    if (scorecard.frames[9].totalScore < 10) this.displayError(error10thStrikeSpare)
    this.firstTenthFrameBonusRollScore = numOfPins;
    this.bonusScore += numOfPins;
    this.calculateTotalScore();
    this.updateBonusIfNeeded(scorecard, numOfPins, 2)
  },

  enter10thSecondBonusRollScore: function(numOfPins, scorecard) {
    if (scorecard.frames.length < 10) this.displayError(error10th);
    if (scorecard.frames[9].firstRollScore < 10) this.displayError(error10thStrike);
    this.secondTenthFrameBonusRollScore = numOfPins;
    this.bonusScore += numOfPins;
    this.calculateTotalScore();
  },

  displayError: function(errorMessage) {
    alert(errorMessage);
    throw new Error(errorMessage);
  }
}
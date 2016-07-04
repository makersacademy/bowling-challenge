Frame = function(game) {
	this.bonusScore = 0;
	this.totalScore = 0;
	this.rollOneScore = 0;
	this.rollTwoScore = 0;
	this.game = game;
};

Frame.prototype = {
  takeRollOne: function(numberOfPinsHit) {
  	this.rollOneScore = numberOfPinsHit;
  },
  takeRollTwo: function(numberOfPinsHit) {
  	this.rollTwoScore = this._applyScore(this._isEligibleForRollTwo(), numberOfPinsHit)
  },
  takeBonusRoll: function(numberOfPinsHit) {
  	this.rollThreeScore = this._applyScore(this._isEligibleForBonusRoll(), numberOfPinsHit);
  },
  calculateBonusScore: function() {
  	if(this._currentFrame()._isASpare()) { this._spareBonus(); }
  	this._doubleStrike() ? this._doubleStrikeBonus() : this._singleStrikeBonus();
  },
  calculateFrameNineBonusScore: function() {
  	if(this._isFrameNine()) {
  		if(this._isAStrike()) {
  			this._currentFrame().bonusScore = this._nextFrame().rollOneScore + this._nextFrame().rollTwoScore;
  		} else if(this._isASpare()) {
  			this._currentFrame().bonusScore = this._nextFrame().rollOneScore;
  		}
  	}
  },
  calculateTotalScore: function() {
  	if(this._isFinalFrame()) {
  		this.totalScore = this._calculateBaseScore() + this.rollThreeScore;
  	} else {
  		this.totalScore = this._calculateBaseScore() + this.bonusScore;
  	}
  },
  _isAStrike: function() {
  	return this.rollOneScore === 10;
  },
  _isNotAStrike: function() {
  	return this.rollOneScore < 10;
  },
  _isASpare: function() {
  	return this._isNotAStrike() && (this.rollOneScore + this.rollTwoScore === 10);
  },
  _isEligibleForRollTwo: function() {
  	return (this._isFinalFrame() || (this._isNotFinalFrame() && this._isNotAStrike()));
  },
  _isEligibleForBonusRoll: function() {
  	return (this._isFinalFrame() && (this._isAStrike() || this._isASpare()));
  },
  _isFinalFrame: function() {
  	return this.number === 10;
  },
  _isFrameNine: function() {
  	return this.number === 9;
  },
  _isNotFinalFrame: function() {
  	return this.number < 10;
  },
  _currentFrame: function() {
  	return this._listOfFrames()[this._listOfFrames().indexOf(this)]
  },
  _nextFrame: function() {
  	return this._listOfFrames()[this._listOfFrames().indexOf(this) + 1]
  },
  _nextNextFrame: function() {
  	return this._listOfFrames()[this._listOfFrames().indexOf(this) + 2]
  },
  _spareBonus: function() {
  	if(this._currentFrame()._isASpare()) {
  		this._currentFrame().bonusScore = this._nextFrame().rollOneScore + this._nextFrame().rollTwoScore;
  	}
  },
  _doubleStrikeBonus: function() {
  	if(this._doubleStrike()) {
  		this._currentFrame().bonusScore = this._nextNextFrame().rollOneScore + 10;
  	}
  },
  _singleStrikeBonus: function() {
  	if(this._currentFrame()._isAStrike()) {
  		this._currentFrame().bonusScore = this._nextFrame().rollOneScore + this._nextFrame().rollTwoScore;
  	}
  },
  _applyScore: function(eligibility, numberOfPinsHit) {
  	return eligibility ? numberOfPinsHit : 0
  },
  _listOfFrames: function() {
  	return this.game.frames
  },
  _calculateBaseScore: function() {
  	return this.baseScore = this.rollOneScore + this.rollTwoScore
  },
  _doubleStrike: function() {
  	return (this._currentFrame()._isAStrike() && this._nextFrame()._isAStrike())
  }
}

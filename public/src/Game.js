function Game(){
  this.bowls = []
  this.currentBowl = 0;
};

Game.prototype = {

	bowl: function(pins){
	  this.bowls[this.currentBowl++] = pins;
	},

	score: function(rollIndex){
		var score = 0;
			if (this._isStrike(rollIndex)){
				score += 10 + this._strikeBonus(rollIndex);
				rollIndex ++;
			}
			else if (this._isSpare(rollIndex)) {
				score += 10 + this._spareBonus(rollIndex);
				rollIndex += 2;
      }
			else {
				score += this._sumPins(rollIndex);
				rollIndex += 2;
			}
			return score;
	},

  newGame: function (){
    this.currentBowl = 0;
    this.bowls = []
  },

  _nextFrame: function () {
    this.currentFrame ++;
  },

	_sumPins: function(rollIndex){
	  return this.bowls[rollIndex] + this.bowls[rollIndex + 1];
	},

	_isStrike: function(rollIndex){
	  return this.bowls[rollIndex] === 10;
	},

	_isSpare: function(rollIndex){
  	return this.bowls[rollIndex] + this.bowls[rollIndex + 1] === 10;
	},

	_strikeBonus: function(rollIndex){
  	return this.bowls[rollIndex + 1] + this.bowls[rollIndex + 2];
	},

	_spareBonus: function(rollIndex){
  	return this.bowls[rollIndex + 2];
	}
};

function Game(){
  this.bowls = []
  this.currentBowl = 0;
  this.scoreCard = []
};

Game.prototype = {

	bowl: function(pins){
	  this.bowls[this.currentBowl++] = pins;
    this.scoreCard.push(pins);
	},

	score: function(){
		var score = 0;
    var frameIndex = 0;

    for (var frame = 0; frame < 10; frame ++){
			if (this._isStrike(frameIndex)){
				score += 10 + this._strikeBonus(frameIndex);
				frameIndex ++;
			}
			else if (this._isSpare(frameIndex)) {
				score += 10 + this._spareBonus(frameIndex);
				frameIndex += 2;
      }
			else {
				score += this._sumPins(frameIndex);
				frameIndex += 2;
			}
    }
		return score;
	},

  newGame: function (){
    this.currentBowl = 0;
    this.bowls = [];
    this.scoreCard = [];
  },

  _nextFrame: function () {
    this.currentFrame ++;
  },

	_sumPins: function(frameIndex){
	  return this.bowls[frameIndex] + this.bowls[frameIndex + 1];
	},

	_isStrike: function(frameIndex){
	  return this.bowls[frameIndex] === 10;
	},

	_isSpare: function(frameIndex){
  	return this.bowls[frameIndex] + this.bowls[frameIndex + 1] === 10;
	},

	_strikeBonus: function(frameIndex){
  	return this.bowls[frameIndex + 1] + this.bowls[frameIndex + 2];
	},

	_spareBonus: function(frameIndex){
  	return this.bowls[frameIndex + 2];
	}
};

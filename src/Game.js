function Game(){
  this.bowls = []
  this.currentBowl = 0;
};

Game.prototype = {

	bowl: function(pins){
	  this.bowls[this.currentBowl++] = pins;
	},

	sumPins: function(frameIndex){
	  return this.bowls[frameIndex] + this.bowls[frameIndex + 1];
	},

	isStrike: function(frameIndex){
	  return this.bowls[frameIndex] === 10;
	},

	isSpare: function(frameIndex){
  	return this.bowls[frameIndex] + this.bowls[frameIndex + 1] === 10;
	},

	strikeBonus: function(frameIndex){
  	return this.bowls[frameIndex + 1] + this.bowls[frameIndex + 2];
	},

	spareBonus: function(frameIndex){
  	return this.bowls[frameIndex + 2];
	}
};

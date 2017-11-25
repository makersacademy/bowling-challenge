function Game(){
  this.bowls = []
  this.currentBowl = 0;
};

Game.prototype = {

	bowl: function(pins){
	  this.bowls[this.currentBowl++] = pins;
	},

	sumPins: function(frame){
	  return this.bowls[frame] + this.bowls[frame + 1];
	},

	isStrike: function(frame){
	  return this.bowls[frame] === 10;
	},

	isSpare: function(frame){
  	return this.bowls[frame] + this.bowls[frame + 1] === 10;
	},

	spareBonus: function(frame){
  	return this.bowls[frame + 2];
	}

};

function Game() {
	this._rolls = [];
}

Game.prototype.rolls =function(){
	return this._rolls;
};

Game.prototype.roll = function (number) {
	this._rolls.push(number);
};

Game.prototype.getFinalScore = function() {
  return this.score(9);
}

Game.prototype.score = function(frame){
	var result = 0;
	var rollIndex = 0;

	for(var frameIndex = 0; frameIndex <= frame; frameIndex++) {
		if(this.isStrike(rollIndex)) {
			result += this.getStrikeScore(rollIndex);
			rollIndex += 1;
		}else if(this.isSpare(rollIndex)){
			result += this.getSpareScore(rollIndex);
			rollIndex += 2;
		}else{
			result += this._rolls[rollIndex] + this._rolls[rollIndex + 1];
			rollIndex += 2;
		};
	}
	return result;
};


Game.prototype.isStrike = function(rollIndex){
  return this._rolls[rollIndex] == 10;
}

Game.prototype.getStrikeScore = function(rollIndex){
  return 10 + this._rolls[rollIndex + 1] + this._rolls[rollIndex + 2];
}

Game.prototype.isSpare = function(rollIndex){
  return this._rolls[rollIndex] + this._rolls[rollIndex + 1] == 10;
}

Game.prototype.getSpareScore = function(rollIndex){
  return 10 + this._rolls[rollIndex + 2];
}

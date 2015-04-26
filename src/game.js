var Game = function() {
	this.rolls = []; //store rolls
	this.frame_total = 10;
  
};

Game.prototype.roll = function (pins) {
	this.rolls.push(pins);
};

Game.prototype.score = function () {
	var result =  0;
	for (var i = 0; i < 20; i++){
		result += this.rolls[i];
	}
	return result;
};

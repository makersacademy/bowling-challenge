var Player = function(){
	this._score = 0
}

Player.prototype.score = function() {
	// body...
	return this._score;
};

Player.prototype.setscore = function(score) {
	// body...
	this._score += score;
};

Player.prototype.roll = function() {
	var possible_rolls = [0,1,2,3,4,5,6,7,8,9,10]
	return possible_rolls[Math.floor(Math.random()*10)]
};


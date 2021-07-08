var bowlingGame = function(){
	this._frame = 0
	this._player = []

}

bowlingGame.prototype.getframe = function() {
	// body...
	return this._frame;
};

bowlingGame.prototype.addPlayer = function(player) {
	// body...
	this._player.push(player);
};

bowlingGame.prototype.players = function() {
	// body...
	return this._player;
};

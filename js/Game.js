function Game(){
	this.frame = [];
	this.result = 0;
};

Game.prototype.roll = function(pins){
	this.frame.push(pins);
};

Game.prototype.score = function(){
	for (var i = 0; i < this.frame.length; i++) {
		this.result += this.frame[i];
	}
	return this.result;
};

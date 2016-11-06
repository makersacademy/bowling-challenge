function Game() {
	this.score = 0
	this.frames = 10;
	this.frame = 0;
	this.lastFrame = 0;
  this.pins = 10;
  this.turns = 0
}

Game.prototype.bowl = function(knockedPins) {
	  this.pins -= knockedPins
	  this.turns += 1	  
	  this.scoreKeep(knockedPins)	  
	  this.turnCheck();
};

Game.prototype.turnCheck = function() {
  if(this.turns == 2 || this.pins == 0) {
  	this.frames -= 1
  	this.turns = 0
  	this.pins = 10
  }
};

Game.prototype.scoreKeep = function(points) {
	this.spare(points)
	this.strike(points)
	if (this.turns == 2 && this.pins == 0) {
		this._spare = true
	}
	else if (this.pins == 0) {
		this._strike = true
	} 
	this.score += points
};

Game.prototype.spare = function(points) {
  if (this._spare == true) {
		this.score += points
		this._spare = false
	}
};

Game.prototype.strike = function(points) {
  if (this.turns == 2 && this._strike == true  ) {
		this.score += points
		this._strike = false
	}
	else if (this._strike == true) {
		this.score += points
	}
};


function Game(frame){
	this.scoreCard = []
	this._frame = frame
	this.finalScore = 0 
	this.total = []
}

	Game.prototype.bowl = function() {
		if (this._frame.score.length < 1) {
		this._frame.firstBowl()
			if (this._frame.isStrike() === true) {
				this._addFrame()
			}
		}			
		else {
		this._frame.secondBowl()
		this._addFrame()
		}
	};

	Game.prototype.calculate = function() {
		this._flatten();
		this._sum();
	};

	Game.prototype._flatten = function() {
	this.total = this.scoreCard.reduce(function(a, b) {
  return a.concat(b);
	}, []);
	};

	Game.prototype._sum = function() {
		this.finalScore = this.total.reduce(function(a, b) {
  return a + b;
	});
	};

	Game.prototype._addFrame = function(frame){
  this.scoreCard.push(this._frame.score);
  this._frame.resetFrame();
}
	
	
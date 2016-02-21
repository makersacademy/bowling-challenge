function Game(frame){
	this.scoreCard = []
	this._frame = frame
	this.totalScore = 0 

}

Game.prototype.addFrame = function(frame){
  this.scoreCard.push(this._frame.score);
  this._frame.resetFrame();
}
	
	Game.prototype.bowl = function() {
		if (this._frame.score.length < 1) {
		this._frame.firstBowl()
		}
		else {
		this._frame.secondBowl()
		this.addFrame()
		}
	};




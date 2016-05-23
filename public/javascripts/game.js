function Game(scorer) {
	this._scorer = typeof scorer !== 'undefined' ? scorer : new Scorer();
}

Game.prototype.frameNumber = function() {
	if (this._scorer.frameScores.length == this._scorer.lastFrameNumber) {
		return (this._scorer.lastFrameNumber + 1);
	} else if (this._scorer.rollingFrame > this._scorer.lastFrameNumber) {
		return this._scorer.lastFrameNumber;
	} else {
		return this._scorer.rollingFrame;
	}
};

Game.prototype.isOver = function() {
	return (this.frameNumber() > this._scorer.lastFrameNumber);  
};
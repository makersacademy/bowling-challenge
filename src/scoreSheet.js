function ScoreSheet(){
	this.frames = [];
	this.frameLimit = 10;
}

ScoreSheet.prototype.addNewFrame = function(frame){
	this.frames.push(frame);
};

ScoreSheet.prototype.displayScore = function(frameNumber){

	var currentFrame = this.frames[frameNumber];
	var nextFrame = this.frames[frameNumber+1];
	var frameAfterNext = this.frames[frameNumber+2];

	if (this.frames[frameNumber]) {
		var currentFrameFirstRoll = currentFrame.roll[0];
		var currentFrameSecondRoll = currentFrame.roll[1];
		var currentFrameLastRoll = currentFrame.roll[2];
	}

	if(nextFrame) {
		var nextFrameFirstRoll = nextFrame.roll[0];
		var nextFrameSecondRoll = nextFrame.roll[1];
	}

	if (frameAfterNext) {
		var frameAfterNextFirstRoll = frameAfterNext.roll[0];
	}

	var currentFrameTotal = currentFrame.addTotalFramePoints();
	var display = null;

	if (frameNumber+1 === this.frameLimit && currentFrameLastRoll) {
		display = currentFrameTotal;
	} else if (isStrike() && nextFrame) {
		if (nextFrameSecondRoll) {
			display = calculateDoubleStrikePoints();
		} else if (frameAfterNext) {
			display = calculateTripleStrikePoints();
		}
	} else if(isSpare() && nextFrame) {
		display = calculateSparePoints();
	} else if (isNotBonus()) {
		display = currentFrameTotal;
	}

	return display;

	function isStrike() {
		return currentFrameFirstRoll === 10;
	}

	function calculateDoubleStrikePoints() {
		return currentFrameTotal + nextFrameFirstRoll + nextFrameSecondRoll;
	}

	function calculateTripleStrikePoints() {
		return currentFrameTotal + nextFrameFirstRoll + frameAfterNextFirstRoll;
	}

	function isSpare() {
		return currentFrameFirstRoll + currentFrameSecondRoll === 10;
	}

	function calculateSparePoints() {
		return currentFrameTotal + nextFrameFirstRoll;
	}

	function isNotBonus() {
		return currentFrameFirstRoll + currentFrameSecondRoll < 10;
	}
};

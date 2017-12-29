function ScoreSheet(){
	this.frames = [];
	this.frameLimit = 10;
}

ScoreSheet.prototype.addNewFrame = function(frame){
	this.frames.push(frame);
};

ScoreSheet.prototype.displayScore = function(frameNumber){
	if (this.frames[frameNumber]) {
		var currentFrameFirstRoll = this.frames[frameNumber].roll[0];
		var currentFrameSecondRoll = this.frames[frameNumber].roll[1];
		var currentFrameLastRoll = this.frames[frameNumber].roll[2];
	}

	if(this.frames[frameNumber+1]) {
		var nextFrameFirstRoll = this.frames[frameNumber+1].roll[0];
		var nextFrameSecondRoll = this.frames[frameNumber+1].roll[1];
	}

	if (this.frames[frameNumber+2]) {
		var frameAfterNextFirstRoll = this.frames[frameNumber+2].roll[0];
	}

	var currentFrameTotal = this.frames[frameNumber].addTotalFramePoints();

	if (frameNumber+1 === this.frameLimit && currentFrameLastRoll) {
		return currentFrameTotal;
	} else if (currentFrameTotal < 10) {
		return currentFrameTotal;
	} else if (currentFrameFirstRoll === 10) {
		if (this.frames[frameNumber+1]) {
			if (nextFrameFirstRoll < 10) {
				if (!nextFrameSecondRoll) return null;
				return currentFrameFirstRoll + nextFrameFirstRoll + nextFrameSecondRoll;
			} else if (nextFrameFirstRoll === 0) {
				return null;
			} else {
				if (!this.frames[frameNumber+2]) return null;
				return currentFrameFirstRoll + nextFrameFirstRoll + frameAfterNextFirstRoll;
			}
		} else {
			return null;
		}
	} else if (currentFrameTotal === 10 && currentFrameFirstRoll < 10) {
		if (this.frames[frameNumber+1]) {
			return currentFrameTotal + nextFrameFirstRoll;
		} else {
			return null;
		}
	}

};

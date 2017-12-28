function ScoreSheet(){
	this.frames = [];
}

ScoreSheet.prototype.addNewFrame = function(frame){
	this.frames.push(frame);
};

ScoreSheet.prototype.displayScore = function(frameNumber){
	if (this.frames[frameNumber]) {
		var currentFrameFirstRoll = this.frames[frameNumber].roll[0];
		var currentFrameSecondRoll = this.frames[frameNumber].roll[1];
	}

	if(this.frames[frameNumber+1]) {
		var nextFrameFirstRoll = this.frames[frameNumber+1].roll[0];
		var nextFrameSecondRoll = this.frames[frameNumber+1].roll[1];
	}

	if (this.frames[frameNumber+2]) {
		var frameAfterNextFirstRoll = this.frames[frameNumber+2].roll[0];
	}

	var currentFrameTotal = this.frames[frameNumber].addTotalFramePoints();

	// console.log(currentFrameFirstRoll, currentFrameSecondRoll)
	if (currentFrameTotal < 10) {
		// console.log(currentFrameFirstRoll, currentFrameSecondRoll)
		return currentFrameFirstRoll + currentFrameSecondRoll;
	}

	if (currentFrameFirstRoll === 10) {
		if (this.frames[frameNumber+1]) {
			if (nextFrameFirstRoll < 10) {
				if (!nextFrameSecondRoll) return null;
				// console.log(this.frames[frameNumber+1]);
				// console.log(currentFrameFirstRoll, nextFrameFirstRoll, nextFrameSecondRoll);
				return currentFrameFirstRoll + nextFrameFirstRoll + nextFrameSecondRoll;
			} else if (nextFrameFirstRoll === 0) {
				return null;
			} else {
				if (!this.frames[frameNumber+2]) return null;
				return currentFrameFirstRoll + nextFrameFirstRoll + frameAfterNextFirstRoll;
			}
		}
		else {
			// console.log(currentFrameFirstRoll)
			return null;
		}
	}



	// console.log('a', currentFrameFirstRoll, currentFrameSecondRoll, nextFrameFirstRoll);
	if (currentFrameTotal === 10 && currentFrameFirstRoll < 10) {
		// console.log('first', currentFrameTotal, nextFrameFirstRoll);
		// console.log('second', this.frames[frameNumber+1]);
		if (this.frames[frameNumber+1]) {
			// console.log(this.frames[frameNumber+1]);
			// console.log('a', currentFrameFirstRoll, currentFrameSecondRoll, nextFrameFirstRoll);
			// console.log('b', currentFrameTotal, nextFrameFirstRoll);
			return currentFrameTotal + nextFrameFirstRoll;
		} else {
			return null;
		}
	}



	// console.log('current1', currentFrameFirstRoll)
	// console.log('current2', currentFrameSecondRoll)
	// console.log('next1', nextFrameFirstRoll)
	// console.log('next2', nextFrameSecondRoll)
	// console.log('total first', currentFrameTotal)
};

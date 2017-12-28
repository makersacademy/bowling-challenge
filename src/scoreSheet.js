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

	// if (currentFrameFirstRoll === 10 && !nextFrameFirstRoll) return null
	if (currentFrameFirstRoll === 10) {
		if (this.frames[frameNumber+1]) {
      //
			// if (!this.frames[frameNumber+1]) return null;
			// var nextFrameFirstRoll = this.frames[frameNumber+1].roll[0];
			// var nextFrameSecondRoll = this.frames[frameNumber+1].roll[1];
			if (nextFrameFirstRoll < 10) {
				if (!nextFrameSecondRoll) return null;
				// console.log(this.frames[frameNumber+1]);
				// console.log(currentFrameFirstRoll, nextFrameFirstRoll, nextFrameSecondRoll);
				return currentFrameFirstRoll + nextFrameFirstRoll + nextFrameSecondRoll;
			} else if (nextFrameFirstRoll === 0) {
				return null;
			} else {
				if (!this.frames[frameNumber+2]) return null;
				var frameAfterNextFirstRoll = this.frames[frameNumber+2].roll[0];
				return currentFrameFirstRoll + nextFrameFirstRoll + frameAfterNextFirstRoll;
			}
		}
		else {
			// console.log(currentFrameFirstRoll)
			return null;
		}
	}

	var currentFrameTotal = this.frames[frameNumber].addTotalFramePoints();
	// if (!this.frames[frameNumber+1]) return null;
	// var nextFrameTotal = this.frames[frameNumber+1].addTotalFramePoints();
	// console.log('a', currentFrameFirstRoll, currentFrameSecondRoll, nextFrameFirstRoll);
	if (currentFrameTotal === 10 && currentFrameFirstRoll < 10) {
		// console.log('first', currentFrameTotal, nextFrameFirstRoll);
		// console.log('second', this.frames[frameNumber+1]);
		if (this.frames[frameNumber+1]) {
			// if (!this.frames[frameNumber+1]) return null;
			// var nextFrameFirstRoll = this.frames[frameNumber+1].roll[0];
			// var nextFrameSecondRoll = this.frames[frameNumber+1].roll[1];
			console.log(this.frames[frameNumber+1]);
			// if (!nextFrameFirstRoll) return null;
			console.log('a', currentFrameFirstRoll, currentFrameSecondRoll, nextFrameFirstRoll);
			console.log('b', currentFrameTotal, nextFrameFirstRoll);
			// console.log('c', currentFrameTotal, nextFrameTotal);
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

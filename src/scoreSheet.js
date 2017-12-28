function ScoreSheet(){
	this.frames = [];
}

ScoreSheet.prototype.addNewFrame = function(frame){
	this.frames.push(frame);
};

ScoreSheet.prototype.displayScore = function(frameNumber){
	if (!this.frames[frameNumber]) return null;
	var currentFrameFirstRoll = this.frames[frameNumber].roll[0];
	var currentFrameSecondRoll = this.frames[frameNumber].roll[1];

	// if (currentFrameFirstRoll === 10 && !nextFrameFirstRoll) return null

	if (currentFrameFirstRoll === 10) {
		if (this.frames[frameNumber+1]) {

			if (!this.frames[frameNumber+1]) return null;
			var nextFrameFirstRoll = this.frames[frameNumber+1].roll[0];
			var nextFrameSecondRoll = this.frames[frameNumber+1].roll[1];

			if (nextFrameFirstRoll < 10) {
				if (!nextFrameSecondRoll) return null;
				console.log(this.frames[frameNumber+1])
				console.log(currentFrameFirstRoll, nextFrameFirstRoll, nextFrameSecondRoll)
				return currentFrameFirstRoll + nextFrameFirstRoll + nextFrameSecondRoll;
			} else if (nextFrameFirstRoll === 0) {
				return null
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
	// if (currentFrameFirstRoll === 10 && nextFrameFirstRoll < 10) {
	// 	return currentFrameFirstRoll + nextFrameFirstRoll + nextFrameSecondRoll;
	// }

	// if (!this.frames[frameNumber+1]) return null;
	// var nextFrameFirstRoll = this.frames[frameNumber+1].roll[0];
	// var nextFrameSecondRoll = this.frames[frameNumber+1].roll[1];

	// console.log(this.frames)
	// console.log(this.frames[frameNumber+1])
	// if (!this.frames[frameNumber+1]) return null;
	// var nextFrameFirstRoll = this.frames[frameNumber+1].roll[0];
	// var nextFrameSecondRoll = this.frames[frameNumber+1].roll[1];



	var currentFrameTotal = this.frames[frameNumber].addTotalFramePoints();

	console.log('current1', currentFrameFirstRoll)
	console.log('current2', currentFrameSecondRoll)
	console.log('next1', nextFrameFirstRoll)
	console.log('next2', nextFrameSecondRoll)
	console.log('total first', currentFrameTotal)

	// if (currentFrameFirstRoll === 10) {
	// 	if (this.frames[frameNumber+1]) {
	// 		if (nextFrameFirstRoll === 10 && !frameAfterNextFirstRoll) {
	// 			return null;
	// 		} else {
	// 			console.log(currentFrameFirstRoll, nextFrameFirstRoll, nextFrameSecondRoll)
	// 			return currentFrameFirstRoll + nextFrameFirstRoll + nextFrameSecondRoll;
	// 		}
	// 	}
	// }

};

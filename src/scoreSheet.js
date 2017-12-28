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
	// console.log(this.frames)
	// console.log(this.frames[frameNumber+1])
	if (!this.frames[frameNumber+1]) return null;
	var nextFrameFirstRoll = this.frames[frameNumber+1].roll[0];
	var nextFrameSecondRoll = this.frames[frameNumber+1].roll[1];
	var currentFrameTotal = this.frames[frameNumber].addTotalFramePoints();

	// console.log(currentFrameFirstRoll)
	// console.log(currentFrameSecondRoll)
	// console.log(nextFrameFirstRoll)
	// console.log(nextFrameSecondRoll)
	// console.log(currentFrameTotal)

	if (currentFrameFirstRoll === 10) {
		if (nextFrameFirstRoll && nextFrameSecondRoll !== null) {
			return currentFrameFirstRoll + nextFrameFirstRoll + nextFrameSecondRoll;
		}
	}

};

function ScoreSheet(){
	this.frames = [];
}

ScoreSheet.prototype.addNewFrame = function(frame){
	this.frames.push(frame);
};

ScoreSheet.prototype.scoreDisplay = function(frameNumber){
	var currentFrameFirstRoll = this.frames[frameNumber].roll[0];
	if (currentFrameFirstRoll === 10) return null;
};

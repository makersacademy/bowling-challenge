function BowlingScoreCard() {

    this.frames = [];

}

BowlingScoreCard.prototype.getFrames = function(){
    return this.frames;
}

BowlingScoreCard.prototype.setFrames = function(){
    for(var i = 1; i < 11; i++){
        this.frames.push(new Frame());
    }
}

BowlingScoreCard.prototype.currrentFrameIndex = function(){
    return this.getFrames().findIndex(function(frame) {
        // below i call frame.complete because what if the first value is a strike
        // then i have to get the first frame where the second score is undefined
        // and the first score is not == 10, so instead i called a .complete
        return (((frame.getSecondScore() != 'undefined') && !frame.complete()));
    });
}

BowlingScoreCard.prototype.updatePreviousFrame = function(previousFrame,currentFrame){
    if  (previousFrame.isStrike()){
        previousFrame.total = previousFrame.totalScore() + currentFrame.totalScore();
    }
	else if(previousFrame.isSpare()){
        previousFrame.total = previousFrame.totalScore() + currentFrame.getFirstScore();
    }
}

BowlingScoreCard.prototype.roll = function(n){
    for(var i = 0; i < n; i++){
        var currentFrameIndex = this.currrentFrameIndex();
	
        var currentFrame = this.getFrames()[currentFrameIndex];
        currentFrame.score();

        currentFrame.totalScore();

        if (currentFrameIndex != 0){
            var previousFrame = this.getFrames()[currentFrameIndex-1];
            this.updatePreviousFrame(previousFrame, currentFrame)
        }
    }
}

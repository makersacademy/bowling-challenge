function BowlingScoreCard() {

    this.frames = [];

}

BowlingScoreCard.prototype.getFrames = function(){
    return this.frames;
}

BowlingScoreCard.prototype.setFrames = function(frame){
    for(var i = 1; i < 11; i++){
        this.frames.push(new frame());
    }
}

BowlingScoreCard.prototype.currrentFrameIndex = function(){
    return this.getFrames().findIndex(function(frame) {
        return (typeof frame.getFirstScore() == 'undefined');
    });
}

BowlingScoreCard.prototype.updatePreviousFrame = function(previousFrame,currentFrame){
    if  (previousFrame.isStrike()){
        previousFrame.totalScore() + currentFrame.totalScore();
    }
	else if(previousFrame.isSpare()){
        previousFrame.totalScore() + currentFrame.getFirstScore();
    }
}


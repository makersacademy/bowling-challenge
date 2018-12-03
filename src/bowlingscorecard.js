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
        return (typeof frame.getFirstScore() == 'undefined');
    });
}

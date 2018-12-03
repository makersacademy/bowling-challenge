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


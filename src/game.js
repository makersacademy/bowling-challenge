function Game() {
    this.frames = this.initializeFrames();
    this.currentFrame = 0;
    this.currentBowl = 1;
};

Game.prototype.initializeFrames = function() {
    array = []
    for (var i = 0; i < 9; i++) {
        frame = new Frame(false);
        array.push(frame);
    }
    frame = new Frame(true);
    array.push(frame);
    return array;
};

Game.prototype.getTotalScore = function() {
    total = 0;
    for (var i = 0; i < this.frames.length; i++) {
        total += this.frames[i].getTotal();
    }
    return total;
};

Game.prototype.roll = function(pins) {
    var frame = this.frames[this.currentFrame]
    if (this.currentBowl === 1) {
        frame.firstBowl(pins);
    } else {
        frame.secondBowl(pins);
    }
    this.giveBonuses(pins);
    this.setNextBowl(frame)
};

Game.prototype.giveBonuses = function(pins) {
    for (var i = 1; i <= 2; i++) {
        frameIdx = this.currentFrame - i;
        if (frameIdx >= 0) {
            prevFrame = this.frames[frameIdx];
            this.giveBonus(prevFrame, pins)
        }
    }
};

Game.prototype.setNextBowl = function(frame) {
    if ((this.currentBowl === 1) && (frame.secondBowlAllowed)) {
        this.currentBowl = 2; 
    } else if (frame.thirdBowlAllowed) {    
        this.currentBowl = 3;
    } else {
        this.currentFrame += 1; // TO DO: if it is the last frame
        this.currentBowl = 1;
    }
};

Game.prototype.giveBonus = function(frame, pins) {
    if (frame.isAwaitingBonus()) {
        frame.addBonus(pins)
    }
};

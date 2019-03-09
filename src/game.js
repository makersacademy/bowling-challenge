function Game() {
    this.frames = this.initializeFrames();
    this.currentFrame = 0;
    this.currentBowl = 1;
};

Game.prototype.initializeFrames = function() {
    array = []
    for (var i = 0; i < 10; i++) {
        frame = new Frame();
        array.push(frame);
    }
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
    if (this.currentFrame == 0) {
        return
    };

    var prevFrame = this.frames[this.currentFrame - 1];
    if (prevFrame.isAwaitingBonus()) {
        prevFrame.addBonus(pins)
    }
    //TO DO: checking if frame before previous needs a bonus
};

Game.prototype.setNextBowl = function(frame) {
    if ((this.currentBowl === 1) && (frame.secondBowlAllowed)) {
        this.currentBowl = 2; 
    } else {
        this.currentFrame += 1; // TO DO: if it is the last frame
        this.currentBowl = 1;
    }
};

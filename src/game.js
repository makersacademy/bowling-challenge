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
    if (this.currentBowl === 1) {
        this.frames[this.currentFrame].firstBowl(pins);
        this.giveBonuses(pins);
        this.currentBowl = 2;
    } else {
        this.frames[this.currentFrame].secondBowl(pins);
        this.currentBowl = 1;
        this.currentFrame += 1;
        // TO DO: if it is the last frame
    }
};

Game.prototype.giveBonuses = function(pins) {
    if (this.currentFrame == 0) {
        return
    };

    var prevFrame = this.frames[this.currentFrame - 1];
    if (prevFrame.isAwaitingBonus()) {
        prevFrame.addBonus(pins)
    }
};
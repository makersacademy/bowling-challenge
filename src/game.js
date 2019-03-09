function Game() {
    this.frames = this.initializeFrames();
    this.currentFrame = 1;
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
        this.frames[this.currentFrame - 1].firstBowl(pins);
        this.currentBowl = 2;
    } else {
        this.frames[this.currentFrame - 1].secondBowl(pins);
        this.currentBowl = 1;
        // TO DO: next frame if not last frame
    }
};
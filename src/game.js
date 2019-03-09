function Game() {
    this.frames = this.initializeFrames();
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
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
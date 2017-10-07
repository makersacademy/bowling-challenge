function Game() {
this.score = 0
this.frames = []
}

Game.prototype.bowl = function(score) {
var frame = [];
frame.push(score);
this.frames.push(frame);

};

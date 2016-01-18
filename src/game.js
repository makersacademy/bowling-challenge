function Game() {
  this.frames = [];
  this.scores = [];
  this.score = 0;
  this.frameCount = 0;
}

Game.prototype.playFrame = function(frame) {
  var frame = new Frame;
		frame.firstRoll();
		frame.secondRoll();
		this.frames.push(frame);
};

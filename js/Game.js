function Game() {
  this.frames = []
}

Game.prototype.playFrame = function () {
  var currentFrame = new Frame();
  this.frames.push(currentFrame.shots);
  this.gameOver();
};



Game.prototype.gameOver = function () {
  var length = this.frames.length;
  if (length === 10 && final_frame !== 10) {
    var final_frame = this.frames[9][0] + this.frames[9][1];
    console.log("That just about does it mate!")
    console.log("Your final score is " + this.calculateScore());
  }
};





Game.prototype.calculateScore = function () {
  var score = 0
  var copyFrames = this.frames
  for (var i = 0; i < copyFrames.length; i++) {
    var frame = copyFrames[i]
    if (frame[0] === 10) {
      frame[0] = 10 + copyFrames[i + 1][0] + copyFrames[i + 1][1]
    }
    if (frame[0] + frame[1] === 10 && frame[0] !== 10){
      frame[0] = 10 + copyFrames[i + 1][0];
      frame[1] = 0;
    }
    score += frame[0] + frame[1];
  }
  return score;
};

function Game () {
  this.frames = [];
};

Game.prototype.add = function (frame) {
  this.frames.push(frame);
};

Game.prototype.calculateTotalScore = function () {
  var currentTotalScore = 0
  for (var i = 0; i < this.frames.length; i++) {
    console.log(this.frames[i].score);
    currentTotalScore += this.frames[i].score;
  };
  return currentTotalScore
};

Game.prototype.start = function () {
  for (var i = 0; i < 10; i++) {
    var frame = new Frame();
    frame.play();
    this.frames.push(frame);
    if (i>0) {
      this.frames[i-1].adjustForBonus(frame);
    };
  };
  alert("Your score is: " + this.calculateTotalScore());
};

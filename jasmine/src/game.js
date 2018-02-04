function Game(){
  this.frames = [];
  this.runningTotal = 0;
  this.strikeCount = 0;
}

Game.prototype.startGame = function(){
  for (var i = 0; i < 10; i++) {
    roll(this, frame[i]);
  }

};

Game.prototype.scores = function (frameScore, scoreSoFar) {
  this.frames.push(frameScore, scoreSoFar);
  this.runningTotal += scoreSoFar;
};

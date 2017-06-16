require('./frame');

function Game() {
  this.scores = []
  this.gameFrames = []
}

Game.prototype.frameScore = function () {

};

Game.prototype.makeFrame = function (number) {
  frame = new Frame(number)
  this.gameFrames << frame
};

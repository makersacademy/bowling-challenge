function Bowling() {
  this.frames = {1: [2,2], 2: [],
                 3: [], 4: [],
                 5: [], 6: [],
                 7: [], 8: [],
                 9: [], 10: []
               };
  this.currentFrame = 1;
  this.totalScore = 1;
  this.totalScore = 0;
}
var game;

game = new Bowling();

Bowling.prototype.calculateScore = function (pins) {
    game.frameNum();
    game.addScore(pins);
    game.totalScore += pins;
};

Bowling.prototype.addScore = function (pins) {
  game.frames[game.currentFrame].push(pins);
};

Bowling.prototype.frameNum = function () {
  if(game.frames[game.currentFrame].length === 2) {
    this.currentFrame ++;
  }
};

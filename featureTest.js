var one = new Frame();
game = new Game(one);
game.logRoll(10);
game.logFrameScore(one);
game.currentFrame.isStrike();
game.currentFrame.isComplete();

var two = new Frame();
game.addFrame(two);
game._completedFrames;
game.logRoll(3);
game.logRoll(4);
game.logFrameScore(two);
game.getScore();

game._completedFrames.slice(-1)[0].isStrike()
game.currentFrame.getScore();
game.addBonus(two);
game.getScore();

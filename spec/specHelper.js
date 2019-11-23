
function standardGame() {
  game = new Game;
  var frame = new Frame(1, 6);
  game.endRoll(frame.endFrame);
  var frame = new Frame(5, 3);
  game.endRoll(frame.endFrame);
  var frame = new Frame(4, 1);
  game.endRoll(frame.endFrame);
  var frame = new Frame(2, 7);
  game.endRoll(frame.endFrame);
  var frame = new Frame(6, 3);
  game.endRoll(frame.endFrame);
  var frame = new Frame(3, 3);
  game.endRoll(frame.endFrame);
  var frame = new Frame(7, 2);
  game.endRoll(frame.endFrame);
  var frame = new Frame(9, 0);
  game.endRoll(frame.endFrame);
  var frame = new Frame(8, 1);
  game.endRoll(frame.endFrame);
  var frame = new Frame(7, 2);
  game.endRoll(frame.endFrame);
  return game.totalScore()
};

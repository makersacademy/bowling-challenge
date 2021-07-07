function gameRollTwo() {
  game.roll(1);
  game.roll(4);
  game.roll(7);
  game.roll(1);
}

function rollGame(pins, rolls) {
  for (var i = 0; i < rolls; i++){
    game.roll(pins);
  }
}



// function standardGame() {
//   game = new Game;
//   var frame = new Frame(1, 6);
//   game.endRoll(frame.endFrame);
//   var frame = new Frame(5, 3);
//   game.endRoll(frame.endFrame);
//   var frame = new Frame(4, 1);
//   game.endRoll(frame.endFrame);
//   var frame = new Frame(2, 7);
//   game.endRoll(frame.endFrame);
//   var frame = new Frame(6, 3);
//   game.endRoll(frame.endFrame);
//   var frame = new Frame(3, 3);
//   game.endRoll(frame.endFrame);
//   var frame = new Frame(7, 2);
//   game.endRoll(frame.endFrame);
//   var frame = new Frame(9, 0);
//   game.endRoll(frame.endFrame);
//   var frame = new Frame(8, 1);
//   game.endRoll(frame.endFrame);
//   var frame = new Frame(7, 2);
//   game.endRoll(frame.endFrame);
//   return game.totalScore()
// };

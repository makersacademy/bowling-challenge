function rollASeven() { 
  game.firstRoll(3)
  game.secondRoll(4)
  game.endFrame();
}

function rollAStrike() {
  game.firstRoll(10);
  game.secondRoll(0);
  game.endFrame();
}

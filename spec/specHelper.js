standardScore = function(){
  frame = new Frame(game.frame)
  frame.addFirstScore(1);
  frame.addSecondScore(5);
  frame.addTotal();
  game.addFrame(frame)
  game.calculateScores();
};

strike = function(){
  frame = new Frame(game.frame)
  frame.addFirstScore("x");
  game.addFrame(frame)
  game.calculateScores();
};

spare = function(){
  frame = new Frame(game.frame)
  frame.addFirstScore(5);
  frame.addSecondScore("/");
  frame.addTotal();
  game.addFrame(frame)
  game.calculateScores();
};

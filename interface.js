var game = new Game();
var frame = new Frame(game.frame);

$("#save-score").on('click', function(){
  if (game.gameOver != true) {
    score = ($("#enter-score").val());
    if (score === "x" || score === "/" || score < 10) {
      if (game.turn % 2 != 0) {
        frame.addFirstScore(($("#enter-score").val()));
        if (frame.firstTurn == "x") {
          applyStrikeFormat();
        } else {
          displayScore(frame.firstTurn)
        }
        game.turn ++
      } else {
        secondTurn();
        game.overCheck();
      }
    } else {
      alert("Please enter a valid score: 1-9 or 'x' or '/'")
    }
  } else {
    alert("Game over, click restart to play another")
  }
});





displayScore = function(turn){
  $('#score-' + game.turn.toString()).text(turn);
};

displayTotal = function(){
  for (var i = 0; i < game.scoreTable.length; i++) {
    if (game.scoreTable[i].bonusApplied === true) {
      $('#total-' + (i+1).toString()).text(game.scoreTable[i].total);
    }
  }
};


secondTurn = function(){
  scoreGuard();
  frame.addSecondScore(($("#enter-score").val()));
  displayScore(frame.secondTurn)
  game.turn ++
  game.addFrame(frame);
  game.calculateScores();
  frame = new Frame(game.frame)
  displayTotal();
};

applyStrikeFormat = function(){
  displayScore(frame.firstTurn)
  game.turn ++
  displayScore("-")
  game.addFrame(frame);
  game.calculateScores();
  frame = new Frame(game.frame)
  displayTotal();
};


frame10 = function(){
  if (frame.firstTurn === "x") {

  } else if (true) {

  }
};

reset = function(){
  clearScores();
  clearFrameTotals();
  newGame();
};

clearScores = function(){
  for (var i = 0; i < 20; i++) {
    displayScore = function(turn){
      $('#score-' + i.toString()).text();
    };
  }
};

clearFrameTotals = function(){
  for (var i = 0; i < 10; i++) {
    displayScore = function(turn){
      $('#score-' + i.toString()).text();
    };
  }
};

newGame = function(){
  var game = new Game();
  var frame = new Frame(game.frame);
};

scoreGuard = function(){
  score = ($("#enter-score").val());
  if (score === '/') {
    return;
  } else if ((score + frame.firstTurn) < 10) {
    alert("Score can not exceed 10, please try again")
  }
};

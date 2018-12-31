var game = new Game();
var frame = new Frame(game.frame);

$("#new-game").on('click', function(){
  reset();
});

$("#save-score").on('click', function(){
  if (game.gameOver != true) {
    score = ($("#enter-score").val());
    if (isScoreValid(score)) {
      if (game.frame > 10 && game.gameOver === false) {
        playLastFrame();
      }else {
        play();
      }
    } else {
      alert("Please enter a valid score: 1-9 or 'x' or '/'")
    }
  } else {
    alert("Game over, click restart to play another")
  }
  finalTotal();
});


displayScore = function(turn){
  if (game.frame < 11) {
    $('#score-' + game.turn.toString()).text(turn);
  } else {
    finalBonusDisplay();
  }
};

displayTotal = function(){
  for (var i = 0; i < game.scoreTable.length; i++) {
    if (game.scoreTable[i].bonusApplied === true) {
      $('#total-' + (i+1).toString()).text(game.scoreTable[i].total);
    }
  }
};

finalTotal = function(){
  if (game.gameOver === true) {
    $('#final-total').text(game.scoreTable[9].total);
  }
};

play = function(){
  if (game.turn % 2 != 0) {
    firstTurn();
  } else {
    secondTurn();
  }
};

firstTurn = function(){
  frame.addFirstScore(($("#enter-score").val()));
  if (frame.firstTurn === "x" || frame.firstTurn === "X") {
    applyStrikeFormat();
  } else {
    displayScore(frame.firstTurn)
  }
  game.turn ++
};

secondTurn = function(){
  scoreGuard(score);
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


playLastFrame = function(){
  if (game.scoreTable[9].firstTurn === "x" || game.scoreTable[9].firstTurn === "X") {
    if (score != "x" || score != "X"){
      playOn();
    } else {
      lastFrameStrike();
    }
  } else if (game.scoreTable[9].secondTurn === "/") {
    lastFrameSpare();
  }
  game.overCheck();
};

playOn = function(score){
  if (game.turn % 2 != 0) {
    frame.addFirstScore(($("#enter-score").val()));
    game.turn ++
  } else {
    frame.addSecondScore(($("#enter-score").val()));
    game.addFrame(frame);
    game.calculateScores();
    displayTotal();
  }
  finalBonusDisplay()
}

lastFrameStrike = function(score){
  frame.addFirstScore(($("#enter-score").val()));
  finalBonusDisplay();
  game.addFrame(frame);
  game.calculateScores();
  displayTotal();
};

lastFrameSpare = function(score){
  frame.addFirstScore(($("#enter-score").val()));
  finalBonusDisplay();
  game.addFrame(frame);
  game.calculateScores();
  displayTotal();
};

finalBonusDisplay = function(){
  $("#score-20").append("  [" + score + "]  ")
};

reset = function(){
  clearScores();
  clearFrameTotals();
  game = new Game();
  frame = new Frame(game.frame);
};

clearScores = function(){
  for (var i = 0; i < 21; i++) {
    $('#score-' + i.toString()).empty();
  }
};

clearFrameTotals = function(){
  for (var i = 0; i < 11; i++) {
    $('#total-' + i.toString()).empty();
  }
  $('#final-total').empty();
};

newGame = function(){
  var game = new Game();
  var frame = new Frame(game.frame);
};

isScoreValid = function(score){
  if (score === "x" || score === "X" || score === "/" || score < 10){
    return true;
  } else {
    return false;
  }
};

scoreGuard = function(score){
  score = ($("#enter-score").val());
  if (score === 'x' || score === 'X' || score === '/') {
    return;
  } else if (parseInt(score) > 10) {
    alert("Score can not exceed 10, please try again")
  }
  else if ((parseInt(score) + frame.firstTurn) > 10) {
    alert("Score can not exceed 10, please try again")
  }
};

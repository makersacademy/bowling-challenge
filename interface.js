var game = new Game();
var frame = new Frame(game.frame);

$("#save-score").on('click', function(){
    if (game.turn % 2 != 0) {
      frame.addFirstScore(($("#enter-score").val()));
      if (frame.firstTurn == "x") {
        displayScore(frame.firstTurn)
        game.turn ++
        displayScore(frame.secondTurn)
        game.addFrame(frame);
        game.calculateScores();
        frame = new Frame(game.frame)
        displayTotal();
      }
      displayScore(frame.firstTurn)
      game.turn ++
    } else {
      frame.addSecondScore(($("#enter-score").val()));
      displayScore(frame.secondTurn)
      game.turn ++
      game.addFrame(frame);
      game.calculateScores();
      frame = new Frame(game.frame)
      displayTotal();
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

firstTurn = function(){

};

secondTurn = function(){

};

strike_format = function(){

};

test_data = function(){
  console.log("Frame: " + game.frame);
  console.log("Turn: " + game.turn);
  for(var i = 0; i < game.scoreTable.length; i++){
    console.log("Frame " + i + ": " + game.scoreTable[i].total);
  }
};

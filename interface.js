var game = new Game();
var frame = new Frame(game.frame);

$("#save-score").on('click', function(){

    if (game.turn % 2 != 0) {
      frame.addFirstScore($("#enter-score").val());
      displayScore(frame.firstTurn);
      if (frame.firstTurn === "x") {
        game.turn ++
        displayScore(frame.secondTurn);
        game.addFrame(frame);
        game.calculateScores();
      }
    } else {
      frame.addSecondScore($("#enter-score").val());
      displayScore(frame.secondTurn);
      game.addFrame(frame);
      game.calculateScores();
    }
  displayTotal();
  frame = new Frame();
  game.turn ++;
});

displayScore = function(turn){
  $('#score-' + game.turn.toString()).text(turn);
};

displayTotal = function(){
  $('#total-' + game.frame.toString()).text(game.scoreTable[game.frame -1].total);
};

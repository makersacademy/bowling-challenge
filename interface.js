var game = new Game();
var frame = new Frame(game.frame);


$("#save-score").on('click', function(){
  if (game.turn % 2 != 0) {
    frame.firstTurn = $("#enter-score").val();
    frame.firstTurn = Number(frame.firstTurn);
    $('#score_' + game.turn.toString()).text(frame.firstTurn);
  } else {
    frame.secondTurn = $("#enter-score").val();
    frame.secondTurn = Number(frame.secondTurn);
    $('#score_' + game.turn.toString()).text(frame.secondTurn);
    frame.addTotal();
    game.addFrame(frame);
    $("#total_" + (game.frame - 1).toString()).text(game.total);
  }
  game.turn ++
})

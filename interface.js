var game = new Game();
var frame = new Frame(game.frame);


$("#save-score").on('click', function(){
  if (game.turn % 2 != 0) {
    frame.addFirstScore($("#enter-score").val());
    if (!is_strike(frame.firstTurn)) {
      frame.firstTurn = Number(frame.firstTurn);
    } else {
      $('#score_' + game.turn.toString()).text(frame.firstTurn);
    }
    } else {
    frame.secondTurn = $("#enter-score").val();
    frame.secondTurn = Number(frame.secondTurn);
    $('#score_' + game.turn.toString()).text(frame.secondTurn);
    frame.addTotal();
    game.addFrame(frame);
    game.applyBonuses();
    $("#total_" + (game.frame - 1).toString()).text(game.total);
  }
  game.turn ++
})

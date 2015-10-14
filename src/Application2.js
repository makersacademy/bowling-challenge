game = new BowlingScore();

var htmlWriter = function(score){

  if ((game.rawScores[0] !== undefined) &&
    (game.frameScores[game.frameScores.length - 1][1] === undefined) &&
    (game.frameScores[game.frameScores.length - 1][0] + score > 10) &&
    (game.frameScores[game.frameScores.length - 1][0] !== 10)) {
    return;
  };

  game.newRound(score);

  $('#total_score').html(game.gameTotal);

  for(var i = 1; i <= game.frameTotals.length; i++) {
    $('#f' + i.toString()).html(game.frameTotals[i-1]);
  };

  for(var i = 1; i <= game.frameScores.length; i++) {
    if (game._isNoBonus(i-1)) {
      $('#f' + i.toString() + "r1").html(game.frameScores[i-1][0]);
      $('#f' + i.toString() + "r2").html(game.frameScores[i-1][1]);
    };
    if (game._isStrike(i-1)) {
      $('#f' + i.toString() + "r2").html('X');
    };
    if (game._isSpare(i-1)) {
      $('#f' + i.toString() + "r1").html(game.frameScores[i-1][0]);
      $('#f' + i.toString() + "r2").html('/');
    };
  };
};

$(document).ready(function() {
  $(':button').click(function(){
    htmlWriter(Number(this.id.replace('btn', '')));
  });
});

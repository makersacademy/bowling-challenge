$(document).ready(function() {
  var game = new Bowling();

  $('#bowl').click(function () {
    game.firstRoll();
    document.getElementById('current-frame-score').innerHTML = game.pinsKnockedFirst();
    document.getElementById('pins-left').innerHTML = game.pinsLeftAfterFirstRoll();
    document.getElementById('total-current-score').innerHTML = game.viewTotalScore();
    document.getElementById('game-overview').innerHTML = game.gameScoreOverview();


  });

})

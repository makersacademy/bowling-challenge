$(document).ready(function() {
  var game = new Bowling();
  var scoresArray = game.gameScoreOverview();

  $('#bowl').click(function () {
    game.firstRoll();
    document.getElementById('current-frame-score').innerHTML = game.pinsKnockedFirst();
    document.getElementById('pins-left').innerHTML = game.pinsLeftAfterFirstRoll();
    document.getElementById('total-current-score').innerHTML = game.viewTotalScore();
    document.getElementById('game-overview').innerHTML = $.map(scoresArray, function(value) {
        return('<span>' + value + '</span>');
    });
  });

  var array = game.gameScoreOverview();
  var newHTML = [];
  for (var i = 0; i < array.length; i++) {
      newHTML.push('<span>' + array[i] + '</span>');
  }
  $(".scores").html(newHTML.join(""));

})

$( document ).ready(function() {

  var game = new Game();
  newPageStatus();

  $("#bowl").on("click", function () {
    game.bowl();
    refresh();
  });

  function refresh() {
    game.scoreGame();
    $('#roundnumber').text(game.rounds.length + 1);
    $('#bowlnumber').text(game.currentRound.bowlNumber);
    $('#bowltotal').text(getBowlTotal());
    $('#score').text(game.score);
    console.log(game);
  }

  function newPageStatus() {
    game.newRound();
    refresh();
  }

  function getBowlTotal() {
    if (game.rounds.length === 10) {
      return 3;
    }
    else {
      return 2;
    }
  }

});

$( document ).ready(function() {
  var game = new Game();

  $('table').on('change','select', function() {
    try {
      game.roll(parseInt(this.value));
    }
    catch(err) {
      alert(err);
    }
    $("#round-1").text(game._score._scoreboard[0]);
    $("#round-2").text(game._score._scoreboard[1]);
    $("#round-3").text(game._score._scoreboard[2]);
    $("#round-4").text(game._score._scoreboard[3]);
    $("#round-5").text(game._score._scoreboard[4]);
    $("#round-6").text(game._score._scoreboard[5]);
    $("#round-7").text(game._score._scoreboard[6]);
    $("#round-8").text(game._score._scoreboard[7]);
    $("#round-9").text(game._score._scoreboard[8]);
    $("#round-10").text(game._score._scoreboard[9]);
  });

});

$( document ).ready(function() {
  var game = new Game();

  $('table').on('change','select', function() {
    game.roll(this.value);
    $("#round-1").text("Score");
  });

});

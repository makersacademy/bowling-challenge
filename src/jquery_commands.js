$(document).ready(function() {
  var game = new Game();

  $('#bowling-score').html(game.score());

  update = function() {
    $('#bowling-score').text(game.score());
  };

  $('#roll').submit(function(event) {
    $(game.go($("#go").val()));
    update();
    event.preventDefault();
  });

});

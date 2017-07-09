$(document).ready(function() {
  var game = new Game();

  $('.bowl-button').on('click', function() {
    var currentBowl = game.fetchCurrentBowl();
    game.bowl(parseInt(this.id));
    $(currentBowl).text(this.id);
  });

  $('#calculate-score').on('click', function() {
    game.calculateScore();
    $('#current-score>p').text(game.currentScore());
  });

  $(window).on("error", function(event) {
    alert(event.originalEvent.message);
  })

});

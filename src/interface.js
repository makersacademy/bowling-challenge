$(document).ready(function() {
  var game = new Game();


  $(document).ready(function() {
    $('#play').click(function() {
      game.play();
    });
  });

  function updatescore() {
  $('#scores').table(game.scores);
}



});

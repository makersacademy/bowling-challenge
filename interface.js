$(document).ready(function(){
  var game = new Game();


  function updateScore() {
  $('#score').text(game.score());

  });

});

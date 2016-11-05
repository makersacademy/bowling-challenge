
console.log('document loaded');

$(document).ready(function() {

  var game = new Game();
  updateScore();

  $('#5').click(function() {
    game.throw(5);
    console.log(game.score);
    updateScore();
  });

  function updateScore() {
    $('#score').text(game.score);
  };

});

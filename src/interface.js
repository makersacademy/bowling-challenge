  var game = new Game();

$(document).ready(function() {


function updateScore() {
  $('#bowlingo').text(game._tally);
}

  $('#score').submit(function(){
    var ball = $('#result').val();
    game.bowl(ball);
    console.log(ball);
    updateScore();
  });


  $('#rack').click(function() {
    game.currentScore();
    updateScore();
  });

  $('#frame-number').click(function() {
    game.frameScore;
  });

  $('#frame-score').click(function() {
    game._tally;
    updateScore();
  });

  $('#rack-score').click(function() {
    game._currentScore;
    updateScore();
  });

  $('#reset').click(function() {
    game._rack;
    updateScore();
  });


});

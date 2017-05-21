$(document).ready(function() {
  var game = new Game();
  $('#currentTotal').text(game.runningTotal());
  $('#currentFrame').text(game.currentFrame);

  $('#bowl').on('click', function() {
    if(game.frames[9].gameFinished === false) {
      $('#message').text("")
      game.bowl();

      if(game.ballPins[game.ballPins.length - 1] != 1) {
      $('#currentBall').text('You knocked down ' + game.ballPins[game.ballPins.length - 1] + ' pins!');
    } else { $('#currentBall').text('You knocked down ' + game.ballPins[game.ballPins.length - 1] + ' pin!'); }
      if(game.ballPins[game.ballPins.length - 1] === 10) { $('#message').text("Strike!") };

      $('#ballList').text(game.ballPins);
      $('#currentFrame').text(game.currentFrame);
      $('#runningTotal').text(game.runningTotal());
    }
  })

})

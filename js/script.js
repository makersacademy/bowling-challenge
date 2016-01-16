$( document ).ready(function() {
  var game = new Game();

  $('button').click('on', function() {
    var pinsHit = $(this).text()
    var idRollScore = '#frame'+game.currentFrameNumber()+'-roll'
    var idFrameScore = '#frame'+game.currentFrameNumber()+'-score'
    game.play(pinsHit);
    console.log(game)
    $(idRollScore).text(game.currentFrame.getScore().toString());
    $(idFrameScore).text(game.currentFrame.getScore().toString());
    $('#tot-score').text(game.getTotScore().toString());
    $('#message').text(game.currentFrame().getMessage());
  });

});

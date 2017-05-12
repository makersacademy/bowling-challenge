$(function() {
    var game = new Game();
    var count = 0;
    $( '.bowling-ball' ).click(function() {
      $(this).css("animation-play-state", 'running');
      game.play();
      if (game.frameLog.frames[count] !== undefined ) {
        $( '#' + count + '-right' ).text(game.frameLog.frames[count].scores[1]);
        $( '#' + count + '-bottom' ).text(game.frameLog.scorecard.scores[count]);
        count++;
      } else {
        if (game.frameLog.currentFrame.scores[0] === 10) {
          $( '#' + count + '-left' ).text('X');
        }
        else {
        $( '#' + count + '-left' ).text(game.frameLog.currentFrame.scores[0]);
        }
      }
    })
});

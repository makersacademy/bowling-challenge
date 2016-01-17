$( document ).ready(function() {
  var game = new Game();

  $(".bg").interactive_bg({
   strength: 25,
   scale: 1.05,
   animationSpeed: "100ms",
   contain: true,
   wrapContent: false
  });

  $('button').click('on', function() {
    var pinsHit = game.play();
    var idRollScore = '#frame'+game.currentFrameNumber()+'-roll'+game.currentRoll()
    var idFrameScore = '#frame'+game.currentFrameNumber()+'-score'
    var idPrevFrameScore = '#frame'+game.prevFrameNumber()+'-score'
    updateScores(idRollScore, idFrameScore, idPrevFrameScore, pinsHit);
    updateMessage();
    checkIfGameOver();
  });

  $('button').hover(function() {
    $(this).toggleClass('animated bounce')
  });

  var updateMessage = function() {
    // $( "#message" ).addClass('show tada animated');
    // $( "#message" ).addClass('hide').delay( 1800 ).fadeOut( 100 );
    $('#message').text(game.currentFrame.getMessage());
  }

  var updateScores = function(idRollScore, idFrameScore, idPrevFrameScore, pinsHit) {
    $(idRollScore).text(pinsHit);
    $(idFrameScore).text(game.currentFrame.getFinalScore());
    if (game.currentFrameNumber() > 1) {
      $(idPrevFrameScore).text(game.prevFrame().getFinalScore());
    }
    $('#tot-score').text(game.getTotScore());
  }

  var checkIfGameOver = function() {
    if (game.isOver()) {
      alert("Game Over! Your total score is: "+game.getTotScore())
      location.reload()
    }
  }
});

$(window).resize(function() {
    $(".bg > .ibg-bg").css({
      width: $(window).outerWidth(),
      height: $(window).outerHeight()
    })
  })

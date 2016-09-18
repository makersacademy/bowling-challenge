$(document).ready(function() {
  var game = new Game();
  var counter = 1;
  game.nextFrame();

  function randomScore() {
     return Math.floor(Math.random() * (11 - game._currentFrame().firstScore));
  };

  function getElement(target) {
    element = (target === 'score1' ? '-1' : (target === 'score2' ? '-2' : '-3'))
    return '#'+ counter.toString() + element
  }

  function updateDisplay(){
      $(getElement('score1')).text(game.displaySymbols('first'));
      $(getElement('score2')).text(game.displaySymbols('second'));
      $('#10-4').text(game.displaySymbols('third'));
      $(getElement('total')).text(game.calculateGameScore());
  };

  function currentFrame(){
    return '#'+ counter.toString()
  }

  function previousFrame(){
    return '#'+ (counter-1).toString()
  }

  function highlightNextFrame(){
    $(currentFrame()).addClass( "currentturn" );
    $(previousFrame()).removeClass( "currentturn" );
  }

  $("#bowlInput").click(function(){
    game.addScore(randomScore());
    updateDisplay();
  });

  $("#bowlNextFrame").click(function(){
    game.nextFrame();
    counter++;
    highlightNextFrame();
  });

  $("#bowlNewGame").click(function(){
    location.reload();
  });
});

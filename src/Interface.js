'use strict';

$(document).ready(function() {
  var game = new Game();
  game.nextFrame();
  var counter = 1;
  var lastScore = null;


  function randomScore() {
    lastScore = Math.floor(Math.random() * (10 - lastScore));
    return lastScore;
  }

  function getElement(target) {
    var element = (target === '1' ? '-1' : (target === '2' ? '-2' : '-3'))
    return '#'+ counter.toString() + element
  }

  function updateDisplay(){
    $(getElement('1')).text(game.displaySymbols('first'));
    $(getElement('2')).text(game.displaySymbols('second'));
    $('#10-4').text(game.displaySymbols('third'));
    $(getElement('total')).text(game.calculateGameScore());
  }

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

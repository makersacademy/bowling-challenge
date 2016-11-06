"use strict";

$(document).ready(function() {

  var result = 0;
  var game = new Game();
  // var rolls = []; // number of turns in one frame = 2 unless strike
  var gameTracker = []; // number of frames = 10
  var frameCount = 0;
  var count = 20; // number of turns
  var textForJQuery = 'frame' + gameTracker[frameCount];
  var pinsDown;
  var frame;


  $('#points').text(result);
  $('.score').hide();
  $('#game-over').hide();
  $('#show-score').hide();

  // take turn
  $('#take-turn').click(function() {
    if (frameCount === 9) {
      $('#show-score').show();
      $('#take-turn').hide();
    }
    newFrame();
    var finishGame = game.rolls;
    console.log(finishGame);  // rolls is an array of all pins down
  });

  $('#show-score').click(function() {
    $('#score-card').text(game.score());
    $('#game-over').show();
  });

  function newFrame() {
    firstTurn(game);
    if (pinsDown === 10) {
      frameCount += 1;
      alert('STRIKE!!!!')
    } else {
      secondTurn(game, pinsDown);
    }
    // to get each frame onto the next line
    var frameNumber = gameTracker.push(frame)
    var frameNumberForJquery = '#frame' + frameNumber
    $(frameNumberForJquery).text(game.rolls);
    $('#frame-tally').text(frameCount);
  }

  function firstTurn(game) {
    pinsDown = Math.floor((Math.random() * 10) + 1);
    game.rolls.push(pinsDown);
  }

  function secondTurn(game, pinsDown) {
    var secondTurnPinsDown = Math.floor((Math.random() * (10-pinsDown) + 1));
    game.rolls.push(pinsDown);
    frameCount += 1;
    $('#points').text(pinsDown + secondTurnPinsDown);
  }

});

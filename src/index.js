// 'use strict';
// var Game = require('./Game');
// var View = require('./View');

$(document).ready(function() {

  game = new Game();
  view = new View(game);

  for(let ballNumber = 0; ballNumber<20; ballNumber++) {
    let tagName = '#ball' + parseInt(ballNumber+1, 10);
    $(tagName).on('change', function() {
      let score = $(tagName)[0].value;
      valid = validateInput(score, ballNumber);
      if (valid !== false) {
        game.recordScore(parseInt(score, 10));
        view.updateDOM(tagName, ballNumber, score);
      }
    });
  }

  function validateInput(score, ballNumber) {
    if(score > 10) {
      alert("Score cannot be more than 10");
      return false;
    }

  }

  // function updateMessage(ballNumberber) {
  //   message = game.getFrameMessage(ballNumberber);
  //   $('#message' + parseInt(ballNumberber+1, 10)).text(message);
  // }

});

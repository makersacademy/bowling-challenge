// 'use strict';
var Game = require('./Game');
var View = require('./View');



$(document).ready(function() {

  game = new Game();
  view = new View(game);

  for(let num = 0; num<20; num++) {
    let name = '#ball' + parseInt(num+1, 10);
    $(name).on('change', function() {
      let score = $(name)[0].value;
      valid = validateInput(score, num);
      if (valid !== false) {
        game.recordScore(parseInt(score, 10));
        view.updateDOM(name, num, score);
      }
    });
  }

  function validateInput(score, num) {
    if(score > 10) {
      alert("Score cannot be more than 10");
      return false;
    }

  }

  // function updateMessage(number) {
  //   message = game.getFrameMessage(number);
  //   $('#message' + parseInt(number+1, 10)).text(message);
  // }

});

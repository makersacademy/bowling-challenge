'use strict'

$(document).ready(function() {
  let game;

  gameSetup();

  $('#pins-remaining').on('click','button', function(event) {
    play(parseInt(event.currentTarget.id));
  });

  function play(pinsKnockedOver) {
    game.roll(pinsKnockedOver);
    updateGameScore();
    console.log(game);
  }

  function gameSetup() {
    let emptyFrames = [];
    for (let i = 1; i <= 9; i++) {
      emptyFrames.push(new Frame());
    }
    emptyFrames.push(new Frame(true));
    game = new Game(emptyFrames);
  };

  function updateGameScore(){
  console.log(game.score());
  }

});

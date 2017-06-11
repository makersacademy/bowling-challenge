'use strict';

describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });


  it('can handle gutter game', function() {
    playGame(0,0);
    expect(game.score()).toEqual(0);
  });

  function playGame(firstRoll, secondRoll) {
    for(var i = 0;i < 10; i++) {
      game.addFrame(firstRoll, secondRoll);
    };
  };


});

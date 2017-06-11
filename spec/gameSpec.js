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

  it('can handle normal frames', function() {
    playGame(2,3);
    expect(game.score()).toEqual(50);
  });



  function playGame(firstRoll, secondRoll) {
    for(var i = 0;i < 10; i++) {
      game.addFrame(new Frame(firstRoll, secondRoll));
    };
  };


});

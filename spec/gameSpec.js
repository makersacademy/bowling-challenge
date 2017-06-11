'use strict';

describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });


  it('can handle gutter game', function() {
    playGame(0,0,10);
    expect(game.score()).toEqual(0);
  });

  it('can handle normal frames', function() {
    playGame(2,3,10);
    expect(game.score()).toEqual(50);
  });

  it('can handle a spare', function() {
    game.addFrame(new Frame(4,6));
    game.addFrame(new Frame(8,1));
    playGame(0,0,8);
    expect(game.score()).toEqual(27);
  });

  it('can handle a strike', function() {
    game.addFrame(new Frame(10));
    game.addFrame(new Frame(4,3));
    playGame(0,0,8);
    expect(game.score()).toEqual(24);
  });


  function playGame(firstRoll, secondRoll, n) {
    for(var i = 0;i < n; i++) {
      game.addFrame(new Frame(firstRoll, secondRoll));
    };
  };


});
